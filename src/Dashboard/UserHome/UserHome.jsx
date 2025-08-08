import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const UserHome = () => {
  const { user } = useContext(AuthContext);

  const userName = user?.displayName || user?.email || 'Guest';
  const userPhoto =  'https://i.ibb.co.com/WS1MgYq/blue-circle-with-white-user-78370-4707.jpg'; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-lg md:max-w-3xl flex flex-col items-center space-y-6 transition-all duration-500 hover:shadow-lg hover:shadow-purple-300">
        
        {/* Profile Picture */}
        <img
          src={userPhoto}
          alt="User Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-500 shadow-md"
        />

        {/* Welcome Text */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          Welcome Back,
        </h1>
        <h2 className="text-xl sm:text-2xl text-purple-600 font-semibold text-center">
          {userName}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-lg text-gray-500 font-bold text-center px-4">
          We're glad to see you here! Explore your dashboard and manage your activities effortlessly.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/dashboard/myCart">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-md transition-all w-full sm:w-auto">
              👜 Go to My Cart
            </button>
          </Link>
          
          <Link to="/">
            <button className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-dark shadow-md transition-all w-full sm:w-auto">
              🏠 Go To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
