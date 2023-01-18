import { useTable } from 'react-table';
import './DashboardUsersTable.scss'
import { Iuser } from '../../constants/types'

type tableProps = {
  data: Iuser[];
}

const DashboardUsersTable = ({data}: tableProps) => {
  
  return (
    <div>
      {data[0].profile.firstName}
    </div>
  )
}

export default DashboardUsersTable