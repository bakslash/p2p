// ReqItemsTable.js
import React ,{useEffect,useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ReqItemsTable = ({  handleSelect}) => {
  
    const [quantity, setQuantity] = useState('');
    const [measure, setMeasure] = useState('');
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(true);
const id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    const fetchReqDetails = async () => {
        try {
            const response = await axios.get(`/req_item/${id}`);
            console.log('res', response);
            setItems(response.data.data);
        } catch (error) {
            console.error('Error fetching reqs:', error);
        }
    };

    // useEffect to fetch reqs data when the component mounts
    useEffect(() => {
        fetchReqDetails();
    }, []);
  return (
    <div className="table-responsive text-nowrap  mb-6">
      <table className="table table-bordered text-center w-full">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Measure</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.measure}</td>
              <td>{item.status === 1 ? 'complete' : 'incomplete'}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => handleSelect(item, 'View')}
                  title="View"
                >
                  <FontAwesomeIcon icon={faEye} className="text-gray-500" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm ml-2"
                  onClick={() => handleSelect(item, 'Edit')}
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm ml-2"
                  onClick={() => handleSelect(item)}
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
  );
};

export default ReqItemsTable;
