import { Link } from "react-router-dom";


const Advertisement = () => {
    return (
<div>
  <div
    className="hero min-h-[70vh] w-full bg-black rounded-3xl"
    style={{
      backgroundImage: "url(https://i.ibb.co.com/fGD3kMYN/olav-tvedt-yq-ef-MJMu-Pg-unsplash.jpg)",
    }}
  >
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-[90%] sm:max-w-md mx-auto">
        <h1 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Looking to sell your car profitably?
        </h1>
        <Link to="/sellcar">
          <button className="btn text-white font-bold bg-[#C19A6B] hover:bg-black">
            Sell Now!
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>








       
    );
};

export default Advertisement;