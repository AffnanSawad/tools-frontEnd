import { useState } from "react";
import Swal from "sweetalert2";

const SellCar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [carImages, setCarImages] = useState(null);
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      nid: nid,
      passportNumber: passportNumber,
      carBrand: carBrand,
      carModel: carModel,
      manufacturingYear: manufacturingYear,
      mileage: mileage,
      condition: condition,
      price: price,
      carImages: carImages,
      additionalDetails: additionalDetails,
    };

    fetch("/https://car-fusion-server-official.vercel.appsellingCars", {
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
        setNid("");
        setPassportNumber("");
        setCarBrand("");
        setCarModel("");
        setManufacturingYear("");
        setMileage("");
        setCondition("");
        setPrice("");
        setCarImages("");
        setAdditionalDetails("");
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
    <div className="bg-orange-50 pb-5">
      {/* Cover Section */}
      <div className="relative w-full h-[75vh]">
        {/* Background Image */}
        <img
          src="https://i.ibb.co.com/SD6hm1pf/istockphoto-1373210791-612x612.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        {/* Title (Centered Text) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
          <h1 className="text-3xl text-white md:text-4xl font-bold text-center">
            Sell <span className="text-orange-400"> Your Car </span>
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 my-16 pb-10">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">
          Car Selling Form
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleFormSubmit}
        >
          {/* Personal Info */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              NID Number
            </label>
            <input
              value={nid}
              onChange={(e) => setNid(e.target.value)}
              type="text"
              placeholder="Enter your NID number"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Passport Number
            </label>
            <input
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              type="text"
              placeholder="Enter passport number (if available)"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Car Info */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Car Brand
            </label>
            <input
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
              type="text"
              placeholder="Enter car brand"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Car Model
            </label>
            <input
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              type="text"
              placeholder="Enter car model"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Manufacturing Year
            </label>
            <input
              value={manufacturingYear}
              onChange={(e) => setManufacturingYear(e.target.value)}
              type="number"
              placeholder="Enter manufacturing year"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mileage (KM)
            </label>
            <input
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              type="number"
              placeholder="Enter mileage"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Condition
            </label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option>New</option>
              <option>Used - Excellent</option>
              <option>Used - Good</option>
              <option>Used - Fair</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price (in USD)
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Enter selling price"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Car Images
            </label>
            <input
              type="file"
              className="w-full p-3 border border-gray-300 rounded-md"
              multiple
              onChange={(e) => setCarImages(e.target.files)}
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Additional Details
            </label>
            <textarea
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              placeholder="Provide extra details about your car..."
              className="w-full p-3 border border-gray-300 rounded-md h-28"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn bg-[#C19A6B] text-white text-lg font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300"
            >
              Sell Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellCar;
