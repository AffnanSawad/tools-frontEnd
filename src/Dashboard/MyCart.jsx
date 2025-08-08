import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import UseCart from "../Hooke/UseCart";

const MyCart = () => {
  const [cart, refetch] = UseCart(); // Custom hook to fetch cart data

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((total, perCar) => total + perCar.price, 0);

  // Function to handle deleting an item from the cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the API to delete the cart item
        axios
          .delete(`https://car-fusion-server-official.vercel.app/myCarts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Refetch the cart after successful deletion
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Failed!",
                text: "Something went wrong. Item not deleted.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Delete error:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete item. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Cart Overview */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-4">
        <h1 className="text-xl font-bold text-orange-600">
          Total Bookings: {cart.length}
        </h1>
        <h1 className="text-xl font-bold text-orange-600 mt-2 sm:mt-0">
          Total Price: ${totalPrice}
        </h1>
        <Link to="/dashboard/payment" className="mt-4 sm:mt-0">
          <button className="btn btn-active text-lg btn-accent text-white hover:scale-110 transform transition-all duration-300 ease-in-out">
            Pay Online
          </button>
        </Link>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th className="pl-7">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through each item in the cart */}
            {cart.map((item, index) => (
              <tr key={item._id} className="text-center">
                <th>{index + 1}</th>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.title}</td>
                <td className="font-semibold">${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
