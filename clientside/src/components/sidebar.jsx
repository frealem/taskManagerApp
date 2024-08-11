import React from 'react';
import CircularUser from './userImage';
import image from '/wp2249260.jpg'
import { Outlet } from 'react-router-dom';

// Sidebar component
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>
      <nav>
        <ul className="space-y-4">
        <li>
            <a href="/" className="hover:text-gray-400">
            <CircularUser name='frealem' image={image}/>
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400">
              Tasks
            </a>
          </li>
          
          <li>
            <a href="/addtask" className="hover:text-gray-400">
              Add New Task
            </a>
          </li>
          <li>
            <a href="/priority" className="hover:text-gray-400">
              Your Priority
            </a>
          </li>
          
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Sidebar;