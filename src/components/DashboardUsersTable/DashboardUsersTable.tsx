import { useMemo } from 'react'
import { useTable, TableOptions, Column } from 'react-table';
import './DashboardUsersTable.scss'
import { icons } from '../../constants';
import { Iuser } from '../../constants/types'

type tableProps = {
  data: Iuser[];
}

const DashboardUsersTable = ({data}: tableProps) => {

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

  const statuses = ["Inactive", "Pending", "Blacklisted", "Active"]
  
  return (
    <table {...getTableProps()}>
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
       {rows.map(row => {
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
             <td><img src={icons.details} alt="details" /></td>
           </tr>
         )
       })}
     </tbody>
   </table>
  )
}

export default DashboardUsersTable;