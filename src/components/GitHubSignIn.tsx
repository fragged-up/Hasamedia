import React from "react";

interface GitHubSignInProps {
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
}

const GitHubSignIn: React.FC<GitHubSignInProps> = ({
  onSuccess,
  onFailure,
}) => {
  const handleGitHubSignIn = () => {
    // Start GitHub OAuth flow
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${
      import.meta.env.VITE_GITHUB_CLIENT_ID
    }&redirect_uri=http://localhost:5001/auth/github/callback`;
  };

  // Example of handling the OAuth redirect response
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      fetch("http://localhost:5001/auth/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success && onSuccess) {
            onSuccess(data);
          } else if (onFailure) {
            onFailure(data);
          }
        })
        .catch((error) => {
          if (onFailure) onFailure(error);
        });
    }
  }, [onSuccess, onFailure]);

  return (
    <div className="w-full">
      <button
        onClick={handleGitHubSignIn}
        className="w-full flex items-center justify-center bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
      >
        <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.216.682-.481 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.069-.608.069-.608 1.002.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.911.832.092-.647.349-1.087.636-1.337-2.22-.252-4.555-1.111-4.555-4.943 0-1.091.389-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.025A9.562 9.562 0 0112 6.844c.85.004 1.705.115 2.505.337 1.91-1.296 2.75-1.025 2.75-1.025.545 1.376.202 2.393.1 2.646.641.699 1.03 1.591 1.03 2.683 0 3.841-2.337 4.687-4.564 4.933.36.31.682.919.682 1.854 0 1.338-.012 2.418-.012 2.745 0 .267.18.577.688.479C19.138 20.162 22 16.416 22 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default GitHubSignIn;
