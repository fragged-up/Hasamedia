import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Templates from "./pages/Templates";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
