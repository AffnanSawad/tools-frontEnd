import { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [comment, setComment] = useState("");

  // handle submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      comment: comment,
    };

    fetch("https://car-fusion-server-official.vercel.app/myreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Swal.fire({
          title: "Submitted Successfully!",
          // text: 'Successfully Sign In!',
          icon: "success",
          confirmButtonText: "Cool",
          position: "top-right",
        });

        // ✅ Reset state after successful submission
        setName("");
        setEmail("");
        setComment("");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "warning",
          title: "Failed To Submit",

          timer: 1500,
          showConfirmButton: false,
          position: "top-right",
        });
      });
  };

  return (
    <div className="bg-orange-50">
      <div className="relative w-full h-[75vh]">
        {/* Background Image */}
        <img
          src="https://i.ibb.co/jZLtQdM8/side-view-cropped-unrecognizable-business-people-working-common-desk.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        {/* Title (Centered Text) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
          <h1 className="text-3xl text-white md:text-4xl font-bold text-center">
            Contact <span className="text-orange-400">Us</span>
          </h1>
        </div>
      </div>

      <div className="contact-ways bg-orange-50 py-20 ">
        <div className="cardContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 my-10">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-sm p-5 hover:scale-110 transition-transform duration-700">
            <h1 className="mx-auto">
              <FaAddressCard size={100} className="mt-5 text-gray-700" />
            </h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title  text-2xl font-bold text-orange-500">
                Showroom Address
              </h2>
              <p className="font-semibold">
                A-99/100, Ganesh Nagar, Tilak Nagar, Delhi 110018
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-sm p-5 hover:scale-110 transition-transform duration-700">
            <h1 className="mx-auto">
              <IoCallSharp size={100} className="mt-5" />
            </h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold text-orange-500">
                Call Us
              </h2>
              <p className="font-semibold">
                +91 9999999 681 <br />
                +91 999999 2532
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-sm p-5 hover:scale-110 transition-transform duration-700">
            <h1 className="mx-auto">
              <MdEmail size={100} className="mt-5 " />
            </h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold text-orange-500">
                Mail Us
              </h2>
              <p className="font-semibold">tarun.fusion@gmail.com</p>
            </div>
          </div>

          {/* 4 */}

          <div className="card bg-base-100 shadow-sm p-5 hover:scale-110 transition-transform duration-700">
            <h1 className="mx-auto">
              <IoIosTime size={100} className="mt-5 " />
            </h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold text-orange-500">
                Timings
              </h2>
              <p className="font-semibold">
                Mon - Sun: <br />
                10am - 8pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container w-full bg-orange-50 flex items-center justify-center min-h-screen px-4 hover:scale-110 transition-transform duration-700">
        <div className="bg-black flex flex-col md:flex-row w-full max-w-6xl px-6 py-10 gap-10 items-center rounded-3xl mb-5  -mt-20">
          {/* Left Side - Image */}
          <div className="w-full md:w-2/3 flex justify-center">
            <img
              src="https://i.ibb.co.com/5WDdnshK/freestocks-mw6-Onwg4fr-Y-unsplash.jpg"
              alt="Business People Working"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-8 rounded-lg w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-center  mb-6 text-orange-500">
              Contact Us
            </h2>

            {/* Name & Email in Flex */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name */}
              <div className="form-control w-full">
                <label className="label font-medium">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="input input-bordered w-full p-2 border rounded-md focus:ring-2 focus:ring-200 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control w-full">
                <label className="label font-medium">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="input input-bordered w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                  required
                />
              </div>
            </div>

            {/* Comment Section */}
            <div className="mt-4">
              <label className="block text-lg font-semibold mb-2">
                Enter Your Comments:
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                placeholder="Type here..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
