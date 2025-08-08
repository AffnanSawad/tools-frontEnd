import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import UseCart from "../../../Hooke/UseCart";
import axios from "axios";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useContext(AuthContext);
  const [cart, refetch] = UseCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axios
        .post(
          "https://car-fusion-server-official.vercel.app/create-payment-intent",
          {
            price: totalPrice,
          }
        )
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axios, totalPrice]);

  // form onsubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.carId),
          status: "pending",
        };

        const res = await axios.post(
          "https://car-fusion-server-official.vercel.app/payments",
          payment
        );
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            
            icon: "success",
            title: "You paid successfully! Thank You.",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/");
        }
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-8 bg-gray-100 rounded-lg shadow-xl mt-20"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          💳 Complete Your Payment
        </h2>

        <div className="mt-12 mb-4">
          <label
            htmlFor="card-details"
            className="block text-sm font-semibold text-gray-700 mb-4 "
          >
            Enter your payment details:
          </label>
          <CardElement
            id="card-details"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-sm btn-primary my-10 w-full h-[42px] py-2  rounded-md font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition duration-300"
        >
          Pay Now
        </button>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}

        {transactionId && (
          <div className="text-center mt-6">
            <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-md">
              <p className="text-2xl font-extrabold">🎉 Payment Successful!</p>
              <p className="text-lg mt-2">Your transaction ID:</p>
              <p className="font-semibold text-xl">{transactionId}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
