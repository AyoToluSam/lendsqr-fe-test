import { useState } from "react";
import './Dashboard.scss'
import { DashboardCardList, DashboardList, DashboardNav, DashboardTableNav, DashboardUsersTable } from '../../components'

const Dashboard = () => {
  
  const [tableData, setTableData] = useState({})

  

  return (
    <div className='app_dashboard'>
      <DashboardNav/>
      <div className="dashboard_menu">
        <DashboardList/>
        <div className="dashboard_users">
          <h2>Users</h2>
          <DashboardCardList/>
          <DashboardUsersTable/>
        </div>
        <DashboardTableNav/>
      </div>
    </div>
  )
}

export default Dashboard