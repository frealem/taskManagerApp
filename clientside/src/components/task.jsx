import React from 'react';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

const Task = ({ task, onStatusChange }) => {
  const handleStatusChange = () => {
    onStatusChange(task.id, task.status === 'pending' ? 'completed' : 'pending');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center">
      <div>
        
        <h3 className="text-xl font-bold">{task.title}</h3>
        <p className="text-gray-500">{task.description}</p>

      </div>
      <button
        className={`px-4 py-2 rounded-md ${
          task.status === 'pending'
            ? 'text-yellow-500 hover:text-yellow-600'
            : 'text-green-500 hover:text-green-600'
        }`}
        onClick={handleStatusChange}
      >
        {task.status === 'pending' ? 'Complete' : 'Reopen'}
      </button>
      <button
        className={`px-4 py-2 rounded-md bg-primary text-white`}
      >
        Edit
      </button>
      <button
        className={`px-4 py-2 rounded-md bg-red-500 text-white`}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;