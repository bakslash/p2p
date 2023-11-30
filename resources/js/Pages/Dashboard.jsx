// Dashboard.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState ,useEffect } from 'react';
import AddFormModal from '../Components/FormModal';
import axios from 'axios';
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";

export default function Dashboard({ auth }) {
    const [criteria, setCriteria] = useState('');
    const [code, setCode] = useState('');
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const [reqs, setReqs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const URL = 'http://localhost:8000'
    // Function to fetch reqs data from the server
    const fetchReqs = async () => {
        try {
            const response = await axios.get(`/reqs`);
            console.log('res',response);
            setReqs(response.data.reqs);
        } catch (error) {
            console.error('Error fetching reqs:', error);
        }
    };

    // useEffect to fetch reqs data when the component mounts
    useEffect(() => {
        fetchReqs();
    }, []);


    const validateForm = () => {
        // Add your form validation logic here
        console.log('Form validated!');
    };

    const handleFindButtonClick = () => {
        validateForm(); // You can add additional logic here if needed
    };

    const handleAddButtonClick = () => {
        setIsAddFormOpen(true);
    };

    const handleFormSubmit = (formData) => {
        // Handle the form submission logic here
        console.log('Form submitted with data:', formData);
        // Add your logic to send the form data to the server or perform any necessary actions
        setIsAddFormOpen(false); // Close the modal after submission
    };

// Add this utility function
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
};


    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />

                <div className="py-12">
                {showModal?
      <div className='modal-full-height border border-gray-500 h-auto '>
      <TEModal show={showModal} setShow={setShowModal} >
        <TEModalDialog size="fullscreen">
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h4>PR Details</h4>
              {/* <!--Close button--> */}
              <button
                type="button"
                className=""
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                Close
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
            
    <form className='w-4/5 '>
    <div className="flex flex-wrap w-full mb-3">
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sub-company">
            Sub Company
        </label>
        <select className="form-select" id="sub-company" name="sub-company" required>
            <option value="" disabled selected>Select sub company</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="department">
            Department
        </label>
        <select className="form-select" id="department" name="department" required>
            <option value="" disabled selected>Select a department</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="purpose-of-purchase">
            Purpose of Purchase
        </label>
        <input
            type="text"
            className="form-control"
            id="purpose-of-purchase"
            name="purpose-of-purchase"
            placeholder="Purpose of Purchase"
            required
        />
    </div>
</div>

<div className="flex flex-wrap w-full mb-3">
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="vat">
            Urgency
        </label>
        <select className="form-select" id="vat" name="vat" required>
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
        <select className="form-select" id="point-of-delivery" name="point-of-delivery" required>
            <option value="" disabled selected>Select PoD</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
        </select>
    </div>
    <div className="w-full md:w-1/3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         htmlFor="exact-location">
            Exact Location
        </label>
        <input
            type="text"
            className="form-control"
            id="exact-location"
            name="exact-location"
            placeholder="Exact Location"
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
            className="form-control"
            id="File-number"
            name="File-number"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vessel">
            Vessel
        </label>
        <input
            type="text"
            className="form-control"
            id="vessel"
            name="vessel"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="voyage">
            Voyage
        </label>
        <input
            type="text"
            className="form-control"
            id="voyage"
            name="voyage"
            placeholder=""
            required
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
            className="form-control"
            id="dac0number"
            name="dac0number"
            placeholder=""
            required
        />
    </div>
    <div className="mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="currency">
            Currency
        </label>
        <select
            className="form-select"
            id="currency"
            name="currency"
            required
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
            className="form-select"
            id="vat"
            name="vat"
            required
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
            className="form-select"
            id="purchase0catergory"
            name="purchase0catergory"
            required
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
            className="form-select"
            id="vat"
            name="vat"
            required
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
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div className="mb-3">
                <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
            <div className="mb-3">
                <label className="col-form-label" htmlFor="document-upload">Upload Documents</label>
                <input type="file" className="form-control" id="document-upload" name="document-upload" required />
            </div>
        </div>
       
        <div className="flex justify-end mt-3">
            <div className="mb-3">
                <button type="button" 
                className="text-gray-500 bg-green-400 border 
          border-gray-400 focus:outline-none hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200 py-1 px-4"
                 onClick={() => validateForm()}>Proceed to req Items</button>
            </div>
        </div>
    </form>



                </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save changes
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
      </div>:""}
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="card p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <div className="flex items-center space-x-2">
                                        <label className="text-sm font-small text-gray-500">Criteria</label>
                                        <select
                                            className="form-select form-select-sm"
                                            id="supplier-category"
                                            value={criteria}
                                            onChange={(e) => setCriteria(e.target.value)}
                                        >
                                            <option value="category1">1</option>
                                            <option value="category2">Category 2</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <label className="text-sm font-medium text-gray-500"></label>
                                        <input
                                            type="text"
                                            className="form-input form-input-sm"
                                            id="supplier-code"
                                            placeholder=""
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="text-gray-900 bg-white border 
                                              border-gray-400 focus:outline-none hover:bg-gray-100
                                              focus:ring-4 focus:ring-gray-200 py-1 px-4"
                                            onClick={handleFindButtonClick}
                                        >
                                            Find
                                        </button>
                                    </div>
                                    <style>
                                      {`
                                       .modal-full-height {
                                    height: 100vh;
                                    overflow-y: auto;
                                          }
                                              `}
                                             </style>

    <div className="">
    <TERipple rippleColor="white">
        <button
          type="button"
          className="text-gray-500 bg-green-400 border 
          border-gray-400 focus:outline-none hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200 py-1 px-4"
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
      </TERipple>
     

      </div>
     
                                    
                                      
                                    
                                </div>

                                <div className="table-responsive text-nowrap mt-4">
  <table className="table  table-bordered text-center w-full">
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Request Purpose</th>
        <th scope="col">Staff</th>
        <th scope="col">Department</th>
        <th scope="col">Req Date</th>
        <th scope="col">Completed</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {reqs.map((req) => (
        <tr key={req.id}>
          <th scope="row">{req.id}</th>
          <td>{req.purpose_of_purchase}</td>
          <td>{req.staff_name}</td>
          <td>{req.department}</td>
          <td>{formatDate(req.created_at)}</td>
          <td>{req.completed ? 'True' : 'False'}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleSelect(req)}
            >
              Select
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
