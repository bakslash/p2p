import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import ReqDetailForm from '../Components/ReqDetailForm';
import DataTable from '../Components/DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


// Dashboard.js
// ... (imports)

import ReqItemsTable from '../Components/ReqItemsTable'; // Add this import

export default function ReqItems({ auth }) {
    const [item, setReqItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [measure, setMeasure] = useState('');
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(true);



    const saveOrUpdatePR = async (isSubmitting) => {
        try {
            const endpoint = isSubmitting ? 'submit_pr' : 'save_pr';
            console.log(isSubmitting);

            // Set the status based on the operation
            const prStatus = isSubmitting ? true : false;

            const response = await axios.post(`http://localhost:8000/req_items/add`, {
                item,
                quantity,
                measure,
                status: prStatus,
                // Add other fields as needed
            });

            console.log(`PR ${isSubmitting ? 'submitted' : 'saved'} successfully`, response);

            // If you want to fetch the updated details after saving or submitting
            fetchReqDetails();
        } catch (error) {
            console.error(`Error ${isSubmitting ? 'submitting' : 'saving'} PR`, error);
            // Handle error or display an error message
        }
    };

    const handleSelect = (item, actionType) => {
        //setReq(req)
        console.log('req', item);


        // Perform different actions based on the actionType
        switch (actionType) {
            case 'View':
                setShowReqModal(true);
                break;
            case 'Edit':
               window.location.href = `/req_items/${item.id}`;
                    
                
                break;
            case 'delete':
                // Implement logic for deleting
                break;
            default:
                break;
        }
    }
   

    const formatDate = (dateString) => {
        const options = {
            weekday: 'long', // full day name (e.g., "Monday")
            month: 'long',   // full month name (e.g., "January")
            day: 'numeric'   // day of the month
        };
    };
   

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
           <ReqDetailForm />
              
                <div className="card px-12 ">
               
                    <div className=" ">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                            <div className="card p-4">
                               

                                {/* Use the DataTableComponent here */}
                                <ReqItemsTable items={items}  handleSelect={handleSelect} />

                                <div className="flex justify-around ">
                                    <button
                                        type="button"
                                        className="text-white bg-green-400
                    focus:outline-none hover:bg-gray-100
                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        onClick={saveOrUpdatePR}
                                    >
                                        Save Incomplete PR
                                    </button>
                                    <a href="/add_req" className="">
                                        <button
                                            type="button"
                                            className="text-white bg-green-400
                      focus:outline-none hover:bg-blue-400
                      focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        // onClick={addItem}
                                        >
                                            Previous Window
                                        </button>
                                    </a>
                                    <a href="/success" className="">
                                    <button
                                        type="button"
                                        className="text-white bg-green-400
                    focus:outline-none hover:bg-gray-100
                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        onClick={saveOrUpdatePR}
                                    >
                                        Submit PR
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </AuthenticatedLayout>
        </>
    );
}
