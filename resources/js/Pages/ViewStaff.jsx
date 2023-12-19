import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



const DataTable = ({ handleSelect, formatDate, auth }) => {
  const [staff, setStaff] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('http://localhost:8000/staff');
        console.log(response);
        setStaff(response.data.staff);
      } catch (error) {
        console.error('Error fetching staff:', error.message || 'Unknown error');
      }
    };

    fetchStaff();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  //const currentStaff = staff.slice(offset, offset + itemsPerPage);

  return (
    <>
    <div className="table-responsive mt-4 w-full ">
      <table className="table table-bordered table-striped text-center ml-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="px-6">ID</th>
            <th scope="col" className="px-6">Staff Name</th>
            <th scope="col" className="px-6">Email</th>
            <th scope="col" className="px-6">Username</th>
            <th scope="col" className="px-6">Title</th>
            <th scope="col" className="px-6">Line Manager</th>
            <th scope="col" className="px-6">Active</th>
            <th scope="col" className="px-6">Admin</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {staff.map((staffMember) => (
            <tr key={staffMember.id}>
              <th scope="row">{staffMember.id}</th>
              <td>{staffMember.staffNames}</td>
              <td>{staffMember.email}</td>
              <td>{staffMember.username}</td>
              <td>{staffMember.title}</td>
              <td>{staffMember.lineManager}</td>
              <td>{staffMember.isActive ? 'Yes' : 'No'}</td>
              <td>{staffMember.isAdmin ? 'Yes' : 'No'}</td>
              {/* <td>
                <button
                  type="button"
                  className="btn btn-sm btn-info"
                  onClick={() => handleSelect(staffMember, 'View')}
                  title="View"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning ml-2"
                  onClick={() => handleSelect(staffMember, 'Edit')}
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger ml-2"
                  onClick={() => handleSelect(staffMember)}
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
        pageCount={Math.ceil(staff.length / itemsPerPage)}
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
                <div className="">
                 
  
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                           
                        
                                <DataTable />
                           
                        </div>
                
                </div>
                
            </AuthenticatedLayout>
        </>
    );
}
export default ViewSup;
