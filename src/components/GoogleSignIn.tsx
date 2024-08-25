import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

interface GoogleSignInProps {
  onSuccess: (credentialResponse: any) => void;
  onFailure: (err: any) => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  onSuccess,
  onFailure,
}) => {
  const login = useGoogleLogin({
    onSuccess,
    onError: onFailure,
  });

  return (
    <div className="w-full">
      <button
        onClick={() => login()}
        className="w-full flex items-center justify-center bg-[#606060] text-white font-semibold py-3 rounded-lg hover:bg-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
      >
        <svg
          className="w-6 h-6 mr-2"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.42 0 6.27 1.18 8.16 3.1l6.06-6.06C34.9 3.25 29.83 1 24 1 14.56 1 6.6 6.95 3.5 15.07l7.54 5.85C12.66 14.64 17.89 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.47 24.34c0-1.45-.12-2.83-.33-4.19H24v8.27h12.7c-.6 3.06-2.3 5.66-4.88 7.38l7.54 5.85c4.42-4.08 7.11-10.1 7.11-17.31z"
          />
          <path
            fill="#FBBC05"
            d="M10.5 28.9c-.65-1.94-1.02-4.02-1.02-6.16s.37-4.22 1.02-6.16L3.5 15.07C1.9 18.47 1 22.15 1 26s.9 7.53 2.5 10.93l7.54-5.85z"
          />
          <path
            fill="#EA4335"
            d="M24 47c5.83 0 10.7-1.94 14.26-5.28l-7.54-5.85c-2.1 1.41-4.78 2.25-7.72 2.25-6.11 0-11.34-5.14-12.5-11.91l-7.54 5.85C6.6 41.05 14.56 47 24 47z"
          />
          <path fill="none" d="M1 1h46v46H1z" />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
