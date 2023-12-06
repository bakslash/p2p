import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, NavLink, useNavigate } from 'react-router-dom';
import ReqItemsTable from '../Components/ReqItemsTable'; // Add this import


import ReqDetails from './ReqDetails';
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


const ReqView = ({ data }) => {

  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(true);

  const fetchReqDetails = async () => {
    try {
      const response = await axios.get(`/allreq_details`);
      console.log('res', response);
      setItems(response.data.reqs);
    } catch (error) {
      console.error('Error fetching reqs:', error);
    }
  };
  console.log(items);

  // useEffect to fetch reqs data when the component mounts
  useEffect(() => {
    fetchReqDetails();
  }, []);
  return (
    <div className="container mx-auto mt-2 p-4 bg-white shadow-m
    d rounded-md w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3 border-4 overflow-auto  border ">
      <h4 className=" font-semibold mb-1 p-2 border text-center "> GOODS AND SERVICES REQUISITION</h4>
      <table className="w-full table-auto">
        <thead className='bg-black text-white'>
          <th className="py-2 px-4 border text-left ">Item</th>
          <th className="py-2 px-4 border text-left">Quantity</th>
        </thead>
        <tbody>
          {items.map((item) =>
            <tr>
              <td className="py-1 px-1 border text-left">{item.item}</td>
              <td className="py-1 px-1 border text-left">{item.quantity}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h3 className=" font-semibold mb-1 p-2 border text-center ">SUPPLIES REQUISITION</h3>

      <div className="overflow-x-auto ">
        <h6 className="border bg-gray-100 text-center p-2">COST OF ALLOCATION(FILL APPLICABLE)</h6>

        <table className="w-full table-auto">
          <thead>

          </thead>
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td className="py-1 px-1 border text-left">{key}</td>
                <td className="py-1 px-1 border text-left">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};





const ViewReq = ({ showReqModal, setShowReqModal, req }) => {


  console.log('test vo', req);
  const navigate = useNavigate

  return (
    <div className={showReqModal ? 'flex items-center justify-center overflow-y-auto border border-green' : ''}>
      <TEModal show={showReqModal} setShow={setShowReqModal} className='overflow-y-auto border border-yellow'>
        <TEModalDialog size="scrollable sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2" className='overflow-y-auto border border-red fixed top-0 left-0'>
          <TEModalContent className='overflow-y-auto border border-blue'>
            <TEModalHeader>
              <button
                type="button"
                className="text-gray-900 hover:bg-gray-400
                focus:ring-4 focus:ring-gray-500 py-1 px-4 absolute left-2"
                onClick={() => setShowReqModal(false)}
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
            </TEModalHeader>
            <TEModalBody className="max-h-[800px] overflow-y-auto">
              {req ? (
                <ReqView data={req} />
              ) : (
                <p>Loading...</p>
              )}
            </TEModalBody>
            <TEModalFooter></TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>


  );
};

export default ViewReq;
