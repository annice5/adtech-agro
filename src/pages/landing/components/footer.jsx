import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
          {/* Column 1: Brand and Description */}
          <div className="mb-8 md:mb-0 flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4 text-white">AdtechAgro</h2>
            <p className="text-gray-300 text-lg mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="bg-white text-green-600 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-green-600 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-green-600 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="items-end md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Have a Question?</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-300">
                  Greater Accra, Ghana.
                </span>
              </li>
              <li>
                <span className="text-gray-300">+2 392 3929 210</span>
              </li>
              <li>
                <span className="text-gray-300">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-16 text-gray-300">
          <p className="text-sm font-medium">
            &copy; 2024 AdtechAgro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
