import union from '../../assets/images/union.png'
import lendsqr from '../../assets/images/lendsqr.png'
import profileImg from '../../assets/images/profile-img.png'
import { icons } from '../../constants'
import { Link } from 'react-router-dom'


const DashboardNav = () => {
  return (
    <nav className='dashboard_nav'>
      <Link to="/" className='nav_logo'>
        <img className='logo1' src={union} alt="logo" />
        <img className='logo2' src={lendsqr} alt="logo" />
      </Link>
      <div className='nav_searchBar'> 
        <input type="text" name='search' placeholder='Search for anything'/>
        <span><img src={icons.search} alt="search" /></span>
      </div>
      <div className='nav_links'>
        <p>Docs</p>
        <img className='notification' src={icons.notification} alt="" />
        <div className='nav_userIcon'>
          <div className='profileImg'><img src={profileImg} alt="" /></div>
          <p>Adedeji</p>
          <img src={icons.dropdown} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav