import { useMemo, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTable, usePagination, Column } from 'react-table';
import { icons } from '../../constants';
import DashboardTableNav from '../DashboardTableNav/DashboardTableNav';
import { Iuser } from '../../constants/types';
import Filter from '../Filter/Filter';

type DashboardUsersTableProps = {
  tableData: Iuser[]
}

const DashboardUsersTable = ({tableData}: DashboardUsersTableProps) => {

  const [userID, setUserID] = useState<number>();
  const [userDetails, setUserDetails] = useState<any>();
  const [open, setOpen] = useState(false);

  //ListRef targets column 6 of the table. It is to assign a ref to each 
  //icon, so as to target the clicked one to open the details.
  //FilterRef handles the filter pop up when the table head icons are clicked

  const listRef = useRef<any>([]);
  const filterRef = useRef<any>();

  //Handler for the viewDetails pop up. It updates the userDetails if
  //any row is clicked, using the information of that row.

  const handleDetails = (row: any) => {

    const clicked = listRef.current[row.id]
    clicked.className = "viewDetails";
    console.log("RowId: ",row.id)
    setUserID(row.id)
    console.log("RowOriginal: ", row.original)
    setUserDetails(row.original)
  }

  //Sending the most up to date userDetails to the users page and also
  //using effect to handle the closing of the pop up if user clicks 
  //outside of it.

  useEffect(() => {
    console.log("UserId: ", userID)
    console.log("UserDetails: ", userDetails)
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    const clicked = userID !== undefined ? listRef.current[userID] : null
    const clickHandler : { (e: MouseEvent): void } = (e: MouseEvent) => {
      if ((clicked != undefined || null) && (!clicked.contains(e.target))) {
        clicked.className = "displayNone";
      }
    }
    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }

  }, [userID, userDetails])

  //Memoizing the data sent to the table.
  
  const tableColumns = useMemo<Column[]>(() => [
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
    {
      Header: "STATUS",
      accessor: "status"
    },
  ], []);

  //Adding the viewDetails column to the table

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push( (columns: any) => [
      ...columns,
      {
        id: "details",
        Cell: ({row}: any) => (
          <div onClick={() => handleDetails(row)} className='detailsBtn'>
            <img src={icons.details} alt="details" />
            <div ref={ (node) => {listRef.current[row.id] = node}} className={"displayNone " + "row" + row.id}>
              <Link className="actions" to="/user-details" ><img src={icons.eye} alt="eye" /><p>View Details</p></Link>
              <div className="actions"><img src={icons.blacklist} alt="blacklist" /><p>Blacklist User</p></div>
              <div className="actions"><img src={icons.activeUser} alt="" /><p>Activate User</p></div>
            </div>
          </div>
        )
      }
    ])
  }

  const tableInstance = useTable(
    {columns: tableColumns, data: tableData},
    tableHooks,
    usePagination,
    );

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    setPageSize,
    gotoPage,
    prepareRow,
    state  
  } = tableInstance;

  const { pageIndex, pageSize } = state
  
  return (
    <div className='filter_container' >
      <div className='table_wrapper'>
        <Filter filterRef={filterRef} open={open}/>
        <table className='dashboard_usersTable' {...getTableProps()}>
        <thead className='tableHeadGroup'>
          {headerGroups.map( headerGroup => (
            <tr className='tableHeadRow' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map( (column, index) => (
                <th className={'tableHeadCells ' + "column" + index} {...column.getHeaderProps()}>
                  <span>{column.render('Header')} 
                    <img onClick={() => setOpen(!open)} className={"headerIcon" + index} src={icons.filter} alt="filter" />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='tableBody' {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            
            return (
              <tr className='tableRow' {...row.getRowProps()} >
                {row.cells.map((cell, index) => {
                  return (
                    <td className={ "column" + index + ' tableCell ' + ( index = 5 ? cell.value : "")} {...cell.getCellProps()}>
                      <span>{cell.render('Cell')}</span>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
        {/*Sending the following props to the table navigation component.*/}
        <DashboardTableNav 
        prev={previousPage} 
        next={nextPage} 
        canPrev={canPreviousPage} 
        canNext={canNextPage} 
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={setPageSize}
        rows={rows}
        />
      </div>
    </div>
  )
}

export default DashboardUsersTable;