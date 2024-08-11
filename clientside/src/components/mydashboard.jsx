import React from 'react'
import Sidebar from './sidebar'
import TasksPage from './taskcomponent'

const MyDashboard = () => {
  return (
    <div className="flex"><Sidebar/>
    <TasksPage/></div>
  )
}

export default MyDashboard