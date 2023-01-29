import moment from 'moment';
import axios from 'axios';
import { useState, useMemo, useEffect } from 'react';
import { DashboardCardList, DashboardList, DashboardNav, DashboardUsersTable } from '../../components'


const Dashboard = () => {
  
  const [usersData, setUsersData] = useState<any>([]);

  //Fetching data from API at saving it into the above state

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

  //Declaring the possible statuses and generating random status
  //for users.
  //Also formatting the dates in the same array loop

  const statusArray = ["Inactive", "Pending", "Blacklisted", "Active"];
  
  const formattedData = usersData.map( (each: any) => {
    const date =  moment(each.createdAt).format('MMMM Do YYYY, h:mm a');
    const returnData = { ...each, ...{createdAt: date, status: statusArray[Math.floor(Math.random()*4)]}}
    return returnData
  })
    
  const tableData = useMemo(() => [...formattedData], [formattedData])

  return (
    <div className='container'>
      <div className='app_dashboard'>
        <DashboardNav/>
        <div className="dashboard_menu">
          <DashboardList display={false}/>
          <div className='dashboard_display_centering'>
            <div className="dashboard_display">
              <div className="dashboard_users">
                <h2>Users</h2>
                <DashboardCardList data={tableData} />
                <DashboardUsersTable tableData={tableData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard