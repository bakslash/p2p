import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import ReqDetailForm from '../Components/FormModal';
import DataTable from '../Components/DataTable';
import axios from 'axios';

export default function Dashboard({ auth }) {

    const [req_item, setReqItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [measure, setMeasure] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = { req_item, quantity, measure };
        setItems([...items, newItem]);
        // Clear input fields after adding an item
        setReqItem('');
        setQuantity('');
        setMeasure('');
    };

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

                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="card p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                                    <div className="flex flex-col mb-3">
                                        <label className="text-sm font-medium text-gray-500 mb-1">Req Item</label>
                                        <textarea
                                            className="form-input form-input-sm rounded"
                                            id="req_item"
                                            placeholder=""
                                            value={req_item}
                                            onChange={(e) => setReqItem(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col mb-3">
                                        <label className="text-sm font-medium text-gray-500 mb-1">Quantity</label>
                                        <input
                                            type="text"
                                            className="form-input form-input-sm rounded"
                                            id="quantity"
                                            placeholder=""
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col mb-3">
                                        <label className="text-sm font-small text-gray-500 mb-1">Measure</label>
                                        <select
                                            className="form-select form-select-sm rounded"
                                            id="measure"
                                            value={measure}
                                            onChange={(e) => setMeasure(e.target.value)}
                                        >
                                            <option value="">Select Measure</option>
                                            <option value="category1">1</option>
                                            <option value="category2">Category 2</option>
                                        </select>

                                    </div>

                                    <div className="flex items-center mb-3 ">
                                        <button
                                            type="button"
                                            className="text-white bg-green-400
                                            focus:outline-none hover:bg-gray-100
                                            focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                            onClick={addItem}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className="table-responsive text-nowrap mt-4 mb-6">
                                    <table className="table  table-bordered text-center w-full">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Item</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Measure</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item, index) => (
                                                console.log(items),
                                                <tr key={index}>
                                                    <th >{index}</th>
                                                    <td>{item.req_item}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.measure}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-around m4-3">
                                    <button
                                        type="button"
                                        className="text-white bg-green-400
            focus:outline-none hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        onClick={addItem}
                                    >
                                        Save Incomplete PR
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-green-400
            focus:outline-none hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        onClick={addItem}
                                    >
                                        Previous Window
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-green-400
            focus:outline-none hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                        onClick={addItem}
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
