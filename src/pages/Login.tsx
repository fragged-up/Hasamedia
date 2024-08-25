import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import GoogleSignIn from "../components/GoogleSignIn";
import GitHubSignIn from "../components/GitHubSignIn";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5001/auth/google";
  };

  const handleGitHubSignIn = () => {
    window.location.href = "http://localhost:5001/auth/github";
  };
  const handleGoogleFailure = () => {
    window.location.href = "http://localhost:5173/LoginFailed";
  };

  const handleGitHubFailure = () => {
    window.location.href = "http://localhost:5173/LoginFailed";
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const user = urlParams.get("user");

    if (accessToken && user) {
      dispatch(
        setCredentials({
          user: JSON.parse(user),
          accessToken: accessToken,
          refreshToken: null, // Set refreshToken to null if it's not provided
        })
      );

      // Clean up URL params
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [dispatch]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-800 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl text-white w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <GoogleSignIn
            onSuccess={handleGoogleSignIn}
            onFailure={handleGoogleFailure}
          />
          <GitHubSignIn
            onSuccess={handleGitHubSignIn}
            onFailure={handleGitHubFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
