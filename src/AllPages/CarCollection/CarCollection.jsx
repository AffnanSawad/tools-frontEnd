import React, { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";

const CarCollection = () => {
  //  States :
  const [allCars, setAllCars] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // default sort order

  // Fetching Data :
  useEffect(() => {
    fetch("https://car-fusion-server-official.vercel.app/carsCollections")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);

  // Sorted Cars based on sortOrder state
  const sortedCars = [...allCars].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[75vh]">
        <img
          src="https://i.ibb.co.com/yFDJW094/samuele-errico-piccarini-Myj-VRe-Z5-GLQ-unsplash.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
          <h1 className="text-3xl text-white md:text-4xl font-bold text-center">
            Our <span className="text-orange-400">Collections</span>
          </h1>
        </div>
      </div>

      {/* Sort Filter */}
      <div className="flex  bg-orange-100 px-10 pt-10">
        <label htmlFor="sort" className="mr-3 text-2xl text-gray-700 font-bold">
          Sort By Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-orange-100 py-10 ">
        {sortedCars.length > 0 ? (
          sortedCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="text-center col-span-3 text-xl text-gray-600">
            No cars found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CarCollection;

// import React, { useEffect, useState } from 'react';
// import CarCard from '../CarCard/CarCard';

// const CarCollection = () => {

//     const [ AllCars , SetAllCars] = useState([]);

//     //  Fetching Data :
//     useEffect( ()=> {

//         fetch('https://car-fusion-server-official.vercel.app/carsCollections')
//         .then(res=> res.json())
//         .then(data=> SetAllCars(data))
//     }  ,

//     [])

//     return (
//         <div>

//              <div className="relative w-full h-[75vh]">
//   {/* Background Image */}
//   <img
//     src="https://i.ibb.co.com/yFDJW094/samuele-errico-piccarini-Myj-VRe-Z5-GLQ-unsplash.jpg"
//     className="w-full h-full object-cover"
//     alt=""
//   />

//   {/* Title (Centered Text) */}
//   <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
//     <h1 className="text-3xl text-white md:text-4xl font-bold text-center">
//      Our <span className="text-orange-400"> Collections </span>
//     </h1>

//   </div>
// </div>

// <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6 bg-orange-100 p-10">

//     {

//     AllCars.map(car => ( <CarCard key={car.id} car={car} />
//     ))

//     }

// </div>

//         </div>

//     );
// };

// export default CarCollection;
