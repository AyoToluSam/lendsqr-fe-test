import './DashboardList.scss'
import { dashboardData } from '../../constants'


const DashboardList = () => {

  const dashboardList = dashboardData.map( (list) => {
    return (
      <li key={list.id} className={list.className}>
        {list.iconUrl && <img src={list.iconUrl} alt="icon" />} 
        {list.title} 
        { list.iconUrl2 && <img src={list.iconUrl2} alt="icon" />}
      </li>
    )
  })

  return (
    <div className='dashboard_dropdown'>
      {
        <ul>{dashboardList}</ul>
      }
    </div>
  )
}

export default DashboardList