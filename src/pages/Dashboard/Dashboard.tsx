import { useMemo } from 'react';
import { DashboardCardList, DashboardList, DashboardNav, DashboardUsersTable } from '../../components'
import { useDetails } from '../../App';


const Dashboard = () => {

  const data = useDetails()
    
  const tableData = useMemo(() => [...data], [data])

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