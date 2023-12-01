// ReqDetailForm.jsx
import React, { useEffect, useState } from 'react';
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
    TERipple,
} from "tw-elements-react";
import axios from 'axios';
// ... (previous imports)

const ReqDetailForm = ({ showModal, setShowModal }) => {
    const [formData, setFormData] = useState({
        req_item: '',
        quantity: '',
        measure: ''

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
            const response = await axios.post('http://localhost:8000/reqs', formData);
            console.log('Form submitted successfully:', response.data);

            // Update the tableData state with the submitted data
          //  setTableData((prevTableData) => [...prevTableData, response.data]);
            setTableData((prevTableData) => [...prevTableData, ]);

            setShowModal(false);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className={showModal ? 'modal-full-height border border-gray-500 h-auto' : ''}>
            
                            <form className="w-4/5" onSubmit={handleSubmit}>

                                <div className="flex flex-wrap w-full mb-3">
                                    <div className="w-full md:w-2/5 mb-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="quantity">
                                            Req Item
                                        </label>
                                        <textarea
                                            className="w-4/5 resize-none border border-gray-300
                                             px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 p-2"
                                            placeholder="Enter text..."
                                        ></textarea>

                                    </div>
                                    <div className="w-full md:w-1/5 mb-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="quantity">
                                            Quantity
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="quantity"
                                            name="quantity"
                                            placeholder="quantity"
                                            required
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="w-full md:w-1/5 mb-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="measure">
                                            Sub Company
                                        </label>
                                        <select
                                            className="form-select"
                                            id="measure"
                                            name="measure"
                                            required
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled selected>Measure</option>
                                            <option value="category1">Category 1</option>
                                            <option value="category2">Category 2</option>
                                        </select>
                                    </div>

                                    <div className="w-full md:w-1/5 mt-6">

                                        <button type="button"
                                            className="text-gray-500 bg-green-400 border 
                                            border-gray-400 focus:outline-none hover:bg-gray-100
                                            focus:ring-4 focus:ring-gray-200 py-1 px-4"
                                            onClick={handleSubmit}>Add</button>
                                    </div>
                                </div>
                            </form>

        </div>
    );
};

export default ReqDetailForm;
