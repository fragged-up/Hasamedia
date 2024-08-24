import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Templates: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Templates</h1>
        <p>This is the Templates page.</p>
      </div>
      <Footer />
    </>
  );
};

export default Templates;
