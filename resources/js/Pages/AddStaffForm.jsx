import React, { useState } from 'react';

const AddStaffForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    staffNames: '',
    title: '',
    email: '',
    lineManager: 'manager1',
    office: 'office1',
    isActive: true,
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Assuming you want to navigate to another page on success
        window.location.href = '/success';
      } else {
        console.error('Failed to submit form:', response.statusText);
        // Handle error accordingly (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting form:', error.message || 'Unknown error');
      // Handle error accordingly (e.g., show an error message)
    }
  };
  

  return (
    <div className="mt-8 p-6 bg-white rounded shadow m-8">
                
                <a href='/dashboard' className="">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
           
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
      <h2 className="text-2xl font-semibold mb-4 p-4 ">Add Staff</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          {/* Field 1: Username */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field 2: Staff Names */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="staffNames" className="block text-sm font-medium text-gray-600">
              Staff Names:
            </label>
            <input
              type="text"
              id="staffNames"
              name="staffNames"
              value={formData.staffNames}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field 3: Title */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field 4: Email */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field 5: Line Manager */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="lineManager" className="block text-sm font-medium text-gray-600">
              Line Manager:
            </label>
            <select
              id="lineManager"
              name="lineManager"
              value={formData.lineManager}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="manager1">Manager 1</option>
              <option value="manager2">Manager 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Field 6: Office */}
          <div className='mb-4 w-4/5'>
            <label htmlFor="office" className="block text-sm font-medium text-gray-600">
              Office:
            </label>
            <select
              id="office"
              name="office"
              value={formData.office}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="office1">Office 1</option>
              <option value="office2">Office 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Field 7: Is Active */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-gray-600">
              Is Active
            </label>
          </div>

          {/* Field 8: Is Admin */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="isAdmin" className="text-sm font-medium text-gray-600">
              Is Admin
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-4"
        >
          Add Staff
        </button>
      </form>
    </div>
  );
};

export default AddStaffForm;
