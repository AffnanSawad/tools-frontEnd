import Sponsered from "../Sponsered/Sponsered";

const AboutUs = () => {
  return (
    <div className="bg-orange-50">
      {/* Cover Section */}
      <div className="relative w-full h-[75vh]">
        <img
          src="https://i.ibb.co.com/h1c4bbL6/luxury-showroom-interior-car-dealership-office-new-car-parked-modern-showroom-chairs-customer-servic.webp"
          alt="About Us Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            About <span className="text-orange-400"> Us </span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Welcome to Car Fusion
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10 font-semibold">
          Car Fusion is your one-stop solution for buying, selling, and
          servicing cars. We provide a seamless platform where customers can
          explore a wide range of cars, book services, and enjoy a hassle-free
          experience with secure payments.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-700">
            <h3 className="text-2xl font-bold text-orange-500">Our Mission</h3>
            <p className="text-gray-700 mt-3 font-semibold ">
              To revolutionize the automobile industry by offering a
              trustworthy, efficient, and customer-friendly marketplace for car
              buyers and service seekers.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-700">
            <h3 className="text-2xl font-bold text-orange-500 ">Our Vision</h3>
            <p className="text-gray-700 mt-3 font-semibold">
              To be the most preferred and reliable automotive marketplace,
              bringing innovation, transparency, and ease to car trading and
              servicing.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 ">
          <h2 className="text-3xl font-bold text-orange-500 text-center">
            Why Choose Car Fusion?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 ">
            <div className="bg-white p-6 shadow-md rounded-xl text-center  hover:scale-105 transition-transform duration-700">
              <h4 className="text-xl font-semibold text-gray-900 ">
                Wide Range of Cars
              </h4>
              <p className="text-gray-700 mt-2 font-semibold">
                Explore cars from top brands with detailed specifications and
                price comparisons.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-xl text-center hover:scale-105 transition-transform duration-700">
              <h4 className="text-xl font-semibold text-gray-900">
                Secure Payment
              </h4>
              <p className="text-gray-700 mt-2 font-semibold">
                Our secure payment system ensures safe transactions for car
                purchases and services.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-xl text-center hover:scale-105 transition-transform duration-700">
              <h4 className="text-xl font-semibold text-gray-900">
                Quality Services
              </h4>
              <p className="text-gray-700 mt-2 font-semibold">
                We offer top-notch car repair and maintenance services with
                skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <Sponsered></Sponsered>
      </div>

      <hr />
    </div>
  );
};

export default AboutUs;
