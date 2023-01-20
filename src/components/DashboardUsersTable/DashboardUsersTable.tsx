import { useMemo, useState, useEffect } from 'react'
import { useTable, Column } from 'react-table';
import './DashboardUsersTable.scss'
import { icons } from '../../constants';
import { Iuser } from '../../constants/types'
import UsersDetails from '../../pages/UserDetails/UserDetails';


type tableProps = {
  data: Iuser[];
}

const DashboardUsersTable = ({data}: tableProps) => {

  const [viewDetails, setViewDetails] = useState(false);

  const [userID, setUserID] = useState<any>();

  const [userDetails, setUserDetails] = useState<any>();

  useEffect(() => {
    console.log(UsersDetails)
  
    return () => {
      window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails])
  

  const handleClick = () => {
    setViewDetails((prev) => {
      return !prev
    })

    setUserID( (e: any) => {
      let userID = e.target["user-id"];
      console.log("origin:", userID);
      return userID
    })

    setUserDetails(data[Number(userID)]);

  }

  const columns: Column[] = useMemo(() => [
    {
      Header: `ORGANIZATION`,
      accessor: "orgName"
    },
    {
      Header: `USERNAME`,
      accessor: "userName"
    },
    {
      Header: `EMAIL`,
      accessor: "email"
    },
    {
      Header: `PHONE NUMBER`,
      accessor: "phoneNumber"
    },
    {
      Header: `DATE JOINED`,
      accessor: "createdAt"
    },
  ], []);

  const tableInstance = useTable({ columns, data });

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,  
  } = tableInstance;

  const statuses = ["Inactive", "Pending", "Blacklisted", "Active"];
  
  return (
    <table className='dashboard_usersTable' {...getTableProps()}>
     <thead>
       {headerGroups.map( headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map( column => (
             <th {...column.getHeaderProps()}>
               {column.render('Header')} <img src={icons.filter} alt="filter" />
             </th>
           ))}
           <th>STATUS <img src={icons.filter} alt="filter" /></th>
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map((row, userIndex) => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()}>
             {row.cells.map(cell => {
               return (
                 <td {...cell.getCellProps()}>
                   {cell.render('Cell')}
                 </td>
               )
             })}
             <td>{statuses[Math.floor(Math.random()*4)]}</td>
             <td>
              <img user-id={userIndex} onClick={handleClick} src={icons.details} alt="details" />
              <div className={ viewDetails ? 'viewDetails displayNone' : 'viewDetails'}>
                <a href="/pages/userDetails"><img src={icons.eye} alt="eye" /> View Details</a>
                <a href=""><img src={icons.blacklist} alt="blacklist" /> Blacklist User</a>
                <a href=""><img src={icons.activeUser} alt="" /> Activate User</a>
              </div>
             </td>
           </tr>
         )
       })}
     </tbody>
   </table>
  )
}

export default DashboardUsersTable;