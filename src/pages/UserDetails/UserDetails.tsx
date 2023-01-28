import './UserDetails.scss'
import { DashboardNav, DashboardList, DashboardUserDetails } from '../../components'
import { icons } from '../../constants'


const UsersDetails = () => {
  return (
    <div className='container'>
      <div className='app_userDetails'>
        <DashboardNav />
        <div className='userDetails_body'>
          <DashboardList display={true}/>
          <div className='userDetails_menu'>
            <div className='userDetails_menuHeader'>
              <div className='userDetails_title'>
                <div className='userDetails_backBtn'>
                  <img src={icons.arrowBack} alt="" />
                  <p>Back to Users</p>
                </div>
                <h2>User Details</h2>
              </div>
              <div className='userDetails_buttons'>
                <button>BLACKLIST USER</button>
                <button>ACTIVATE USER</button>
              </div>
            </div>
            <DashboardUserDetails/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersDetails