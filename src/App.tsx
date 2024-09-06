import { BrowserRouter, Route, Routes } from "react-router-dom";
import Templates from "./pages/Templates";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import AccountPage from "./pages/Account";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FreeWebsiteReview from "./pages/FreeWebsiteReview";

export default function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/free-website-review" element={<FreeWebsiteReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
