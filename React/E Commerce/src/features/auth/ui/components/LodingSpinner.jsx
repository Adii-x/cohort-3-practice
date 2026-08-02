import React from "react";
import { LoaderCircle } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <LoaderCircle className="w-12 h-12 text-black animate-spin" />

      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
