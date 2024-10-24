import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import StepFlowWrapper from "./components/Forms/StepFlow";
import VerifyEmail from "@/components/Forms/Email/VerifyEmail";

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const hasVerifyParam = searchParams.has("verify");
  const tokenParam = searchParams.get("token");
  console.log(`hasVerifyParam : ${hasVerifyParam},
    tokenParam : ${tokenParam}`);

  return (
    <div className="w-full bg-black">
      {hasVerifyParam && tokenParam ? (
        <VerifyEmail token={tokenParam} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lead" element={<StepFlowWrapper />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
