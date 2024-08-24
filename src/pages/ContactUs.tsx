import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>ContactUs</h1>
        <p>This is the ContactUs page.</p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
