import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Product</h1>
        <p>This is the Product page.</p>
      </div>
      <Footer />
    </>
  );
};

export default Product;
