import './UserDetails.scss'
import { DashboardNav, DashboardList, DashboardUserDetails } from '../../components'


const UsersDetails = () => {
  return (
    <div>
      <DashboardNav />
      <div>
        <DashboardList />
        <div className='dashboard_detailsMenu'>
          <div className='dashboard_detailsHeader'>
            <div className='detailsHeader_left'>
              <div className='dashboard_backBtn'>
                <img src="" alt="" />
                <p>Back to Users</p>
              </div>
              <h2>User Details</h2>
            </div>
            <div className='dashboard_buttons'>
              <button></button>
              <button></button>
            </div>
          </div>
          <DashboardUserDetails /> 
        </div>
      </div>

    </div>
  )
}

export default UsersDetails