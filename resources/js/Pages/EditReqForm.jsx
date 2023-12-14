import React, { useState } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios';

import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


const EditReqForm = () => {

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
  var id 

  const parsePageId = (path) => path.substring(path.lastIndexOf('/') + 1)
  id = parsePageId(window.location.pathname)

const [editReq,setEditReq] =useState({})

 const handleChange = (e) => {
  setEditReq((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value,
  }));
 
};
 
  
console.log(editReq);


useEffect(() => {
  fetchReqs();
}, [id]);

const fetchReqs = async () => {
  try {
    const response = await axios.get(`/req/${id}`);
    setEditReq(response.data.req);
  } catch (error) {
    console.error('Error fetching reqs:', error);
  }
};

const handleSubmit = async (e) => {
  //e.preventDefault();

  try {
    const response = await axios.patch(`http://localhost:8000/req/${id}/edit`, editReq);
    console.log('data', editReq, response);

    if (response) {
      window.location.href = `/req_details`;
      console.log('success' ,id);
    } else {
      console.log('Req failed:', response.data.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error submitting form:', error.message || 'Unknown error');
  }
};


  return (
    <>
            {/* <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                }
            >
                <Head title="Dashboard" /> */}
    <div className='fixed inset-0 flex items-center justify-center overflow-y-auto' >
      <div className="bg-white w-4/5 md:w-4/5 lg:w-4/5 p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">PR Details</h2>
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

        </div>
        <form >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Field 1: Sub Company */}
            <div className="mb-4 w-4/5">
              <label className="block text-sm font-bold text-gray-700">Sub Company</label>
              <select
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="subcompany"
                name="subcompany"
                required
                value={editReq.subcompany}
                onChange={handleChange}
              >
                <option value="" disabled >Select sub company</option>
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
                value={editReq.department}

              >
                <option value="" disabled>Select a department</option>
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
                value={editReq.purpose_of_purchase}
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
                value={editReq.urgency}
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
                value={editReq.point_of_delivery}

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
                value={editReq.location}
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
                value={editReq.file_number}
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
                value={editReq.vessel}
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
                value={editReq.voyage}
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
                value={editReq.dac_number}
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
                value={editReq.currency}

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
                value={editReq.office}
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
                value={editReq.purchase_category}

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
                value={editReq.vat}

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
             type="submit"
              className="text-gray-500 bg-green-400 border border-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 py-1 px-4"
              onClick={handleSubmit}
            >
            Proceed to Req Items
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* </AuthenticatedLayout> */}
    </>
  );
};

export default EditReqForm;
