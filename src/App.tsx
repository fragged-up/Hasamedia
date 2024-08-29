import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./redux/slices/authSlice"; // ייבוא ה-Action
import Templates from "./pages/Templates";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import axios from "axios";
import LoginFailed from "./pages/LoginFailed";
import AccountPage from "./pages/Account";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const dispatch = useDispatch(); // יצירת Dispatch

  const getUser = async () => {
    try {
      const backendUrl = "http://localhost:5001/auth/login/success";
      const { data } = await axios.get(backendUrl, { withCredentials: true });

      if (data?.user) {
        let fullName = data.user.name || data.user.login || "User";
        const firstNameExtracted = fullName.split(" ")[0];

        const userWithFirstName = {
          ...data.user,
          firstName: firstNameExtracted,
        };

        dispatch(
          setCredentials({
            user: userWithFirstName,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );

        setUser(userWithFirstName);
      } else {
        throw new Error("User data is missing");
      }
    } catch (err: any) {
      console.error("Error on app.tsx:", err.message || err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/LoginFailed"
            element={failed ? <LoginFailed /> : <Navigate to="/" />}
          />
          {/* Other routes */}
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
