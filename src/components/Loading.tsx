import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
        <h2 className="text-white text-2xl font-semibold animate-pulse">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
