import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import ReqDetail from './ReqDetails';
import DataTable from '../Components/DataTable';
import axios from 'axios';
import ReqItemsTable from '@/Components/ReqItemsTable';

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

                                <div className="table-responsive text-nowrap mt-4 mb-6">

<ReqItemsTable />
                                  
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">

                                    <div className="flex flex-col mb-1">
                                        <label className="text-sm font-small text-gray-500 mb-2">Supplier Catergory</label>
                                        <select
                                            className="form-select form-select-sm rounded"
                                            id="measure"
                                            value={measure}
                                            onChange={(e) => setMeasure(e.target.value)}
                                        >
                                            <option value="">Select Supplier</option>
                                            <option value="category1">1</option>
                                            <option value="category2">Category 2</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                                    <div className="flex flex-col mb-3">
                                        <label className="text-sm font-small text-gray-500 mb-1">Supplier Name</label>
                                        <select
                                            className="form-select form-select-sm rounded"
                                            id="measure"
                                            value={measure}
                                            onChange={(e) => setMeasure(e.target.value)}
                                        >
                                            <option value="">Select Supplier</option>
                                            <option value="category1">1</option>
                                            <option value="category2">Category 2</option>
                                        </select>

                                    </div>
                                    <div className="flex flex-col mb-3">
                                        <label className="text-sm font-medium text-gray-500 mb-1">Quote per unit</label>
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
                                        <label className="text-sm font-medium text-gray-500 mb-1">Comments</label>
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
                                        <label className="text-sm font-medium text-gray-500 mb-1">ETA Date</label>
                                        <input
                                            type="date"
                                            className="form-input form-input-sm rounded"
                                            id="date"
                                            placeholder=""
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
