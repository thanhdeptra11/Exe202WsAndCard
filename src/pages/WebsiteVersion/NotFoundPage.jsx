import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2">Sorry, the page you're looking for doesn't exist.</p>
      
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
