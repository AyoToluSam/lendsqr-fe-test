import axios from 'axios';
import { useState, useEffect } from 'react';
import './Dashboard.scss'
import { DashboardCardList, DashboardList, DashboardNav, DashboardTableNav, DashboardUsersTable } from '../../components'


const Dashboard = () => {
  
  const [tableData, setTableData] = useState<any>([]);

  const fetchTableData = async () => {

    const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

    const response = await axios.get(url).catch(err => console.log(err));

    if (response) {
      console.log(response.data);
      setTableData(response.data);
    }
  }

  useEffect(() => {
    fetchTableData();
  }, [])
  
  return (
    <div className='app_dashboard'>
      <DashboardNav/>
      <div className="dashboard_menu">
        <DashboardList/>
        <div className="dashboard_display">
          <div className="dashboard_users">
            <h2>Users</h2>
            <DashboardCardList/>
            <DashboardUsersTable data={tableData} />
          </div>
          <DashboardTableNav/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard