import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import GoogleSignIn from "../components/GoogleSignIn";
import GitHubSignIn from "../components/GitHubSignIn";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [googleResponse, setGoogleResponse] = useState<any>(null);
  const [githubResponse, setGithubResponse] = useState<any>(null);

  useEffect(() => {
    const handleGoogleSuccess = async (credentialResponse: any) => {
      try {
        const token = credentialResponse.credential;
        const response = await fetch("http://localhost:5001/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: token }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          dispatch(
            setCredentials({
              user: data.user,
              accessToken: data.user.googleAccessToken,
              refreshToken: data.user.googleRefreshToken,
            })
          );
        } else {
          console.error("Google authentication failed:", data.message);
        }
      } catch (error) {
        console.error("Error during Google authentication:", error);
      }
    };

    if (googleResponse) {
      handleGoogleSuccess(googleResponse);
    }
  }, [googleResponse, dispatch]);

  useEffect(() => {
    const handleGitHubSuccess = async (data: any) => {
      try {
        dispatch(
          setCredentials({
            user: data.user,
            accessToken: data.user.githubAccessToken,
            refreshToken: null,
          })
        );
      } catch (error) {
        console.error("GitHub login failed:", error);
      }
    };

    if (githubResponse) {
      handleGitHubSuccess(githubResponse);
    }
  }, [githubResponse, dispatch]);

  const handleGoogleFailure = () => {
    console.error("Google login failed");
  };

  const handleGitHubFailure = (error: any) => {
    console.error("GitHub login failed:", error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-800 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl text-white w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <GoogleSignIn
            onSuccess={setGoogleResponse}
            onFailure={handleGoogleFailure}
          />
          <GitHubSignIn
            onSuccess={setGithubResponse}
            onFailure={handleGitHubFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
