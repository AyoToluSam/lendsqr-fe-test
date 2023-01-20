import axios from 'axios';
import { useState, useEffect } from 'react';
import './Dashboard.scss'
import { DashboardCardList, DashboardList, DashboardNav, DashboardTableNav, DashboardUsersTable } from '../../components'
import { Iuser } from '../../constants/types';

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

  const data = tableData.map( (each: Iuser) => {
    const dateNum = new Date(each.createdAt);
    const date = new Date(dateNum).toLocaleDateString();
    return each.createdAt = date;
  })

  console.log(data);
  
  return (
    <div className='app_dashboard'>
      <DashboardNav/>
      <div className="dashboard_menu">
        <DashboardList/>
        <div className="dashboard_display">
          <div className="dashboard_users">
            <h2>Users</h2>
            <DashboardCardList/>
            <DashboardUsersTable data={data} />
          </div>
          <DashboardTableNav/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard