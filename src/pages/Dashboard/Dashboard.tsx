import './Dashboard.scss'
import moment from 'moment';
import axios from 'axios';
import { useState, useMemo, useEffect } from 'react';
import { DashboardCardList, DashboardList, DashboardNav, DashboardTableNav, DashboardUsersTable } from '../../components'
import { Link } from 'react-router-dom';
// import { apiData } from '../../constants/apiData';

const Dashboard = () => {
  
  const [usersData, setUsersData] = useState<any>([]);

  const fetchUsersData = async () => {

    const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

    const response = await axios.get(url).catch(err => console.log(err));

    if (response) {
      console.log(response.data);
      setUsersData(response.data);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, [])

  const statusArray = ["Inactive", "Pending", "Blacklisted", "Active"];
  
  const formattedData = usersData.map( (each: any) => {
    const date =  moment(each.createdAt).format('MMMM Do YYYY, h:mm a');
    const returnData = { ...each, ...{createdAt: date, status: statusArray[Math.floor(Math.random()*4)]}}
    return returnData
  })
  
  window.localStorage.setItem("defaultUser", JSON.stringify([formattedData[0]]));

  const tableData = useMemo(() => [...formattedData], [formattedData])

  return (
    <div className='app_dashboard'>
      <DashboardNav/>
      <div className="dashboard_menu">
        <DashboardList/>
        <div className='dashboard_display_centering'>
          <div className="dashboard_display">
            <div className="dashboard_users">
              <Link to="/user-details" ><h2>Users</h2></Link>
              <DashboardCardList/>
              <DashboardUsersTable tableData={tableData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard