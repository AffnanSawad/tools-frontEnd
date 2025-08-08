import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ContactUs from "../AllPages/ContactUs/ContactUs";
import Showoom from "../AllPages/ShowRoom/Showoom";
import AboutUs from "../AllPages/AboutUs/AboutUs";
import SellCar from "../AllPages/SellCar/SellCar";
import LogIn from "../Authentication/LogIn/LogIn";
import SignUp from "../Authentication/SignUp/SignUp";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import CarCollection from "../AllPages/CarCollection/CarCollection";
import CarDetails from "../AllPages/CarDetails/CarDetails";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MyCart from "../Dashboard/MyCart";
import Payment from "../Dashboard/Payment/Payment/Payment";
import UserHome from "../Dashboard/UserHome/UserHome";

// import Home from "../AllPages/Home/Home/Home";



 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>  </Main>,

      children: [

    {
        path : '/',
        element : <Home></Home>
    },
    {
      path: '/contact',
      element: <ContactUs></ContactUs>
    },
    {
      path: '/showroom',
      element : <Showoom></Showoom>
    },
    {
      path: '/aboutus',
      element : <AboutUs></AboutUs>
    },
    {
      path: '/sellcar',
      element : <PrivateRoute><SellCar></SellCar></PrivateRoute>
    },
    {
      path: '/login',
      element: <LogIn></LogIn>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/collections',
      element: <CarCollection></CarCollection>
    },
    {
      path: '/details/:id',

      loader : ()=> fetch('./data.json'),

      element : <PrivateRoute><CarDetails></CarDetails></PrivateRoute>
    },
   


      ]
    },


    {
      path: 'dashboard',
      element : <Dashboard></Dashboard>,

      children : [

    {
     
      path: 'mycart',
      element : <MyCart></MyCart>

    },
    {
      path:'payment',
      element: <Payment></Payment>
    },
    {
      path: 'userHome',
      element: <UserHome></UserHome>
    }
   





      ]
    }
  ]);