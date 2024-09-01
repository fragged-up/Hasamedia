import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-white"></div>
        <h2 className="animate-pulse text-2xl font-semibold text-white">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
