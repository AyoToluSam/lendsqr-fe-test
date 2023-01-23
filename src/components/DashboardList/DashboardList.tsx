import './DashboardList.scss'
import { dashboardData } from '../../constants'


const DashboardList = () => {

  const dashboardList = dashboardData.map( (list) => {
    return (
      <div className='dashboard_dropdown'>
        <div className={list.extraDiv ? "highlightWrapper" : ""} >
          {list.extraDiv && <div className='highlightBox' ><div className='highlightDarker'></div><div className='highlight'></div></div>} 
          <div key={list.id} className={list.className}>
            {list.iconUrl && <img src={list.iconUrl} alt="icon" />} 
            <p>{list.title} </p>
            { list.iconUrl2 && <img src={list.iconUrl2} alt="icon" />}
          </div>
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