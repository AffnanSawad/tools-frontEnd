import { BiSolidLocationPlus } from "react-icons/bi";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { MdAddLocationAlt} from "react-icons/md";

const Showoom = () => {
    return (
        <div className="bg-orange-50">
        <div className="relative w-full h-[50vh] md:h-[75vh]">
          {/* Background Image */}
          <img
            src="https://i.ibb.co.com/cSV9bbbW/d6e860198468263-6642133d3f800.jpg"
            className="w-full h-full object-cover"
            alt="Showroom Background"
          />
          
          {/* Title (Centered Text) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
              Our <span className="text-orange-400">Showrooms</span>
            </h1>
          </div>
        </div>
        
        <div className="contact-ways bg-orange-50 py-20 px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition-transform duration-300">
              <MdAddLocationAlt size={80} className="mt-5 text-gray-700 mx-auto" />
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl text-orange-500 font-bold my-2">India</h2>
                <p className="font-semibold">A-99/100, Ganesh Nagar, Tilak Nagar, Delhi, India</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="card bg-white shadow-sm p-5 hover:scale-105 transition-transform duration-300">
              <FaLocationPin size={80} className="mt-5 mx-auto" />
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl text-orange-500 font-bold my-2">Bangladesh</h2>
                <p className="font-semibold">132/A, Khan Lane, Gulshan, Dhaka</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition-transform duration-300">
              <FaLocationDot size={80} className="mt-5 mx-auto" />
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl text-orange-500 font-bold my-2">Germany</h2>
                <p className="font-semibold">Musterstraße, 1210115, Berlin, Germany</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition-transform duration-300">
              <BiSolidLocationPlus size={80} className="mt-5 mx-auto" />
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl text-orange-500 font-bold my-2">USA</h2>
                <p className="font-semibold">Green Park Avenue, Queens, New York</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="form-container w-full bg-orange-50 flex items-center justify-center min-h-screen px-4 ">
          <div className=" flex flex-col md:flex-row w-full max-w-6xl  items-center   mb-5 hover:scale-105 transition-transform duration-700 -mt-20   rounded-3xl">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.ibb.co.com/cSV9bbbW/d6e860198468263-6642133d3f800.jpg" 
                alt="Business People Working"
                className="w-full h-auto md:h-[400px] lg:h-[500px]  object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.ibb.co.com/5gzJHhBz/bb6dbea9f227f705bb70e8395301696f.jpg" 
                alt="Business People Working"
                className="w-full h-auto md:h-[400px] lg:h-[500px]  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Showoom;