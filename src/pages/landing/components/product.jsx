import broilerFinisher from '../../../assets/broilerFinisher.jpeg';
import layerFinisherMashOne from '../../../assets/layerFinisherMashOne.jpeg';
import layerFinisherMashTwo from '../../../assets/layerFinisherMashTwo.jpeg';
import layerGrowerMash from '../../../assets/layerGrowerMash.jpeg';
import layerStarterMash from '../../../assets/layerStarterMash.jpeg';

const Product = () => {
  const productData = [
    {
      id: 1,
      image: broilerFinisher,
      description: "Broiler Finisher",
      price: "GH100",
    },
    {
      id: 2,
      image: layerFinisherMashOne,
      description: "Layer Finisher Mash One",
      price: "GH100",
    },
    {
      id: 3,
      image: layerFinisherMashTwo,
      description: "Layer Finisher Mash Two",
      price: "GH100",
    },
    {
      id: 4,
      image: layerGrowerMash,
      description: "Layer Grower Mash",
      price: 'GH100',
    },
    {
      id: 5,
      image: layerStarterMash,
      description: "Layer Starter Mash",
      price: 'GH100',
    },
  ];

  return (
    <section id="product" className="py-16 bg-gradient-to-r from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h4 className="text-green-700 uppercase text-sm tracking-wide font-semibold text-center mb-2">
          Products
        </h4>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Explore Our Premium Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="relative bg-white overflow-hidden rounded-lg shadow-md transform transition-all duration-500 group hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
              />

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.description}</h3>
                

                
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-700 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl font-bold mb-2">{product.description}</h3>
                <p className="text-white text-lg font-medium mb-4">{product.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
