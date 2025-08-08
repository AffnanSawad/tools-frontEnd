

const Sponsered = () => {
    return (
        <div className="bg-black py-10">
       
       {/* title */}
        <section className="text-center px-4 py-5">
          <h1 className="text-3xl text-white md:text-4xl font-bold">
            Sponsered <span className="text-orange-400"> By </span>
          </h1>
        </section>
      
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8 ">
          {[
            "https://i.ibb.co.com/1JPKghqX/images-1.png",
            "https://i.ibb.co.com/0p5046np/coca-cola-classic-logo-67kwh94b9j03o8z1-67kwh94b9j03o8z1.jpg",
            "https://i.ibb.co.com/C5DY057t/f77a2dcc9a0923e07b0b39aecb96635d.jpg",
            "https://i.ibb.co.com/KpsjY7HV/black-nike-qnrp7f6ansctjpo2.jpg",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt="Logo"
                className="w-full max-w-[160px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      
    );
};

export default Sponsered;