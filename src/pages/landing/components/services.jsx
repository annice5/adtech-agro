import { BaggageClaim, GitCompareArrows, ShoppingBasket, Truck, WindArrowDown } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Sourcing and Collection",
      description: "Cocoa pod husks are collected from local farms or processing facilities after cocoa beans are removed. They are then transported to a processing facility for further use.",
      icon: (
        <GitCompareArrows className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 2,
      title: "Cleaning and Drying",
      description: "The husks are cleaned to remove dirt and then dried to reduce moisture, ensuring they stay fresh and don’t spoil.",
      icon: (
        <WindArrowDown className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 3,
      title: "Grinding and Blending",
      description: "The dried husks are ground into fine particles and then blended with ingredients like proteins, vitamins, and minerals to make a balanced poultry feed.",
      icon: (
        <ShoppingBasket className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
    {
      id: 4,
      title: "Pelletizing or Granulation",
      description: "The blended feed is shaped into pellets or granules, making it stronger, reducing waste, and easier to handle and store.",
      icon: (
        <BaggageClaim  className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-110"/>
      ),
    },
    {
      id: 4,
      title: "Packaging and Distribution",
      description: "The feed is packed in strong bags to stay fresh and is then distributed  for use.",
      icon: (
        <Truck className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-110" />
      ),
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-r from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-green-600 uppercase text-sm font-semibold tracking-wide">
            Our Services
          </h4>
          <h2 className="text-3xl font-extrabold text-green-900 mt-2">
            Explore Our Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-xl transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2 transform transition-all duration-300 hover:text-green-600">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
