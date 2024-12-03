import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroOne from '../../../assets/heroOne.jpg';
import heroTwo from '../../../assets/heroTwo.jpg';

const Hero = () => {
  const images = [heroOne, heroTwo];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
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
              <div className="absolute inset-0 bg-gradient-to-b from-green-600/50 via-green-300/40 to-transparent"></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Overlay with Content */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center px-4">
        <div className="max-w-3xl px-8 text-white text-center md:text-left space-y-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-shadow-md">
            Welcome to Adtech Agro Limited
          </h1>
          {/* Subtext */}
          <p className="text-lg md:text-2xl font-medium text-shadow-sm">
            Processing dry cocoa pod husks into premium quality organic poultry feed
          </p>
          {/* CTA Button */}
          <div>
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold transform transition duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
