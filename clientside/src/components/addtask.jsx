import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAddNewTaskMutation } from "../integration/taskApi";
import { setCredentials } from "../integration/authSlice";


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [desc, setDes] = useState('');
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addNewTask, { isLoading ,isError}] = useAddNewTaskMutation();
  const { userInfo } = useSelector((state) => state.auth);
 
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log({ title, desc });
  console.log('here user login check!',userInfo)
    try {
      const response = await addNewTask({ title, desc }).unwrap();
      dispatch(setCredentials(...response))
      console.log('successfully added', response);
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              type="desc"
              id="desc"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              value={desc}
              onChange={(e) => setDes(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mb-3 rounded-md hover:bg-blue-600 w-full"
          >
            Add Task
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default AddTask;