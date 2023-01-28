import './DashboardList.scss'
import { dashboardData } from '../../constants'


const DashboardList = ({display} : any) => {

  const dashboardList = dashboardData.map( (list, id) => {
    if (list.notDisplay) {
      if (!display) {
        return null
      }
    }
    return (
      <div key={id} className='dashboard_dropdown'>
        {list.extraDiv && <div className='highlightBox' ><div className='highlightDarker'></div><div className='highlight'></div></div>} 
        <div key={list.id} className={list.className}>
          {list.iconUrl && <img src={list.iconUrl} alt="icon" />} 
          <p>{list.title} </p>
          { list.iconUrl2 && <img className='dropIcon' src={list.iconUrl2} alt="icon" />}
        </div>
      </div>
    )
  })

  return (
    <div className='dashboard_container'>
      {
        dashboardList
      }
    </div>
  )
}

export default DashboardList