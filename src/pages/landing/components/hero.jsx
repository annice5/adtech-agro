import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import layerFinisherMashOne from '../../../assets/layerFinisherMashOne.jpeg';
import layerFinisherMashTwo from '../../../assets/layerFinisherMashTwo.jpeg';
import layerGrowerMash from '../../../assets/layerGrowerMash.jpeg';
import layerStarterMash from '../../../assets/layerStarterMash.jpeg';
import broilerFinisher from '../../../assets/broilerFinisher.jpeg';

const Hero = () => {
  const images = [
    layerFinisherMashOne,
    layerFinisherMashTwo,
    layerGrowerMash,
    layerStarterMash,
    broilerFinisher,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const overlayAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Green Gradient Overlay */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={overlayAnimation}
                className="absolute inset-0 bg-gradient-to-b from-green-100/10 via-gray-400/10 to-transparent"
              ></motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Overlay with Content */}
      <motion.div
        className="absolute bottom-16 left-10 w-full md:w-auto px-4"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        <div className="max-w-lg bg-black/50 backdrop-blur-sm rounded-lg p-6 text-white shadow-lg space-y-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Welcome to Adtech Agro Limited
          </motion.h1>
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-base md:text-lg font-medium"
          >
            Processing dry cocoa pod husks into premium quality organic poultry feed
          </motion.p>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
