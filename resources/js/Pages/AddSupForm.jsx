import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddSupForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        physical_location: '',
        account_name: '',
        tel_number_1: '',
        tel_number_2: '',
        postal_address: '',
        capacity: '',
        compliance: '',
        documentation: '',
        recognition: '',
        supplier_code: '',
        supplier_pin: '',
        contact_person: '',
        designation: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/suppliers', formData);
            console.log(formData);

            if (response) {
                // Assuming you want to navigate to '/req_details' on success
                window.location.href = '/success';
            } else {
                console.log('check Req :', response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error.message || 'Unknown error');
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center overflow-y-auto'>
            <div className="bg-white w-4/5 md:w-4/5 lg:w-4/5 p-4 rounded-md shadow-md">
               
               
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
<h2 className="text-xl font-semibold">Supplier Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 ">
                        <div className="mb-4 w-4/5 ">
                            <label className="block text-sm font-bold text-gray-700">Category</label>
                            <select
                                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="category"
                                name="category"
                                required
                                onChange={handleChange}
                            >
                                <option value="" disabled selected>Select category</option>
                                <option value="all_sectors"> All sectors</option>
                                <option value="bodyworks"> Bodyworks</option>
                            </select>
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Physical Location</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="physical_location"
                                name="physical_location"
                                placeholder="Physical Location"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="account_name"
                                name="account_name"
                                placeholder="Company Name"
                                required
                                onChange={handleChange}
                            />
                        </div>


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Capacity</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="capacity"
                                name="capacity"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700"> Compliance </label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="compliance"
                                name="compliance"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Documentation </label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="documentation"
                                name="documentation"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Tel number 1</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="tel_number_1"
                                name="tel_number_1"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Tel Number 2</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="tel_number_2"
                                name="tel_number_2"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Postal Address</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="postal_address"
                                name="postal_address"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Recognition</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="recognition"
                                name="recognition"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Supplier code  </label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="supplier_code"
                                name="supplier_code"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700"> Supplier Pin</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="supplier_pin"
                                name="supplier_pin"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    
                        <div className="mb-4 w-4/5 ">
                            <label className="block text-sm font-bold text-gray-700">Contact person</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md 
                                border-gray-300 shadow-sm focus:border-indigo-300 
                                focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="contact_person"
                                name="contact_person"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                            <label className="block text-sm font-bold text-gray-700">Designation </label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="designation"
                                name="designation"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4 w-4/5">
                           
                            <label className="block text-sm font-bold text-gray-700">  Email</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="email"
                                name="email"
                                placeholder=""
                                required
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                       
                            <button
                                type="button"
                                className="text-gray-500 bg-green-400 border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 py-1 px-4"
                            onClick={handleSubmit}
                            >
                                Save Supplier
                            </button>
                      
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSupForm;
