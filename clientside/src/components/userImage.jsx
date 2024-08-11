import React, { useEffect, useState, useRef } from 'react';
import { useLogoutMutation } from '../integration/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../integration/authSlice';
const CircularUser = ({ name, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
 
const dispatch=useDispatch();
const navigate=useNavigate();

const{userInfo}=useSelector((state)=>state.auth)
const[logout,{isLoading}]=useLogoutMutation()

  const handleLogout = async () => {
    try {
    if(userInfo){
      await logout();
      dispatch(setLogout());
    //   setIsOpen(!isOpen)
    }
    else{
      navigate('/login');}
    

    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  const handleDropdown = () => {
    setIsOpen(true);
  };



  return (
    <div className="relative inline-block">
      <button
        onClick={handleLogout}
        className="flex flex-col items-center"
      >
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-md mt-2">{name}</h3>
      </button>

      {(isOpen &&  <div
          ref={menuRef}
          className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10"
        >
          <div className="py-2">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </button>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            >
              Update Profile
            </a>
          </div>
        </div> )}
       
     
    </div>
  );
};

export default CircularUser;