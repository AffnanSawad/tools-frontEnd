import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {



    const stripePromise = loadStripe("pk_test_51Puq4iP47hsetpRFjul6qF5Nti0dZz3rkEtPrn2PxNzk778ktRg6VNNNKRVBoVYsBWTBAOJWZnxlGbflMlPRqITt00Bh3rkenf");
    return (
        <div>
            <Elements stripe={stripePromise}>
      <CheckoutForm />
       </Elements>
        </div>
    );
};

export default Payment;