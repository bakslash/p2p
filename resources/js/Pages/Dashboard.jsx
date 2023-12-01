// Dashboard.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

//import AddFormModal from '../Components/FormModal';
import AddFormModal from '../Components/FormModal';
import DataTable from '../Components/DataTable';
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
            console.log('res', response);
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
    const handleSelect = (req) => {
        // Add your logic for handling the selection here
        console.log('Selected request:', req);
    };

    const handleFormSubmit = (formData) => {
        // Handle the form submission logic here
        console.log('Form submitted with data:', formData);
        // Add your logic to send the form data to the server or perform any necessary actions
        setIsAddFormOpen(false); // Close the modal after submission
    };

    const formatDate = (dateString) => {
        const options = {
            weekday: 'long', // full day name (e.g., "Monday")
            month: 'long',   // full month name (e.g., "January")
            day: 'numeric'   // day of the month
        };
    }
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <>

                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                    </>

                }
            >

                <Head title="Dashboard" />


                <div className="py-12">
                    <h5 className='max-w-7xl mx-auto sm:px-6 lg:px-8 p-4'>Procurement Manager</h5>
                    {showModal ?
                        <div className='modal-full-height border border-gray-500 h-auto '>
                            <AddFormModal showModal={showModal} setShowModal={setShowModal} />
                        </div> : ""}
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="card p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col mb-3">
                <label className="text-sm font-small text-gray-500 mb-1">Criteria</label>
                <select
                    className="form-select form-select-sm rounded"
                    id="supplier-category"
                    value={criteria}
                    onChange={(e) => setCriteria(e.target.value)}
                >
                    <option value="category1">1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>
            <div className="flex flex-col mb-3">
                <label className="text-sm font-medium text-gray-500 mb-1">Code</label>
                <input
                    type="text"
                    className="form-input form-input-sm rounded"
                    id="supplier-code"
                    placeholder=""
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
            </div>
            <div className="flex items-center mt-3">
                <button
                    type="button"
                    className="text-gray-900 bg-white border 
                    border-gray-400 focus:outline-none hover:bg-gray-100
                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
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

            <div className="flex items-center mt-3">
                <TERipple rippleColor="white">
                    <button
                        type="button"
                        className="text-gray-500 bg-green-400 border 
                        border-gray-400 focus:outline-none hover:bg-gray-100
                        focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                        onClick={() => setShowModal(true)}
                    >
                        Add
                    </button>
                </TERipple>
            </div>
        </div>                         <DataTable reqs={reqs} handleSelect={handleSelect} formatDate={formatDate} auth={auth} />



                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
