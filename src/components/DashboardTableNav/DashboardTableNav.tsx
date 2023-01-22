import './DashboardTableNav.scss'
import { icons } from '../../constants'

const DashboardTableNav = () => {
  return (
    <div className="dashboard_tableNav">
      <div className="tableNav_left">
        <p>showing</p>
        <select defaultValue={100} name="" id="">
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="10">10</option>
        </select>
        <p>out of 100</p>
      </div>
      <div className="tableNav_right">
        <img src={icons.prev} alt="previous" />
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>15</p>
        <p>16</p>
        <img src={icons.next} alt="next" />
      </div>
    </div>
  )
}

export default DashboardTableNav