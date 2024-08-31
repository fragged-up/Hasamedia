import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="181362870756-co5r5nnlf9cne12bqhgigtb72urq35b9.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);
