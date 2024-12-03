import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Product />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Landing;
