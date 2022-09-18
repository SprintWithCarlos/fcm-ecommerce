import Navbar from "@/design-system/organisms/navbar/Navbar";
import Product from "@/design-system/organisms/product/Product";
import Slider from "@/design-system/organisms/slider/Slider";
import "./home.sass";

const Home: React.FC = () => {
  console.log("Component");

  return (
    <div data-testid="home" className="home">
      <Navbar />
      <div className="wrapper">
        <Slider
          content={[...Array(4)].map(
            (item, i) => `/image-product-${i + 1}.jpg`
          )}
        />
        <Product />
      </div>
    </div>
  );
};
export default Home;
