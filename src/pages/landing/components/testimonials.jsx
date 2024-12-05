import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      position: "Marketing Manager",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
      name: "John Doe",
      position: "Software Engineer",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      text: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
      name: "Jane Smith",
      position: "Project Manager",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100",
      text: "I never dreamed of success. I worked for it.",
      name: "Alice Brown",
      position: "Graphic Designer",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/100",
      text: "Do not wait to strike till the iron is hot but make it hot by striking.",
      name: "Michael Lee",
      position: "CEO",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/100",
      text: "Success usually comes to those who are too busy to be looking for it.",
      name: "Emily White",
      position: "HR Manager",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h4 className="text-green-700 uppercase text-sm tracking-wide font-semibold mb-2">
          Testimonials
        </h4>
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex items-center text-left gap-6 p-6 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-green-600 shadow-md transform transition-all duration-300 hover:scale-110">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-green-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {[...Array(Math.ceil(testimonials.length / testimonialsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
