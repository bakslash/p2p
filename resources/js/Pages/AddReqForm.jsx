import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddReqForm = () => {

  const [formData, setFormData] = useState({
    subcompany: '',
    department: '',
    purpose_of_purchase: 'it',
    location: '',
    vat: '',
    currency: '',
    file_number: '',
    vessel: '',
    voyage: '',
    purchase_category: '',
    dac_number: '',
    urgency: '',
    point_of_delivery: '',
    office: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
   
  
      const response = await axios.post('http://localhost:8000/reqs', formData);
  console.log(formData);
      if (response) {

        // Assuming you want to navigate to '/req_details' on success
        window.location.href = '/req_details';
      } else {
        console.log('check Req :', response.data);
      }
  
    } catch (error) {
      console.error('Error submitting form:', error.message || 'Unknown error');
    }
  };
  

  return (
    <div className='fixed inset-0 flex items-center justify-center overflow-y-auto' >
      <div className="bg-white w-4/5 md:w-4/5 lg:w-4/5 p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">PR Details</h2>
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
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Field 1: Sub Company */}
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Sub Company</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="subcompany"
                name="subcompany"
                required
                onChange={handleChange}
              >
                <option value="" disabled selected>Select sub company</option>
                <option value="btl"> BTL</option>
                <option value="ilst"> ILST</option>
              </select>
            </div>

            {/* Field 2: Department */}
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Department</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="department"
                name="department"
                required
                onChange={handleChange}
            
              >
                <option value="" disabled selected> Select a department</option>
                <option value="finance">finance</option>
                <option value="workshop">workshop </option>
              </select>
            </div>
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Purpose of purchase</label>
              <input
                type="text"
                className="form-control mt-1 block 
                      w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="purpose_of_purchase"
                name="purpose_of_purchase"
                placeholder="Purpose of Purchase"
                required
                onChange={handleChange}

              />
            </div>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Urgency</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="urgency"
                name="urgency"
                required
                onChange={handleChange}
              >
                <option value="" disabled selected>Select urgency</option>
                <option value="urgenct"> Urgent</option>
                <option value="routine">Routine </option>
                <option value="emergency">Emergency </option>
              </select>
            </div>


            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Point of delivery</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="point_of_delivery"
                name="point_of_delivery"
                required
                onChange={handleChange}

              >
                <option value="" disabled selected>point of delivery</option>
                <option value="JKIA">JKIA</option>
                <option value="HQ"> HQ</option>
                <option value="ICD"> ICD</option>
              </select>
            </div>
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">location</label>
              <input
                type="text"
                className="form-control mt-1 block 
                      w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="location"
                name="location"
                placeholder="location"
                required
                onChange={handleChange}

              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">File Number</label>
              <input
                type="text"
                className="form-control mt-1 block 
                w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="file_number"
                name="file_number"
                placeholder="file number"
                required
                onChange={handleChange}

              />
            </div>


            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Vessel</label>
              <input
                type="text"
                className="form-control mt-1 block 
                      w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="vessel"
                name="vessel"
                placeholder="vessel"
                required
                onChange={handleChange}

              />
            </div>
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">voyage</label>
              <input
                type="text"
                className="form-control mt-1 block 
                      w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="voyage"
                name="voyage"
                placeholder="voyage"
                required
                onChange={handleChange}

              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">DAC Number</label>
              <input
                type="text"
                className="form-control mt-1 block 
                w-full rounded-md border-gray-300 
                      shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="dac_number"
                name="dac_number"
                placeholder="dac number"
                required
                onChange={handleChange}

              />
            </div>


            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Currency</label>
              <select
                className="form-select mt-1 block w-full rounded-md 
                border-gray-300 shadow-sm focus:border-indigo-300 
                focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="currency"
                name="currency"
                required
                onChange={handleChange}

              >
                <option value="" disabled selected>select currency</option>
                <option value="Ush">Ush</option>
                <option value="Ksh">Ksh</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Office</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="office"
                name="office"
                required
                onChange={handleChange}

              >
                <option value="" disabled selected>select office</option>
                <option value="nairobi">Nairobi</option>
                <option value="Mombasa"> Mombasa</option>
                <option value="Kisumu"> Kisumu</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">



            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Purchase category</label>
              <select
                className="form-select mt-1 block w-full rounded-md 
               border-gray-300 shadow-sm focus:border-indigo-300 
               focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="purchase_category"
                name="purchase_category"
                required
                onChange={handleChange}

              >
                <option value="" disabled selected>select category</option>
                <option value="IT">IT</option>
                <option value="HR"> HR</option>
                <option value="GENERAL"> GENERAL</option>
              </select>
            </div>
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">VAT</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="vat"
                name="vat"
                required
                onChange={handleChange}

              >
                <option value="" disabled selected>select vat</option>
                <option value="16%">16%</option>
                <option value="8%">8%</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            <div className="mb-3">
              <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
              <input
                type="file"
                className="form-control rounded"
                id="document-upload"
                name="document-upload"
                required
                onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
              <input type="file" className="form-control rounded" id="document-upload" name="document-upload" required
                onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
              <input type="file" className="form-control rounded" id="document-upload" name="document-upload" required
                onChange={handleChange} />
            </div>
          </div>

          <div className="flex justify-end mt-6">
         
            <button
              type="button"
              className="text-gray-500 bg-green-400 border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 py-1 px-4"
              onClick={handleSubmit}
            >
              Proceed to req Items
            </button>
       
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReqForm;
