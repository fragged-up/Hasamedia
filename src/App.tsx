import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Templates from "./pages/Templates";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loading from "./components/Loading"; // Import the Loading component

export default function App() {
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // If loading, show the loading screen
  if (loading) {
    return <Loading />;
  }

  // Once loading is complete, render the app
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
