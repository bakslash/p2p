import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EditItemForm = ({ items, onUpdate }) => {
  const [editedItem, setEditedItem] = useState({items});

  useEffect(() => {
    // Assuming you want to edit the first item in the array
    if (items.length > 0) {
      setEditedItem({ ...items[0] });
    }
    console.log(items);
  }, [items]);
console.log(editedItem);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedItem);
  };

  return (
    <>
    <a href='/dashboard' className="">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
           
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

</a>

    
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
        
      <h2 className="text-2xl font-semibold mb-4">Edit Req Items</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-4 col-span-2">
          <label htmlFor="item" className="block text-sm font-bold text-gray-700">Item</label>
          <input
            type="text"
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="item"
            name="item"
            value={editedItem.item || ''}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-bold text-gray-700">Quantity</label>
          <input
            type="text"
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="quantity"
            name="quantity"
            value={editedItem.quantity || ''}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>

      <div className='border-t border-gray-300 mt-6 pt-6'>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-2"
        >
          Update Incomplete PR
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white ml-2 mt-2 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Save Req Item
        </button>
      </div>
    </div>
    </>
  );
};

EditItemForm.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditItemForm;
