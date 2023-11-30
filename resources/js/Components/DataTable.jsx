// DataTable.jsx
import React from 'react';

const DataTable = ({ reqs, handleSelect, formatDate }) => {
    return (
        <div className="table-responsive text-nowrap mt-4">
        <table className="table  table-bordered text-center w-full">
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
            {reqs.map((req) => (
              <tr key={req.id}>
                <th scope="row">{req.id}</th>
                <td>{req.purpose_of_purchase}</td>
                <td>{req.staff_name}</td>
                <td>{req.department}</td>
                <td>{formatDate(req.created_at)}</td>
                <td>{req.completed ? 'True' : 'False'}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleSelect(req)}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default DataTable;
