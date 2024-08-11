import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import MyDashboard from './components/mydashboard';
import RegisterPage from './components/registerPage';
import AddTask from './components/addtask';
import PrivateRouter from './components/privateRoute';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<RegisterPage/>}/>
       <Route path='' element={<PrivateRouter/>}> <Route path='/' element={<MyDashboard/>}/></Route>
       <Route path='' element={<PrivateRouter/>}><Route path='/addtask' element={<AddTask/>}/></Route>
      </Routes>
    </>
  )
}
