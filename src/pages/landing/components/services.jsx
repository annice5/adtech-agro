import { GitCompareArrows, ShoppingBasket, Truck, WindArrowDown } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Processing",
      description: "A small river named Duden flows by their place and supplies.",
      icon: (
        <GitCompareArrows className="w-9 h-9 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 2,
      title: "Preparing",
      description: "A small river named Duden flows by their place and supplies.",
      icon: (
        <WindArrowDown className="w-9 h-9 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 3,
      title: "Producing",
      description: "A small river named Duden flows by their place and supplies.",
      icon: (
        <ShoppingBasket className="w-9 h-9 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 4,
      title: "Delivering",
      description: "A small river named Duden flows by their place and supplies.",
      icon: (
        <Truck className="w-9 h-9 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-r from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 mt-10">
          <h4 className="text-green-600 uppercase text-sm font-semibold tracking-wide">
            Services
          </h4>
          <h2 className="text-3xl font-extrabold text-green-900">
            Explore Our Best Offer
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-50"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2 transform transition-all duration-300 hover:text-green-600">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>

              {/* Learn More Button */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
