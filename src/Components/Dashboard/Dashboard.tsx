import React from 'react'
import './Dashboard.scss'
import union from '../../assets/union.png'
import lendsqr from '../../assets/lendsqr.png'
import { TfiBell } from "react-icons/tfi";
import { RiArrowDropDownFill, RiSearchLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className='app_dashboard'>
      <nav className='dashboard_nav'>
        <div className='nav_logo'>
          <img src={union} alt="logo" />
          <img src={lendsqr} alt="logo" />
        </div>
        <div className='nav_searchBar'>
          <input type="text" name='search' />
          <label htmlFor="search"><RiSearchLine/></label>
        </div>
        <div className='nav_links'>
          <p>Docs</p>
          <TfiBell/>
          <div className='nav_userIcon'>
            <img src="" alt="" />
            <p>Adedeji</p>
            <RiArrowDropDownFill />
          </div>
        </div>
      </nav>
      <div>
        <ul>
          <li><FaBriefcase/> Organization <RiArrowDropDownLine/></li>
          <li><FaHome/> Dashboard</li>
          <li>Customers</li>
          <li><HiUsers/> Users</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard