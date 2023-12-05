import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import ReqDetailForm from './AddReqForm';
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
    
            // Set the status based on the operation
            const prStatus = isSubmitting ? true : false;
    
            const response = await axios.post(`http://localhost:8000/req_details/add`, {
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
    

    const fetchReqDetails = async () => {
        try {
            const response = await axios.get(`/allreq_details`);
            console.log('res', response);
            setItems(response.data.reqs);
        } catch (error) {
            console.error('Error fetching reqs:', error);
        }
    };

    // useEffect to fetch reqs data when the component mounts
    useEffect(() => {
        fetchReqDetails();
    }, []);

    const formatDate = (dateString) => {
        const options = {
            weekday: 'long', // full day name (e.g., "Monday")
            month: 'long',   // full month name (e.g., "January")
            day: 'numeric'   // day of the month
        };
    };
    console.log('res',items.reqs);

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
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="card p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* ... (existing form code) */}
                </div>
                
                {/* Use the DataTableComponent here */}
                <ReqItemsTable items={items} handleSelect={handleSelect} />

                <div className="flex justify-around m4-3">
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
                  <button
                    type="button"
                    className="text-white bg-green-400
                    focus:outline-none hover:bg-gray-100
                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                    onClick={saveOrUpdatePR}
                  >
                    Submit PR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
