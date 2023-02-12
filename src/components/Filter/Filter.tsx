import { icons } from "../../constants"

type FilterProps = {
  filterRef: any,
  open: boolean
}

const Filter = ({filterRef, open} : FilterProps) => {
  return (
    <div ref={filterRef} className={open ? 'dashboard_fliter' : 'displayNone'}>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="organization">Organization</label>
        <div className='select_wrapper'>
          <select defaultValue="Select" className='filter_select' name="organization" id="">
          <option value="Select" disabled>Select</option>
          </select>
        </div>
      </div>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="username">Username</label>
        <input className='filter_select' name='username' placeholder='User' type="text" />
      </div>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="email" >Email</label>
        <input className='filter_select' name='email' placeholder='Email' type="text" />
      </div>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="date">Date</label>
        <div className='icon_container'>
        <input className='filter_select' name='date' placeholder='Date' type="text" />
        <img className='calendar' src={icons.calendar} alt="calendar" />
        </div>
      </div>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="phoneNumber">Phone Number</label>
        <input className='filter_select' name='phoneNumber' placeholder='Phone Number' type="text" />
      </div>
      <div className='filter_options'>
        <label className='filter_label' htmlFor="status">Status</label>
        <div className='select_wrapper'>
          <select defaultValue="Select" className='filter_select' name="status" id="">
          <option value="Select" disabled>Select</option>
          </select>
        </div>
      </div>
      <div className='filter_buttons'>
        <button className='btn1'>Reset</button>
        <button className='btn2'>Filter</button>
      </div>
    </div>
  )
}

export default Filter