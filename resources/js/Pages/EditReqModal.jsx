// FormModal.jsx
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route ,NavLink,  useNavigate } from 'react-router-dom';

import ReqDetails from '../Pages/ReqDetails';

import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
  TERipple,
} from "tw-elements-react";
import axios from 'axios';// ... (previous imports)


const EditReqModal = ({ showEditModal, setShowEditModal ,req}) => {
    console.log('edit',req);
 const navigate =useNavigate
  const [formData, setFormData] = useState({
    subcompany: '',
    department_id: 1,
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
    office: ''
    // Add other form fields here
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  
  };

  const handleSubmit = async () => {
   
    try {
      const response = await axios.post(`http://localhost:8000/req${id}`, formData);
      console.log('Form submitted successfully:', response.data);
      setShowModal(false);
      navigate('/req')
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleProceedClick = () => {
   setShowModal(false);
    // Reload the page
   // window.location.reload();
    // Close the modal
    navigate('/req')
    
  }

  return (
    <div className={showEditModal ? 'flex items-center justify-center modal-full-height border border-gray-500 h-auto' : ''}>
      <TEModal show={showEditModal} setShow={setShowEditModal}>
        <TEModalDialog size="fullscreen">
          <TEModalContent>
            <TEModalHeader>
             
              <div className='flex flex-center'>
               
                <button
                  type="button"
                  className="text-gray-900 focus:outline-none hover:bg-gray-400
                  focus:ring-4 focus:ring-gray-500 py-1 px-2 "
                  onClick={() => setShowEditModal(false)}
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
                
              </div>
            </TEModalHeader>
            <TEModalBody className='flex items-center justify-center min-h-700px'>
              <div className='mb-4'>
              
              </div>
          
              <form className="w-4/5" onSubmit={handleSubmit}>

                <div className="flex flex-wrap w-auto mb-3 ">
                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subcompany">
                      Sub Company
                    </label>
                    <select
                      className="form-select rounded"
                      id="subcompany"
                      name="subcompany"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Select sub company</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>

                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="department">
                      Department
                    </label>
                    <select
                      className="form-select rounded"
                      id="department"
                      name="department_id"
                      required
                      onChange={handleChange}
                      value="1"  // Set the default value to 1
                    >
                      <option value="" disabled>Select a department</option>
                      <option value="category1">1</option>
                      <option value="category2">Category 2</option>
                    </select>

                  </div>
                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="purpose-of-purchase">
                      Purpose of Purchase
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="purpose-of-purchase"
                      name="purpose_of_purchase"
                      placeholder="Purpose of Purchase"
                      required
                      onChange={handleChange}

                    />
                  </div>
                </div>

                <div className="flex flex-wrap w-full mb-3">
                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="vat">
                      Urgency
                    </label>
                    <select 
                    className="form-select rounded"
                     id="urgency" 
                     name="urgency" 
                     required onChange={handleChange}  >
                      <option value="" disabled selected>Select Urgency</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="point-of-delivery">
                      Point of delivery(Office)
                    </label>
                    <select 
                    className="rounded form-select" 
                    id="point-of-delivery" 
                    name="point_of_delivery"
                    required onChange={handleChange}>
                      <option value="" disabled selected>Select PoD</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/3 mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="exact-location">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="exact-location"
                      name="location"
                      placeholder="Exact Location"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="File-number">
                      File Number
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="File-number"
                      name="file_number"
                      placeholder=""
                      required
                      onChange={handleChange}

                    />
                  </div>
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vessel">
                      Vessel
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="vessel"
                      name="vessel"
                      placeholder=""
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="voyage">
                      Voyage
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="voyage"
                      name="voyage"
                      placeholder=""
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dac0number">
                      DAC Number
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      id="dac0number"
                      name="dac_number"
                      placeholder=""
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="currency">
                      Currency
                    </label>
                    <select
                      className="form-select rounded"
                      id="currency"
                      name="currency"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Select Currency</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="office">
                      Office
                    </label>
                    <select
                      className="form-select rounded"
                      id="office"
                      name="office"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Select Office</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="purchase0catergory">
                      Purchase category
                    </label>
                    <select
                      className="form-select rounded"
                      id="purchase0catergory"
                      name="purchase_category"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Select a category</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vat">
                      VAT%
                    </label>
                    <select
                      className="form-select rounded"
                      id="vat"
                      name="vat"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>Select VAT</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
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

                <div className="flex justify-end mt-3">
                <div className="mb-3">
                <Router>
                {/* <NavLink to="/req"> */}
    <button
      type="button"
      className="text-gray-500 bg-green-400 border 
        border-gray-400 focus:outline-none hover:bg-gray-100
        focus:ring-4 focus:ring-gray-200 py-1 px-4"
        onClick={handleSubmit}
    >
      Proceed to req Items
    </button>
  {/* </NavLink> */}
                </Router>
</div>
</div>
              </form>

            </TEModalBody>
            <TEModalFooter>
              {/* ... (rest of your footer content) */}
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default EditReqModal;
