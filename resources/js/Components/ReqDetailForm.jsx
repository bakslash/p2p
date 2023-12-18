// ReqDetailForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ReqDetailForm = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    item: '',
    quantity: '',
    measure: '',
    status:1
  });

  const [tableData, setTableData] = useState([]);


  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/req_item/add', formData);
      console.log('Form submitted successfully:', response.data);
      

      // Update the tableData state with the submitted data
      //  setTableData((prevTableData) => [...prevTableData, response.data]);
      setTableData((prevTableData) => [...prevTableData,]);


    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className={`modal-full-height h-auto justify-center mx-4 md:mx-12 mt-6`}>
      <form className="w-full bg-white rounded-md p-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">

          <div className="w-full md:w-1/3 mb-3 md:mr-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="item">
              Req Item
            </label>
            <textarea
              className="w-full resize-none border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter text..."
              name="item"
              value={formData.item}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full md:w-1/5 mb-3 md:mr-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              id="quantity"
              name="quantity"
              placeholder="Quantity"
              required
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/5 mb-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="measure">
              Measure
            </label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              id="measure"
              name="measure"
              required
              value={formData.measure}
              onChange={handleChange}
            >
              <option value="" disabled>Choose Measure</option>
              <option value="units">Units</option>
              <option value="kgs">Kilograms</option>
            </select>
          </div>

          <div className="m-4 mt-6">
            <button
              type="button"
              className="text-gray-500 bg-green-400 border border-gray-400 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReqDetailForm;
