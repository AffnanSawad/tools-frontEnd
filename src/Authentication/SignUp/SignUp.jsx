import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

 
  const {setUser,SignUp,GoogleLogIn, FaceBookLogIn} = useContext(AuthContext);
  

  //  success hole navigate kore onno page e niye jabe;
  const navigate = useNavigate();

  const [error , setError] = useState('');

  

  //  form handler 



  const handle_SignUp = (e) => {
    e.preventDefault();
  
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    const birthdate = e.target.date.value;
    const Gender = e.target.gender.value;
  
    console.log(name, email, password, confirmpassword, birthdate, Gender);
  
    // Reset the error message before each attempt
    setError('');
  
    // Password validation [regex]
    const regex = /^(?=(.*[A-Z])).{6,}$/;
  
    // Check if the password matches the regex
    if (!regex.test(password)) {
      setError('Password is invalid. It must be at least 6 characters long and contain at least one uppercase letter.');
      return;
    }
  
    if (password !== confirmpassword) {
      setError('Password and confirm password do not match.');
      return;
    }
  
    // Sign Up
    SignUp(email, password)
      .then((result) => {
        setUser(result.user);
  
        // Form reset
        e.target.reset();
  
        // Navigate to the home page
        navigate('/');
  
        // SweetAlert for success
        Swal.fire({
          title: 'Sign Up Successfully!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
     
      })
      .catch((error) => {
        // Show error message if sign-up fails
        setError(error.message);
      });
  };
  

  //  Goggle logIn handler
  const handleGoogleLogin = ()=>{

    GoogleLogIn()
    .then(result => {

        console.log(result.user);

        Swal.fire({
          title: "  Logged In!",
          text: "You Are Successfully Logged In!",
          icon: "success"
        });

        //    navigate
        navigate('/');

    
    })

    .catch(error=>{
        console.log(error.message)
    })

}

   
//  Handler facebook

const handler_facebook = () => {

  FaceBookLogIn()
  .then( result =>{
    console.log(result.user)

    navigate('/') 
  })
  .catch(error=> {
    console.log(error.message)
  })
}





  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center px-6 py-20">
    
  
    
    
      <div className="flex flex-col md:grid md:grid-cols-2 w-full max-w-6xl px-6 py-10 gap-10 items-center rounded-3xl mt-5">
        
        {/* Left Side - Image */}
        <div className="w-full  justify-center items-center shadow-2xl shadow-black md:block hidden">
          <img
            src="https://i.ibb.co.com/chrj7Xn6/6368592.jpg"
            alt="Sign Up Illustration"
            className="rounded-lg h-[600px]   w-full object-cover shadow-lg"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <form onSubmit={handle_SignUp} className="w-full bg-white p-8 rounded-lg  flex flex-col gap-6 shadow-2xl shadow-orange-300 mt-5">
          <h2 className="text-xl font-bold text-center text-orange-500">Create an Account</h2>
          
          {/* Name */}
          <div>
            <label className="block font-medium">Your Name:</label>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full p-2 border rounded-md" required />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Your Email:</label>
            <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full p-2 border rounded-md" required />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password:</label>
            <input name="password" type="password" placeholder="Your password" className="input input-bordered w-full p-2 border rounded-md" required />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium">Confirm Password:</label>
            <input name="confirmpassword" type="password" placeholder="Confirm password" className="input input-bordered w-full p-2 border rounded-md" required />
          </div>

          {/* Birthdate and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Date of Birth:</label>
              <input name="date" type="date" className="input input-bordered w-full p-2 border rounded-md" required />
            </div>
            <div className="mt-4">
              <label className="block font-medium">Gender:</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input  type="radio" name="gender" value="male" className="w-4 h-4" required />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" className="w-4 h-4" required />
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4 border-orange-500" required />
            <label htmlFor="terms" className="text-sm text-gray-700 font-medium">
              I accept the <a href="#" className="text-blue-500 underline">Terms & Conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <button className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300">
            Sign Up
          </button>


          {
        error && <h4 className=" font-bold italic text-red-700">{error} </h4>

           }

          <hr />

        

          {/* Social media button - google , fb */}
          <div className="flex flex-col sm:flex-row  gap-4 justify-center">
                        <button onClick={handler_facebook} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                            Sign in with Facebook
                        </button>

                        <button onClick={handleGoogleLogin} type="button" className="text-black bg-gray-100 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center">
                            <FcGoogle className="mr-2" size={20} />
                            Sign in with Google
                        </button>
                    </div>

          <hr />

          <p className="text-center text-sm font-medium">
            Already have an account? 
            <Link to="/login" className="text-blue-500 underline ml-1 italic">Log In</Link>
          </p>
        </form>
      </div>
    </div>
 
  );
};

export default SignUp;
