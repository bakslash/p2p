import React, { useState ,useEffect } from 'react';
import axios from 'axios';

const AddDepartmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    parentCompany: '',
    depName: '',
    depCode: '',
    depHod: '',
    depHbu: '',
    isDepActive: true,
  });
  const companyOptions = [
    { id: 1, value: 'company1', label: 'Company 1' },
    { id: 2, value: 'company2', label: 'Company 2' },
    { id: 3, value: 'company3', label: 'Company 3' },
    // Add more objects as needed
  ];  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  useEffect(() => {
    // Fetch CSRF token and store it in the state
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        if (response.status === 200) {
          // CSRF token is now set in the cookie, and you can retrieve it
          const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
          setFormData(prevState => ({ ...prevState, _token: csrfToken }));
        } else {
          console.error('Failed to fetch CSRF token');
        }
      } catch (error) {
        console.error('Error fetching CSRF token:', error.message || 'Unknown error');
      }
    };

    fetchCsrfToken();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/dep', formData);
      console.log('Form data submitted:', formData);

      if (response.status === 200) {
        // Handle success, e.g., redirect or show a success message
      } else {
        console.error('Failed to submit form:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message || 'Unknown error');
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <a href='/dashboard' className="mb-4">
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
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-semibold mb-4 text-center">Department Information</h3>

        {/* Parent Company */}
        <div className="mb-4">
          <label htmlFor="parentCompany" className="block text-sm font-medium text-gray-600">
            Parent Company:
          </label>
          <select
  id="parentCompany"
  name="parentCompany"
  value={formData.parentCompany}
  onChange={handleChange}
  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
  required
>
  <option value="" disabled>Select Parent Company</option>
  {companyOptions.map((company) => (
    <option key={company.id} value={company.value}>
      {company.label}
    </option>
  ))}
</select>

        </div>

        {/* Department Name */}
        <div className="mb-4">
          <label htmlFor="depName" className="block text-sm font-medium text-gray-600">
            Department Name:
          </label>
          <input
            type="text"
            id="depName"
            name="depName"
            value={formData.depName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Department Code */}
        <div className="mb-4">
          <label htmlFor="depCode" className="block text-sm font-medium text-gray-600">
            Department Code:
          </label>
          <input
            type="text"
            id="depCode"
            name="depCode"
            value={formData.depCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Department HOD */}
        <div className="mb-4">
          <label htmlFor="depHod" className="block text-sm font-medium text-gray-600">
            Department HOD:
          </label>
          <input
            type="text"
            id="depHod"
            name="depHod"
            value={formData.depHod}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Department HBU */}
        <div className="mb-4">
          <label htmlFor="depHbu" className="block text-sm font-medium text-gray-600">
            Department HBU:
          </label>
          <input
            type="text"
            id="depHbu"
            name="depHbu"
            value={formData.depHbu}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Is Department Active */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isDepActive"
            name="isDepActive"
            checked={formData.isDepActive}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="isDepActive" className="text-sm font-medium text-gray-600">
            IsActive
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartmentForm;
