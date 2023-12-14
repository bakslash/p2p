import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReqView = ({ data }) => {
  const [items, setItems] = useState([]);
  const [item_details, setItemdetails] = useState([]);
  const [status, setStatus] = useState(true);
  const id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
  console.log(id);
  const fetchReqDetails = async () => {
    try {
      const response = await axios.get(`/req_item/${id}`);
      //console.log('res',response.data.data);
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching reqs:', error);
    }
    const res = await axios.get(`/req/${id}`);
    console.log('res',res.data.req);
    setItemdetails(res.data.req)
  };

  useEffect(() => {
    console.log(id);
    fetchReqDetails();
  }, []);
console.log('i',items);
  return (
    <div className="container mx-auto mt-2 p-4 bg-white shadow-md rounded-md w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3 border-4 overflow-auto border">
      <h4 className="font-semibold mb-1 p-2 border text-center">GOODS AND SERVICES REQUISITION</h4>
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
  );
};

export default ReqView;
