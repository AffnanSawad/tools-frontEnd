import { Link } from "react-router-dom";




const AboutSection = () => {
    return (
        <div className="bg-black text-white">
        <div className="hero bg-black min-h-screen w-full px-4 md:px-10">
          <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
            
            {/* Image Section */}
            <img
              src="https://i.ibb.co/D03VFLX/rafael-hoyos-weht-t-YSMk-OLXg-A-unsplash.jpg"
              className="w-full max-w-[600px] rounded-lg shadow-2xl"
              alt="Car Dealership"
            />
  
            {/* Text Section */}
            <div className="lg:ml-20 w-full lg:w-2/3 mt-8 lg:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold">ABOUT US</h1>
              <p className="py-6">
                We’re a pre-owned car dealership in Tilak Nagar, Delhi with a focus on transparency and impeccable client service in mind since the very beginning…
              </p>
  
              {/* Highlights */}
              <div className="gap-5 font-bold">
                <h1 className="py-1">✅ 5000+ Happy Clients Since 2008.</h1>
                <h1 className="py-1">✅ Premium less driven pre-owned cars.</h1>
                <h1 className="py-1">✅ 25+ Best Quality Awards.</h1>
              </div>
  
              {/* Button */}
              <div className="pt-10">
                
                <Link to='aboutus'>
                
                <button className="btn bg-[#C19A6B] hover:bg-black text-white px-6 py-3 text-xl uppercase rounded-lg transition">
                  Know More
                </button>
                
                </Link>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;