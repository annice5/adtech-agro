import React, { useState } from "react";
import { motion } from "framer-motion";
import testimonialOne from '../../../assets/testimonialOne.jpg';
import testimonialTwo from '../../../assets/testimonialTwo.jpg';
import testimonialThree from '../../../assets/testimonialThree.jpg';
import testimonialFour from '../../../assets/testimonialFour.jpg';
import testimonialFive from '../../../assets/testimonialFive.jpg';
import testimonialSix from '../../../assets/testimonialSix.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonialFour,
      text: "Adtech Agro’s organic poultry feed is a game-changer for my farm! My chickens are healthier, their eggs are larger, and the feed is so eco-friendly. I love supporting a business that’s helping the environment while boosting my productivity!",
      name: "Esi Oforiwaa",
      position: "Poultry Farmer",
    },
    {
      id: 2,
      image: testimonialOne,
      text: "I’ve tried several feeds over the years, but nothing compares to the results I’ve seen with Adtech Agro’s feed. My birds grow faster, their feathers are shinier, and they’re more active. Truly premium quality!",
      name: "Kwame Asante",
      position: "Small-Scale Poultry Farmer",
    },
    {
      id: 3,
      image: testimonialFive,
      text: "Switching to Adtech Agro’s feed was the best decision for my farm. Not only are my chickens thriving, but I’m also happy to know I’m reducing waste from cocoa farming. Sustainability and success in one bag!",
      name: "Ama Darko",
      position: "Poultry Farm Owner",
    },
    {
      id: 4,
      image: testimonialTwo,
      text: "Adtech Agro feed is fantastic! My poultry has never been healthier, and I’ve seen a significant increase in egg production. Plus, knowing it’s made from recycled cocoa husks makes me feel great about my purchase!",
      name: "Yaw Mensah",
      position: "Egg Producer",
    },
    {
      id: 5,
      image: testimonialSix,
      text: "I love how Adtech Agro combines quality with sustainability. My chickens love the feed, and I love the cost savings I’ve experienced. Their innovation is the future of farming!",
      name: "Akosua Agyeman",
      position: "Poultry Farmer",
    },
    {
      id: 6,
      image: testimonialThree,
      text: "The difference in my poultry's growth and health after using Adtech Agro’s feed is unbelievable. It’s like my farm has gone from good to great overnight. Highly recommended to all farmers!",
      name: "Kojo Boadu",
      position: "Poultry Business Owner",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h4
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-green-700 uppercase text-sm tracking-wide font-semibold mb-2"
        >
          Testimonials
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-12 text-gray-800"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {currentTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="relative flex items-center text-left gap-6 p-6 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-yellow-400 shadow-md">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Testimonial Text */}
              <div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-green-600 text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[...Array(Math.ceil(testimonials.length / testimonialsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-yellow-400 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
