import { Bird, Sprout } from 'lucide-react';
import aboutOne from '../../../assets/aboutOne.jpg';
import aboutTwo from '../../../assets/aboutTwo.jpg';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 px-4 md:px-16 bg-gradient-to-r from-green-50 to-white">
      
      {/* Left Section with Images */}
      <div className="relative md:w-1/2 flex mb-8 md:mb-0 md:ml-12">
        {/* Background Image (aboutTwo) */}
        <img
          src={aboutTwo} 
          alt="Gardener 1"
          className="h-[350px] md:h-[550px] w-full md:w-[50%] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
        />
        {/* Overlapping Foreground Image (aboutOne) */}
        <img
          src={aboutOne} 
          alt="Gardener 2"
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 md:left-96 md:-translate-x-1/2 h-[400px] md:h-[600px] w-full md:w-[50%] object-cover rounded-lg shadow-xl z-10"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 text-center md:text-left px-6 md:px-0">
        <h3 className="text-green-600 text-sm font-semibold uppercase tracking-wide">Adtech Agro</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-tight hover:text-green-600 transition-colors duration-300">
          We're Leaders in Organic Poultry Feed
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Adtech Agro Limited is an innovative agribusiness specializing in processing dry cocoa pod husks into premium quality organic poultry feed.
          Established in February 2023, the company combines sustainability with cutting-edge agricultural technology to provide eco-friendly feed solutions that enhance poultry nutrition while promoting waste reduction in the cocoa industry.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-12 mt-8 justify-center md:justify-start">
          {/* Feature 1 */}
          <div className="text-center md:text-left p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-lg shadow-lg flex flex-col items-center mb-8 md:mb-0">
            <Sprout className="w-12 h-12 text-green-600 mb-4 transform transition-all duration-300 hover:rotate-12" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Cocoa Pod Husk</h4>
            <p className="text-gray-600 text-sm">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center md:text-left p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-lg shadow-lg flex flex-col items-center">
            <Bird className="w-12 h-12 text-green-600 mb-4 transform transition-all duration-300 hover:rotate-12" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Poultry Feed</h4>
            <p className="text-gray-600 text-sm">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
