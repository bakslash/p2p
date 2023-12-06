import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditItemForm from '../Components/EditReqItemForm';
import axios from 'axios';

const EditReqItem = () => {
  const [items, setItems] = useState({});
  const [item, setItem] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
 
  var id 

  const parsePageId = (path) => path.substring(path.lastIndexOf('/') + 1)
  id = parsePageId(window.location.pathname)
  // Assume you have a function to fetch the items
  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/req_items/${id}/edit`);
     console.log(response);
      setItems(response.data.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    fetchItems();
    
  }, []);

console.log(items);
  
  
  const handleUpdateItem = async (updatedItem) => {
    console.log(updatedItem);
   
    
    try {
      const response = await axios.put(
        `http://localhost:8000/reqs_items/${id}`,
        updatedItem
      );

      // Assuming the API returns the updated item
      const updatedItems = items.map((item) =>
        item.id === updatedItem.id ? response.data : item
      );

      setItems(updatedItems);
      setSelectedItem(null); // Clear the selected item after updating
      if(response){
        window.location.href = `/success`;
      }
    } catch (error) {
      console.error('Error updating item', error);
    }
  };
  console.log(items);

//   const handleEditItem = (item) => {
//     console.log('item', item);
//     setSelectedItem(item);
//   };

  return (
    <div>
      {/* Render the list of items */}
     

      {/* Render the EditItemForm if an item is selected */}
      {
        <EditItemForm items={items} onUpdate={handleUpdateItem} />
      }
    </div>
  );
};

export default EditReqItem;
