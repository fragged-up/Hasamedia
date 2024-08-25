import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = ({ product }: { product: any }) => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>
          {"product : ? = "}
          {product}
        </h1>
        <p>This is the Product page.</p>
      </div>
      <Footer />
    </>
  );
};

export default Product;
