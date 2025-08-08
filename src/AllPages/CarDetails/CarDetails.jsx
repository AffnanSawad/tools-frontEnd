import { useLoaderData, useParams } from "react-router-dom";


const CarDetails = () => {

         
    //  Load data : 
         
        const CarDetailsInfo = useLoaderData();
       
        const { id } = useParams();
             
        const idInt = parseInt(id);
      
        // Find the specific car by ID
        const AllCarsInfo = CarDetailsInfo.find(car => car.id === idInt);

    
      


    return (
        <div className="container mx-auto px-4 pt-36  ">
        {/* Title */}
        
       <div className="bg-orange-100  pt-16 pb-20">

       <h1 className="text-orange-600 text-3xl italic font-bold text-center pt-10 bg-orange-100  ">
            * {AllCarsInfo.title} *
          </h1>
       
  
        {/* Bike Details */}
       
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 mb-20 bg-orange-100">
            {/* Bike Image */}
            <img
              src={AllCarsInfo.image}
              alt="Bike"
              className="w-full max-w-[500px] rounded-lg shadow-lg"
            />
  
            {/* Bike Description */}
            <div className="text-center font-semibold lg:text-left lg:-mt-2 max-w-xl">
              <h1 className="  font-bold lg:mt-10">{AllCarsInfo.description}</h1>
  
              {/* CC & Price */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-6">
                <h1 className="text-black font-bold italic">
                  <span className="text-orange-600 "> Model : </span> {AllCarsInfo.model}
                </h1>


                <h1 className="text-black font-bold italic">
                  <span className="text-orange-600 "> Brand : </span> {AllCarsInfo.brand}
                </h1>


                <h1 className="text-black font-bold italic">
                  <span className="text-orange-600 "> Fuel : </span> {AllCarsInfo.fuel_type}
                </h1>
  
                <h1 className="text-black font-bold italic">
                  <span className="text-orange-600  ">Price: </span> {AllCarsInfo.price}
                </h1>
              </div>
            </div>
          </div>



       </div>
       
      </div>
    );
};

export default CarDetails;