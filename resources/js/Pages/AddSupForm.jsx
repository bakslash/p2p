import React, { useState } from 'react';
import axios from 'axios';

const AddSupForm = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        email: '',
        contact_person: '',
        phone_number: '',
        supplier_pin: '',
        postal_address: '',
        physical_location: '',
        nature_of_supplies: '',
        supplier_active: false,
        due_diligence_certificate: '',
        certificate_of_commitment: '',
        certificate_of_incorporation: '',
        bank_letter: '',
        turn_over_status: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.checked,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/suppliers', formData);

            if (response) {
                // Assuming you want to navigate to '/success' on success
                window.location.href = '/success';
            } else {
                console.log('Check Response:', response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error.message || 'Unknown error');
        }
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center overflow-y-auto'>
            <div className="bg-white w-4/5 md:w-4/5 lg:w-4/5 p-4 rounded-md shadow-md">

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

                <h2 className="text-xl font-semibold">Supplier Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Company Name</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="company_name"
                                name="company_name"
                                placeholder="Company Name"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Email</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Contact Person</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="contact_person"
                                name="contact_person"
                                placeholder="Contact Person"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="phone_number"
                                name="phone_number"
                                placeholder="Phone Number"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Supplier Pin</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="supplier_pin"
                                name="supplier_pin"
                                placeholder="Supplier Pin"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Postal Address</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="postal_address"
                                name="postal_address"
                                placeholder="Postal Address"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
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

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Nature of Supplies</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="nature_of_supplies"
                                name="nature_of_supplies"
                                placeholder="Nature of Supplies"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Supplier Active</label>
                            <input
                                type="checkbox"
                                className="form-checkbox mt-1 block"
                                id="supplier_active"
                                name="supplier_active"
                                checked={formData.supplier_active}
                                onChange={handleCheckboxChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Due Diligence Certificate</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="due_diligence_certificate"
                                name="due_diligence_certificate"
                                placeholder="Due Diligence Certificate"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Certificate of Commitment</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="certificate_of_commitment"
                                name="certificate_of_commitment"
                                placeholder="Certificate of Commitment"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Certificate of Incorporation</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="certificate_of_incorporation"
                                name="certificate_of_incorporation"
                                placeholder="Certificate of Incorporation"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Bank Letter</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="bank_letter"
                                name="bank_letter"
                                placeholder="Bank Letter"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700">Turn Over Status</label>
                            <input
                                type="text"
                                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="turn_over_status"
                                name="turn_over_status"
                                placeholder="Turn Over Status"
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
