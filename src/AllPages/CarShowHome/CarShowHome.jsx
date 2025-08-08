import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import EditedCar from "./EditedCar";
import { FaEye } from "react-icons/fa";


const CarShowHome = () => {

 //  Set States :
 
     const [ AllCars , SetAllCars] = useState([]);
        

    //  Fetching Data:

     useEffect( ()=> {
 
         fetch('/data.json')
         .then(res=> res.json())
         .then(data=> SetAllCars(data))
 
 
     }  ,[])




    return (
        <div className="bg-orange-100">
           
           
           <h1 className="text-4xl text-black font-bold text-center pt-10">Our <span className="text-orange-400"> Collections </span></h1>
         
        {/* Slicing data */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-orange-100 py-10  ">
          
      
          {AllCars.slice(0, 3).map(car => (
            <EditedCar key={car.id} car={car} />
          ))}
      
          {/* Centering the "View All" button */}
          <div className="flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-3 ">
            <Link to="/collections">
              <button className="btn bg-black font-bold py-4 mt-4 lg:w-[500px]  md:w-[500px] hover:bg-[#C19A6B]  text-white px-6 rounded-lg transition duration-300  ">
              <FaEye />
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    );
};

export default CarShowHome;