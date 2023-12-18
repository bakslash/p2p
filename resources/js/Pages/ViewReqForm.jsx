import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../../public/assets/img/logos/logo.jpeg'

const ReqView = ({ data }) => {
  const [items, setItems] = useState([]);
  const [item_details, setItemdetails] = useState([]);
  const id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

  const fetchReqDetails = async () => {
    try {
      const response = await axios.get(`/req_item/${id}`);
   
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching reqs:', error);
    }
    const res = await axios.get(`/req/${id}`);
    setItemdetails(res.data.req);
  };

  useEffect(() => {
    fetchReqDetails();
  }, []);
  const formatDate = ({ created_at }) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric'
    };
  
    // Assuming created_at is a string date
    const formattedDate = new Date(created_at).toLocaleDateString(undefined, options);
  
    return formattedDate;
  };


console.log('i',item_details);
  return (
   <>
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
   <div className="container mx-auto mt-2 h-100vh mb-6 p-4 bg-white shadow-md rounded-md w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2 border-4 overflow-auto border">
   <img
        src={logo} 
        alt="Company Logo"
        className="mb-4 mx-auto"
        style={{ maxWidth: '100%', maxHeight: '180px' }} 
      />
   <h4 className="font-semibold mb-1 p-2 border text-center">GOODS AND SERVICES REQUISITION</h4>
  <div className="flex justify-between items-center mb-4">
 
    <div>
      <span>Department Name:{item_details.department}</span>
    </div>
   
    <div>
      <span>Date:{formatDate(item_details)}</span>
    </div>
  </div>
  
    <table className="w-full table-auto">
      <thead className="bg-black text-white">
        <tr>
          <th className="py-2 px-4 border text-left">Item</th>
          <th className="py-2 px-4 border text-left">Quantity</th>
        </tr>
      </thead>
  
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <td className="py-1 px-1 border text-left">{item.item}</td>
            <td className="py-1 px-1 border text-left">{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
      <h3 className="font-semibold mb-1 p-2 border text-center">SUPPLIES REQUISITION</h3>

      <div className="overflow-x-auto">
        <h6 className="border bg-gray-100 text-center p-2">COST OF ALLOCATION(FILL APPLICABLE)</h6>

        <table className="w-full table-auto">
          <thead></thead>
          <tbody>
            {Object.entries(item_details).map(([key, value]) => (
              <tr key={key}>
                <td className="py-1 px-1 border text-left">{key}</td>
                <td className="py-1 px-1 border text-left">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ReqView;
