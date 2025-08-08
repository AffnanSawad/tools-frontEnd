
const CarLogoPage = () => {
    return (
      <div className="page-container bg-black py-10">
  {/* Section Title */}
  <section className="text-center px-4">
    <h1 className="text-3xl text-white md:text-4xl font-bold">
      Explore Luxury Cars <span className="text-orange-400">by Brand</span>
    </h1>
  </section>

  {/* Logos Container */}
  <div className="logo-Container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 px-8 md:px-16 mt-14">
    {[
      { name: "BMW", img: "https://i.ibb.co/JRr8R6sV/2jj4b1n.jpg" },
      { name: "Mercedes", img: "https://i.ibb.co/6JvSSCpZ/b92bf19612e524ac1f9d5e998770eba7.jpg" },
      { name: "Audi", img: "https://i.ibb.co/VWh2vjty/68feb741510242d02b7e29a6ae50983f.jpg" },
      { name: "Mini", img: "https://i.ibb.co/FkYBQcXX/9f4799d5d5ae987e88db80ba4a1ecfb0.jpg" },
      { name: "Jeep", img: "https://i.ibb.co/SYDFpHM/83eabe10c3f75304018c6918f7159a32.jpg" },
      { name: "Jaguar", img: "https://i.ibb.co/Cp7SLh9n/360-F-298250628-St-LEYTl-Qdwblzo4-Jz-Z1igt-R2w1-I8-Jpic.jpg" },
      { name: "Bentley", img: "https://i.ibb.co/vC4mK6fC/773477929d582054256036cf52b07d69.jpg" },
      { name: "Toyota", img: "https://i.ibb.co/wNshhjy3/e38165f639b35fc8705e2819b840455a.jpg" },
      { name: "Ford", img: "https://i.ibb.co/LDkrFQms/c82d5203b979cb9193902dc5a701cf35.jpg" },
      { name: "Honda", img: "https://i.ibb.co/wrJPNYwr/04b2988aa38d8343f21e0ab65cba47f8.jpg" },
      { name: "Mazda", img: "https://i.ibb.co/KxMmL4vp/67cf9896332ba25bdcb13c9ce5a901ad.jpg" },
      { name: "Hyundai", img: "https://i.ibb.co/Wv38pWQX/hyundai-logo-brand-symbol-with-name-white-design-south-korean-car-automobile-illustration-with-black.jpg" },
    ].map((brand, index) => (
      <div key={index} className="text-center">
        <img
          src={brand.img}
          alt={`${brand.name} Logo`}
          className="w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24 object-contain mx-auto"
        />
        <p className="font-semibold text-white mt-2">{brand.name}</p>
      </div>
    ))}
  </div>
</div>

    );
};

export default CarLogoPage;