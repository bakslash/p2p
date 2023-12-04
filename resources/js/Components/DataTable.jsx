import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

const DataTable = ({ reqs, handleSelect, formatDate, auth }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(reqs.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentReqs = reqs.slice(offset, offset + itemsPerPage);
  

  return (
    <>
    <div className="table-responsive text-nowrap mt-4">
      <table className="table table-bordered text-center w-full">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Request Purpose</th>
            <th scope="col">Staff</th>
            <th scope="col">Department</th>
            <th scope="col">Req Date</th>
            <th scope="col">Completed</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentReqs.map((req) => (
            <tr key={req.id}>
              <th scope="row">{req.id}</th>
              <td>{req.purpose_of_purchase}</td>
              <td>{auth.user.name}</td>
              <td>{req.department}</td>
              <td>{formatDate(req.created_at)}</td>
              <td>{req.completed ? 'True' : 'False'}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => handleSelect(req, 'View')}
                  title="View"
                >
                  <FontAwesomeIcon icon={faEye} className="text-gray-500" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm ml-2"
                  onClick={() => handleSelect(req, 'Edit')}
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm ml-2"
                  onClick={() => handleSelect(req)}
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      
    </div>
    <div className="flex justify-center items-center mt-4 border border-black">
        {/* <ReactPaginate
         previousLabel="< previous"
         nextLabel="next >"
        
          pageCount={pageCount}
         
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
         
          
        /> */}
      </div>
    </>
     
  );
};

export default DataTable;
