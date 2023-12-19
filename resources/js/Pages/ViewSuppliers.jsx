import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


const DataTable = ({ handleSelect, formatDate, auth }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/suppliers');
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error.message || 'Unknown error');
      }
    };

    fetchSuppliers();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentSuppliers = suppliers.slice(offset, offset + itemsPerPage);

  return (
    <>
  <div className="table-responsive mt-4">
    <table className="table table-bordered table-striped text-center table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact Person</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">Supplier PIN</th>
          <th scope="col">Postal Address</th>
          <th scope="col">Physical Location</th>
          <th scope="col">Nature of Supplies</th>
          <th scope="col">Supplier Active</th>
          <th scope="col">Due Diligence Certificate</th>
          <th scope="col">Certificate of Commitment</th>
          <th scope="col">Certificate of Incorporation</th>
          <th scope="col">Bank Letter</th>
          <th scope="col">Turn Over Status</th>
          {/* <th scope="col">Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {currentSuppliers.map((supplier) => (
          <tr key={supplier.id}>
            <th scope="row">{supplier.id}</th>
            <td>{supplier.company_name}</td>
            <td>{supplier.contact_person}</td>
            <td>{supplier.phone_number}</td>
            <td>{supplier.email}</td>
            <td>{supplier.supplier_pin}</td>
            <td>{supplier.postal_address}</td>
            <td>{supplier.physical_location}</td>
            <td>{supplier.nature_of_supplies}</td>
            <td>{supplier.supplier_active ? 'Yes' : 'No'}</td>
            <td>{supplier.due_diligence_certificate}</td>
            <td>{supplier.certificate_of_commitment}</td>
            <td>{supplier.certificate_of_incorporation}</td>
            <td>{supplier.bank_letter}</td>
            <td>{supplier.turn_over_status}</td>
             {/*
            <td>
              <button
                type="button"
                className="btn btn-sm btn-info"
                onClick={() => handleSelect(supplier, 'View')}
                title="View"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-warning ml-2"
                onClick={() => handleSelect(supplier, 'Edit')}
                title="Edit"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger ml-2"
                onClick={() => handleSelect(supplier)}
                title="Delete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* <div className="flex justify-center items-center mt-4">
    <ReactPaginate
      previousLabel="< Previous"
      nextLabel="Next >"
      pageCount={Math.ceil(suppliers.length / itemsPerPage)}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      activeClassName="active"
    />
  </div> */}
</>

  );
};










const ViewSup = ({ auth }) => {
    const [criteria, setCriteria] = useState('');
    const [code, setCode] = useState('');
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const [reqs, setReqs] = useState([]);
    const [req, setReq] = useState([]);
   


    const URL = 'http://localhost:8000'
    


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
    const handleSelect = (req, actionType) => {
        setReq(req)
        console.log('req', actionType);


        // Perform different actions based on the actionType
        switch (actionType) {
            case 'View':
                window.location.href = `/view_req/${req.id}`;
                break;
            case 'Edit':
                window.location.href = `/edit_req/${req.id}`;
                    
                
                break;
            case 'delete':
                // Implement logic for deleting
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (formData) => {
        // Handle the form submission logic here
        console.log('Form submitted with data:', formData);
        // Add your logic to send the form data to the server or perform any necessary actions
        setIsAddFormOpen(false); // Close the modal after submission

    };


    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: '2-digit',  // full month name (e.g., "January")
            day: 'numeric'   // day of the month
        };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };
    const handleViewReq = () => {

        setShowModal(true)
    }

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                }
            >
                <Head title="Dashboard" />
                <div className="py-12">
                 
                 

                   
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="card p-4">
                                
                                    {/* <div className="flex items-center space-x-2">
                                        <label className="text-sm font-small text-gray-500">Criteria</label>
                                        <select
                                            className="form-select form-select-sm rounded"
                                            id="supplier-category"
                                            value={criteria}
                                            onChange={(e) => setCriteria(e.target.value)}
                                        >
                                            <option value="category1">1</option>
                                            <option value="category2">Category 2</option>
                                        </select>
                                    </div> */}
                                    {/* <div className="flex items-center space-x-2">
                                        <label className="text-sm font-medium text-gray-500"></label>
                                        <input
                                            type="text"
                                            className="form-input form-input-sm rounded"
                                            id="supplier-code"
                                            placeholder=""
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="text-gray-900 bg-white border 
                                              border-gray-400 focus:outline-none hover:bg-gray-100
                                              focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                            onClick={handleFindButtonClick}
                                        >
                                            Find
                                        </button>
                                    </div> */}
                                    <style>
                                        {`
                                       .modal-full-height {
                                    height: 100vh;
                                    overflow-y: auto;
                                          }
                                              `}
                                    </style>

                                    <div className="flex items-center mt-1">
                                        <a href='/add_req' className="">

                                            <button
                                                type="button"
                                                className="text-gray-500 bg-green-400 border 
                                    border-gray-400 focus:outline-none hover:bg-gray-100
                                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded"
                                            // onClick={handleViewReq}
                                            >
                                                Add
                                            </button>
                                        </a>
                                    </div>
                        
                                <DataTable />
                            </div>
                        </div>
                
                </div>
                
            </AuthenticatedLayout>
        </>
    );
}
export default ViewSup;
