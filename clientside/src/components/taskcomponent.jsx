import React, { useState } from 'react';
import Task from './task';

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish the report', description: 'Write the final section and proofread', status: 'pending' },
    { id: 2, title: 'Schedule a meeting', description: 'Discuss the project with the team', status: 'completed' },
    { id: 3, title: 'Create a wireframe', description: 'Design the user interface for the new feature', status: 'todo' },
  ]);

  const handleStatusChange = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <div className="grid grid-cols-1 gap-6">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onStatusChange={handleStatusChange} />
        ))}
      </div>
      
    </div>
  );
};

export default TasksPage;