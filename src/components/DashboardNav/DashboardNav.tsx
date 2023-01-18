import './DashboardNav.scss' 
import union from '../../assets/images/union.png'
import lendsqr from '../../assets/images/lendsqr.png'
import profileImg from '../../assets/images/profile-img.png'
import { icons } from '../../constants'


const DashboardNav = () => {
  return (
    <nav className='dashboard_nav'>
      <div className='nav_logo'>
        <img src={union} alt="logo" />
        <img src={lendsqr} alt="logo" />
      </div>
      <div className='nav_searchBar'> 
        <input type="text" name='search' />
        <label htmlFor="search"><img src={icons.search} alt="search" /></label>
      </div>
      <div className='nav_links'>
        <p>Docs</p>
        <img src={icons.notification} alt="" />
        <div className='nav_userIcon'>
          <div><img src={profileImg} alt="" /></div>
          <p>Adedeji</p>
          <img src={icons.dropdown} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav