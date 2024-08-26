import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LuxuryTextAnimation from "../components/UI/LuxuryTextAnimation";

const AccountPage = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  return (
    <>
      <Header />
      <div className="account-page h-screen">
        <h1 className="text-2xl font-bold">Account Details</h1>
        {userId ? <p>Your User ID: {userId}</p> : <p>You are not logged in.</p>}
        {/* Render more account details here */}
        <div className="fade-slide-up text-4xl text-white font-bold">
          Hello, World!
        </div>
        <div>
          <LuxuryTextAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
