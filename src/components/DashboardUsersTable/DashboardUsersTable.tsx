import './DashboardUsersTable.scss'
import { useMemo, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import { icons } from '../../constants';


const DashboardUsersTable = ({tableData}: any) => {

  const [viewDetails, setViewDetails] = useState(false)
  const [userID, setUserID] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const display = useRef("displayNone")
  const clicked = useRef<any>()

  const handleClick = (event: any, row: any) => {
    
    display.current = "viewDetails"
    
    setViewDetails(true)

    console.log("event: ", event.target)

    console.log("row: ", row);

    console.log("id: ", row.id)

    console.log("data: ", row.original)
    
    setUserID(Number(row.id))

    setUserDetails(row.original)
  }

  useEffect(() => {
    console.log("sending: ", userDetails)
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userID])

  useEffect(() => {
    console.log("clicked", clicked.current)
    display.current = "viewDetails"
  }, [viewDetails])
  
  

  const statusArray = ["Inactive", "Pending", "Blacklisted", "Active"];

  const tableColumns = useMemo(() => [
    {
      Header: "ORGANIZATION",
      accessor: "orgName"
    },
    {
      Header: "USERNAME",
      accessor: "userName"
    },
    {
      Header: "EMAIL",
      accessor: "email"
    },
    {
      Header: "PHONE NUMBER",
      accessor: "phoneNumber"
    },
    {
      Header: "DATE JOINED",
      accessor: "createdAt"
    },
  ], []);

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push( (columns: any) => [
      ...columns,
      {
        id: "status",
        Header: "STATUS",
        Cell: () => (
          statusArray[Math.floor(Math.random()*4)]
        )
      },
      {
        id: "details",
        Cell: ({row}: any) => {     

          return (
            <div onClick={(event) => handleClick(event, row)} className='detailsBtn'>
              <img src={icons.details} alt="details" />
              <div className="displayNone" >
                <Link className="actions" to="/user-details" ><img src={icons.eye} alt="eye" /><p>View Details</p></Link>
                <div className="actions"><img src={icons.blacklist} alt="blacklist" /><p>Blacklist User</p></div>
                <div className="actions"><img src={icons.activeUser} alt="" /><p>Activate User</p></div>
              </div>
            </div>
          )
        }
      }
    ])
  }

  const tableInstance = useTable(
    {columns: tableColumns, data: tableData},
    tableHooks
    );

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,  
  } = tableInstance;
  
  return (
    <table className='dashboard_usersTable' {...getTableProps()}>
     <thead className='tableHeadGroup'>
       {headerGroups.map( headerGroup => (
         <tr className='tableHeadRow' {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map( (column, index) => (
             <th className={'tableHeadCells ' + "column" + index} {...column.getHeaderProps()}>
               <span>{column.render('Header')} 
                <img className={"headerIcon" + index} src={icons.filter} alt="filter" />
               </span>
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody className='tableBody' {...getTableBodyProps()}>
       {rows.map((row) => {
         prepareRow(row)
         
         return (
           <tr className='tableRow' {...row.getRowProps()} >
             {row.cells.map((cell, index) => {
               return (
                 <td className={'tableCell ' + "column" + index } {...cell.getCellProps()}>
                   <span>{cell.render('Cell')}</span>
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>
  )
}

export default DashboardUsersTable;