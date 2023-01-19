import { useMemo } from 'react'
import { useTable } from 'react-table';
import './DashboardUsersTable.scss'
import { icons } from '../../constants';
import { Iuser } from '../../constants/types'

type tableProps = {
  data: Iuser[];
}

const DashboardUsersTable = ({data}: tableProps) => {
  
  const filter = () => {
    return (
      <img src={icons.filter} alt="filter" />
    )
  }

  const tableData = useMemo(() => [...data], [data]);

  const columns = useMemo(() => [
    {
      Header: `ORGANIZATION ${filter}`,
      accessor: "orgName"
    },
    {
      Header: `USERNAME ${filter}`,
      accessor: "userName"
    },
    {
      Header: `EMAIL ${filter}`,
      accessor: "email"
    },
    {
      Header: `PHONE NUMBER ${filter}`,
      accessor: "phoneNumber"
    },
    {
      Header: `DATE JOINED ${filter}`,
      accessor: "createdAt"
    },
    {
      Header: `STATUS ${filter}`,
      accessor: "inactive"
    },
  ], []);

  const tableInstance = useTable({ columns, tableData })

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,  
  } = tableInstance;
  
  return (
    <table {...getTableProps()}>
     <thead>
       {
       headerGroups.map( headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {
           headerGroup.headers.map( column => (
             <th {...column.getHeaderProps()}>
               {
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {
       rows.map(row => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()}>
             {
             row.cells.map(cell => {
               return (
                 <td {...cell.getCellProps()}>
                   {
                   cell.render('Cell')}
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