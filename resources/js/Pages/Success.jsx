import React from 'react';

const Success = () => {
  return (
    <>
    <a href='/dashboard' className="">
    <button
      type="button"
      className="text-gray-700 hover:text-gray-900 focus:outline-none"
      onClick={() => setShowModal(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

</a>
    <div className="min-h-screen flex items-center justify-center">
        
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Success!</h1>
        <p className="text-gray-700">Your submission was successful.</p>
      </div>
    </div>
    </>
  );
};

export default Success;
