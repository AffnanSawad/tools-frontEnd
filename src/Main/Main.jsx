import { Outlet } from "react-router-dom";
import Navbar from "../AllPages/sharedPages/Nav/Navbar";
import Footer from "../AllPages/sharedPages/Footter/Footer";


const Main = () => {
  return (
    <div className="max-w-screen mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    


    </div>
  );
};

export default Main;
