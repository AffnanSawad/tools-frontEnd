import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hooke/UseCart";
import { FaCcAmazonPay } from "react-icons/fa";

const Dashboard = () => {
  const [cart] = UseCart();

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50 font-sans">
      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}
        <div className="lg:w-64 w-full bg-gradient-to-b from-orange-400 to-orange-300 text-black font-semibold p-6 shadow-lg 
          lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"> {/* Full height on large screens */}
          
          {/* Logo or Title */}
          <h2 className="text-2xl font-extrabold tracking-wide text-center mb-8 lg:mb-4">Car Fusion</h2>

          {/* Sidebar Menu */}
          <ul className="space-y-6">

            <li className="border-b border-white/30 pb-2">
              <NavLink
                to="/dashboard/userHome"
                className="block text-lg hover:text-orange-100 transition duration-300"
              >
                🧑‍💻  User
              </NavLink>
            </li>

            <li className="border-b border-white/30 pb-2">
              <NavLink
                to="/dashboard/mycart"
                className="block text-lg hover:text-orange-100 transition duration-300"
              >
                📦 Booking ({cart.length})
              </NavLink>
            </li>

            <li className="border-b border-white/30 pb-2">
              <NavLink
                to="/collections"
                className="block text-lg hover:text-orange-100 transition duration-300"
              >
                🚗 Car
              </NavLink>
            </li>

            <li className="border-b border-white/30 pb-2">
              <NavLink
                to="/dashboard/payment"
                className="block text-lg hover:text-orange-100 transition duration-300"
              >
                💳 Payment
              </NavLink>
            </li>

            <li className="border-b border-white/30 pb-2">
              <NavLink
                to="/contact"
                className="block text-lg hover:text-orange-100 transition duration-300"
              >
                ☎️ Contact
              </NavLink>
            </li>
          </ul>

          {/* Divider */}
          <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm font-semibold text-black/70">
            © 2025 Car Fusion
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-orange-100 p-8 lg:p-12">
          <div className="bg-white rounded-xl shadow-md p-6 min-h-screen">
            {/* Outlet renders dynamic content here */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
