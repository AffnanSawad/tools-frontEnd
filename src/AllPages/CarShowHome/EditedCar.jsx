


const EditedCar = ({car}) => {
     
  // Destructuring data :
    const{ image , fuel_type , model ,title,price} = car;
   
   
    return (
       
      //  Card
       
       <div>  

<div className="card bg-white w-96 shadow-xl flex flex-col h-full">
  <figure className="px-2 pt-2">
    <img
      src={image}
      alt={title}
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
    <div className="text-center ">
      <p className="text-2xl font-bold italic">Price : $ {price}</p>
    </div>
  
  </div>
  </div>
  </div>


        
    );
};

export default EditedCar;