import { AiFillCustomerService } from "react-icons/ai";
import { FaHandshake, FaLightbulb } from "react-icons/fa";


const AfterBanner = () => {
    return (
        <div className="bg-orange-50  pb-10">


    <section className="mx-auto text-center ">
        {/* title */}
         
         <p className="text-orange-300 font-bold pt-20"> 100+ CARS TYPE & BRANDS  </p>
         <h1 className="text-3xl font-bold "> Fusion Cars <span className="font-extrabold">Advantage</span>  </h1>

    </section>
   


    <div className="cardContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 my-10">

{/* Card 1 */}
<div className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition-transform duration-800">
  <h1 className="mx-auto">
    <AiFillCustomerService size={100} className="mt-5 text-gray-700" />
  </h1>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">100% Customer Satisfaction</h2>
    <p>Dedicated team of experts</p>
  </div>
</div>

{/* Card 2 */}
<div className="card bg-[#C19A6B] text-white shadow-sm p-5 hover:scale-105 transition-transform duration-800">
  <h1 className="mx-auto">
    <FaHandshake size={100} className="mt-5" />
  </h1>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Transparent Dealing</h2>
    <p>Hassle-free paperwork and peace of mind</p>
  </div>
</div>

{/* Card 3 */}
<div className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition-transform duration-800">
  <h1 className="mx-auto">
    <FaLightbulb size={100} className="mt-5 text-yellow-500" />
  </h1>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Unique Selection</h2>
    <p>Explore a wide range of pre-loved cars</p>
  </div>
</div>

</div>




        </div>
    );
};

export default AfterBanner;