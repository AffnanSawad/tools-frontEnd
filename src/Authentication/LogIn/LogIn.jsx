import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const LogIn = () => {
  const { setUser, LogIn, GoogleLogIn, FaceBookLogIn, LogOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  //   form handler
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    LogIn(email, password)
      .then((result) => {
        // JWT
        const loggedUser = result.user;
        console.log("token", loggedUser);
        const user = { email };
        axios
          .post("https://car-fusion-server-official.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
        // jwt ends here

        navigate("/");

        setUser(result.user);

        e.target.reset();

        // sweetalert
        // alert
        Swal.fire({
          title: "Log In Successfully!",
          // text: 'Successfully Sign In!',
          icon: "success",
          confirmButtonText: "Cool",
        });
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  //    Handler for goggle

  const handler_googleLogIn = () => {
    GoogleLogIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  //   handler for Facebook

  const handler_facebookLogin = () => {
    FaceBookLogIn()
      .then((result) => {
        console.log(result.user);

        navigate("/");
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center p-4 pt-28">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-3xl  p-6 md:p-10">
        {/* Left Side - Form */}
        <form
          onSubmit={handleLogin}
          className="shadow-lg p-8 rounded-lg w-full flex flex-col gap-6 transition-transform duration-700 shadow-orange-300 bg-white"
        >
          <h2 className="text-xl font-bold text-center text-orange-500">
            Log In To Your Account
          </h2>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div className="form-control w-full">
              <label className="label font-medium">Email:</label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label font-medium">Password:</label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border-orange-500"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 font-medium"
              >
                I accept the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>

          <button className="bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300">
            Login
          </button>

          {error && (
            <h4 className=" font-bold italic text-red-700">{error} </h4>
          )}

          <hr />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handler_facebookLogin}
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Facebook
            </button>

            <button
              onClick={handler_googleLogIn}
              type="button"
              className="text-black bg-gray-100 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
            >
              <FcGoogle className="mr-2" size={20} />
              Sign in with Google
            </button>
          </div>

          <hr />
          <h1 className="font-semibold text-center">
            Don't have an Account yet?{" "}
            <Link to="/signup" className="underline text-blue-500 italic">
              Sign Up!
            </Link>
          </h1>
        </form>

        {/* Right Side - Image */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="https://i.ibb.co/HTDvL65B/3094352.jpg"
            alt="Business People Working"
            className="rounded-lg max-w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
