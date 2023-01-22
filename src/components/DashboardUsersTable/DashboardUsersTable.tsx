import './DashboardUsersTable.scss'
import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTable, Column } from 'react-table';
import { icons } from '../../constants';


const DashboardUsersTable = ({tableData}: any) => {

  const [viewDetails, setViewDetails] = useState<any>();
  const [userID, setUserID] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();

  const handleClick = (event: any, row: any) => {
    const allEls: any = document.querySelector("viewDetails");
    console.log(allEls);
    if (allEls != null) {
      allEls.setAttribute("class", "displayNone");
    }
    
    setViewDetails(row.id)

    const el: any = document.getElementById(viewDetails)
    
    el.setAttribute("class", "viewDetails");

    console.log("event: ", event.target)

    console.log("row: ", row);

    console.log("id: ", row.id)

    console.log("data: ", row.original)
    
    setUserID(Number(row.id))

    setUserDetails(row.original)

    console.log("userdetails: ", userDetails)
  }

  useEffect(() => {
    console.log("sending: ", userDetails)
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userID])
  

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

          let index = row.id

          return (
            <div onClick={(event) => handleClick(event, row)} className='detailsBtn'>
              <img src={icons.details} alt="details" />
              <div id={index} className="displayNone">
                <Link className="actions" to="/user-details" ><img src={icons.eye} alt="eye" /><p>View Details</p></Link>
                <a className="actions" href=""><img src={icons.blacklist} alt="blacklist" /><p>Blacklist User</p></a>
                <a className="actions" href=""><img src={icons.activeUser} alt="" /><p>Activate User</p></a>
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
     <thead>
       {headerGroups.map( headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map( column => (
             <th {...column.getHeaderProps()}>
               {column.render('Header')} 
               <img src={icons.filter} alt="filter" />
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map((row) => {
         prepareRow(row)
         
         return (
           <tr {...row.getRowProps()} >
             {row.cells.map(cell => {
               return (
                 <td {...cell.getCellProps()}>
                   {cell.render('Cell')}
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