import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold text-white flex items-center">
            Adtech<span className="text-yellow-400">Agro</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#"
              className="text-yellow-400 px-3 py-2 font-semibold rounded-md hover:text-white transition duration-300"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              PRODUCTS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              TESTIMONIAL
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition duration-300"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Search Icon */}
        <button className="hidden md:flex w-10 h-10 items-center justify-center bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition duration-300">
          <Search />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-gradient-to-r from-green-600 to-green-500 text-white space-y-4 px-4 py-6 transform transition duration-300 ease-in-out">
          <li>
            <a
              href="#"
              className="block text-yellow-400 px-3 py-2 font-semibold rounded-md hover:text-white transition duration-300"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              PRODUCTS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-300 px-3 py-2 font-semibold rounded-md hover:text-yellow-400 transition duration-300"
            >
              TESTIMONIAL
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
