import Navbar from "@/design-system/organisms/navbar/Navbar";
import Product from "@/design-system/organisms/product/Product";
import Slider from "@/design-system/organisms/slider/Slider";
import "./home.sass";

const Home: React.FC = () => (
  <div data-testid="home" className="home">
    <Navbar />
    <div className="wrapper">
      <Slider />
      <Product />
    </div>
  </div>
);
export default Home;
