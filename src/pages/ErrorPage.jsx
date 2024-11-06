// ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Oops! You're in wrong Path .</p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 text-white font-semibold bg-purple-600 rounded-lg hover:bg-purple-700 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
