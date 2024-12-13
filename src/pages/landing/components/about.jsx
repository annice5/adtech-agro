import { useState } from 'react';
import { motion } from 'framer-motion';
import driedPods from '../../../assets/driedPods.jpeg';
import layerFinisherMashTwo from '../../../assets/layerFinisherMashTwo.jpeg';
import { Link } from 'react-scroll';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.3, // delay for child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <>
      <motion.section
        id="about"
        className="flex flex-col md:flex-row items-center py-16 px-6 md:px-20 bg-gradient-to-r from-green-50 via-green-100 to-white shadow-lg rounded-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section with Images */}
        <motion.div
          className="md:w-1/2 flex flex-row gap-6 items-center justify-center"
          variants={childVariants}
        >
          {/* First Image */}
          <motion.img
            src={driedPods}
            alt="Cocoa Pod Husk"
            className="h-[220px] md:h-[350px] w-[45%] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          />
          {/* Second Image */}
          <motion.img
            src={layerFinisherMashTwo}
            alt="Poultry Feed"
            className="h-[220px] md:h-[350px] w-[45%] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left px-4"
          variants={childVariants}
        >
          <motion.h3
            className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-2 mt-14"
            whileHover={{ scale: 1.1, color: '#047857' }}
          >
            Adtech Agro
          </motion.h3>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-tight hover:text-green-600 transition-colors duration-300"
            whileHover={{ scale: 1.05, color: '#047857' }}
          >
            We're Leaders in Organic Poultry Feed
          </motion.h1>
          <motion.p
            className="text-gray-700 mt-4 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Adtech Agro Limited is an innovative agribusiness specializing in processing dry cocoa pod husks into premium quality organic poultry feed.
            Established in February 2023, the company combines sustainability with cutting-edge agricultural technology to provide eco-friendly feed solutions that enhance poultry nutrition while promoting waste reduction in the cocoa industry.
          </motion.p>
          <motion.div className="flex justify-center md:justify-start gap-6" variants={childVariants}>
            <Link to="services">
              <motion.button
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.button>
            </Link>
            <motion.button
              className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-lg hover:bg-white hover:text-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsModalOpen(true)} // Open the modal
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-green-600">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              We'd love to hear from you! Please reach out to us via email at{' '}
              <a href="mailto:info@adtechagro.com" className="text-green-600 underline">
                adtechagroltd@gmail.com
              </a>{' '}
              or call us at <span className="font-semibold">+233 541537190</span>.
            </p>
            <button
              className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
              onClick={() => setIsModalOpen(false)} // Close the modal
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;
