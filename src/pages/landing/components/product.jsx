const Product = () => {
  const productData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=Project+1",
      description: "A lush botanical garden filled with tropical plants.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=Project+2",
      description: "A modern plant-filled workspace with cozy furniture.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=Project+3",
      description: "A serene outdoor space with vibrant flowers.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200?text=Project+4",
      description: "A cozy plant shop with handcrafted items.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200?text=Project+5",
      description: "A greenhouse showcasing eco-friendly farming.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x200?text=Project+6",
      description: "A gardener at work in a beautiful backyard.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h4 className="text-green-700 uppercase text-sm tracking-wide font-semibold text-center mb-2">
          Products
        </h4>
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Products</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 group hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Light Green Transparent Background */}
              <div className="absolute inset-0 bg-green-500 bg-opacity-50 transform scale-0 group-hover:scale-100 transition-all duration-500 rounded-lg"></div>

              {/* Hover Description */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                <p className="text-white text-lg font-medium text-center bg-opacity-75 bg-gray-800 rounded-lg p-4">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
