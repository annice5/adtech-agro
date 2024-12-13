import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from '../../../assets/logo.jpg';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-8 sm:py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Column 1: Brand and Description */}
          <div className="text-center md:text-left">
            <div className="w-32 sm:w-40 mx-auto md:mx-0">
              <img src={logo} alt="logo" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-300 text-sm sm:text-base mt-5 leading-relaxed">
              Your trusted source for premium poultry feed, delivering sustainable and high-quality solutions to enhance your farm's productivity.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href="#"
                className="bg-white text-green-700 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white text-green-700 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white text-green-700 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-yellow-400 inline-block">
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="product"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-yellow-400 inline-block">
              Have a Question?
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex justify-center md:justify-start items-start space-x-2">
                <span className="text-gray-300">Sunyani-Fiapre, Bono Region.</span>
              </li>
              <li className="flex justify-center md:justify-start items-start space-x-2">
                <span className="text-gray-300">0541537190</span>
              </li>
              <li className="flex justify-center md:justify-start items-start space-x-2">
                <span className="text-gray-300">adtechagroltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 md:mt-16 text-center border-t border-gray-700 pt-6">
          <p className="text-xs sm:text-sm font-medium text-gray-400">
            &copy; 2024 AdtechAgro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
