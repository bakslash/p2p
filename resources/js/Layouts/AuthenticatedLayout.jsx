// Authenticated.js
import { useState } from 'react';
import React from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Sidebar from '@/Components/Sidebar';
import verticalMenu from '../verticalMenu';
export default function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
const menuData=verticalMenu
// Add this utility function
const formatDate = (dateString) => {
  const options = {
      weekday: 'long', // full day name (e.g., "Monday")
      month: 'long',   // full month name (e.g., "January")
      day: 'numeric'   // day of the month
    };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
};

const [currentDate, setCurrentDate] = useState(new Date());

// Function to update the date
const updateDate = () => {
  const newDate = new Date(); // Get the current date and time
  setCurrentDate(newDate); // Update the state
};
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar menuData={menuData} user={user}/>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="bg-white border-b border-gray-100">
          {/* ... (rest of your navigation code) */}
        </nav>

        {header && (
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <button onClick={updateDate}>   {currentDate.toLocaleString()}</button>  
              {header}</div>
          </header>
        )}

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {/* ... (rest of your main content) */}
          {children}
        </main>
      </div>
    </div>
  );
}
