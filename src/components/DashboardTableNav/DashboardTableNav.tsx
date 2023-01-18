import './DashboardTableNav.scss'


const DashboardTableNav = () => {
  return (
    <div className="dashboard_tableNav">
      <div className="tableNav_left">
        <p>showing</p>
        <select name="" id="">
          <option value="100"></option>
        </select>
        <p>out of 100</p>
      </div>
      <div className="tableNav_right">
        <img src="" alt="" />
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>15</p>
        <p>16</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default DashboardTableNav