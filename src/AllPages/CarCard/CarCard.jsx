import { useContext } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import UseCart from "../../Hooke/UseCart";
import Swal from "sweetalert2";
import axios from "axios";

const CarCard = ({ car }) => {
  //  Destructuring Data :

  const { id, image, fuel_type, details, model, brand, title, price } = car;

  const { user } = useContext(AuthContext);

  const [, refetch] = UseCart();

  const navigate = useNavigate();

  //  Add to Cart Handler
  // const handle_Add_To_My_Cart = (car_Info)=>{

  //   if( user && user.email){

  //    console.log( car_Info, user.email );

  //    //  ki ki info cart e pathabo
  //   const  car_cart_item = {

  //    carId : id ,
  //    email : user.email ,
  //    title,
  //    image,
  //    price,
  //    brand
  //    }

  //    // axios er maddhme cart e pathabo .[ post , backend e post kora lgbe]
  //    axios.post('https://car-fusion-server-official.vercel.app/myCarts', car_cart_item)
  //    .then( result =>{
  //             console.log(result.data)

  //             if( result.data.insertedId){

  //              Swal.fire({
  //                position: "top-right",
  //                icon: "success",
  //                title: `${title} Added To Your Cart!`,
  //                showConfirmButton: false,
  //                timer: 1500
  //              });

  //                //  refetch is used to count automatically in the dashboard without loading //
  //                refetch();

  //             }
  //          })
  //   }
  //              // User na thakle alert dibe : & login page e niye jabe
  //        else{

  //          Swal.fire({
  //            title: "You Are Not Log In !",
  //            text: "Please Log In First To Booked Bikes!",
  //            icon: "warning",
  //            showCancelButton: true,
  //            confirmButtonColor: "#3085d6",
  //            cancelButtonColor: "#d33",
  //            confirmButtonText: "Log In Now !"
  //          }).then((result) => {
  //            if (result.isConfirmed) {

  //              navigate('/login');

  //            }
  //          });

  //   }

  //  }

  const handle_Add_To_My_Cart = (car_Info) => {
    if (user && user.email) {
      const car_cart_item = {
        carId: car_Info.id, // Assuming car_Info has id
        email: user.email,
        title: car_Info.title,
        image: car_Info.image,
        price: car_Info.price,
        brand: car_Info.brand,
      };

      // Step 1: Check if the car is already in the cart
      axios
        .get(
          `https://car-fusion-server-official.vercel.app/myCarts?email=${user.email}`
        )
        .then((res) => {
          const existingCart = res.data;

          const isAlreadyInCart = existingCart.some(
            (item) => item.carId === car_cart_item.carId
          );

          if (isAlreadyInCart) {
            Swal.fire({
              icon: "warning",
              title: "Already in Cart!",
              text: `${car_cart_item.title} is already added to your cart.`,
              timer: 2000,
              showConfirmButton: false,
             
            });
          } else {
            // Step 2: Proceed to add if not already in cart
            axios
              .post(
                "https://car-fusion-server-official.vercel.app/myCarts",
                car_cart_item
              )
              .then((result) => {
                console.log(result.data);

                if (result.data.insertedId) {
                  Swal.fire({
                    
                    icon: "success",
                    title: `${car_cart_item.title} Added To Your Cart!`,
                    showConfirmButton: false,
                    timer: 2000,
                  });

                  refetch(); // Refresh the cart count
                }
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    } else {
      Swal.fire({
        title: "You Are Not Logged In!",
        text: "Please log in first to add bikes to your cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="Card-Container">
      <div className="card bg-white w-96 shadow-xl flex flex-col h-full">
        <figure className="px-2 pt-2">
          <img
            src={image}
            className=" rounded-md object-cover h-64 w-full" // Ensure image doesn't overflow
          />
        </figure>
        <div className="card-body flex flex-col justify-between flex-grow">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex gap-2 my-2">
            <p className="font-semibold">
              <span className="font-bold">Model :</span> {model}
            </p>
            <p className="font-semibold">
              <span className="font-bold">Fuel :</span> {fuel_type}
            </p>
          </div>
          <div className="text-center my-3">
            <p className="text-2xl font-bold italic">Price : $ {price}</p>
          </div>
          <div className="card-actions flex gap-2 mt-4">
            {/* View Details Button */}

            <Link to={`/details/${id}`} className="flex w-full">
              <button className="btn bg-black font-bold w-full hover:bg-[#C19A6B] text-white py-2 rounded-lg transition duration-300">
                <TbListDetails />
                View Details
              </button>
            </Link>

            <Link className="flex w-full">
              <button
                onClick={() => handle_Add_To_My_Cart(car)}
                className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300"
              >
                <BiSolidCartAdd />
                Add To Your Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
