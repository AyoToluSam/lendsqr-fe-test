import { useMemo, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import { icons } from '../../constants';
import DashboardTableNav from '../DashboardTableNav/DashboardTableNav';


const DashboardUsersTable = ({tableData}: any) => {

  const [userID, setUserID] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const [open, setOpen] = useState(false)

  //ListRef targets column 6 of the table. It is to assign a ref to each 
  //icon, so as to target the clicked one to open the details.
  //FilterRef handles the filter pop up when the table head icons are clicked

  const listRef = useRef<any>([]);
  const filterRef = useRef<any>();

  const Filter = () => {
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

  //Handler for the viewDetails pop up. It updates the userDetails if
  //any row is clicked, using the information of that row.

  const handleDetails = (row: any) => {

    const clicked = listRef.current[row.id]
    clicked.className = "viewDetails";
    
    setUserID(Number(row.id))

    setUserDetails(row.original)
  }

  //Sending the most up to date userDetails to the users page and also
  //using effect to handle the closing of the pop up if user clicks 
  //outside of it.

  useEffect(() => {
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    const clicked = listRef.current[userID]
    const clickHandler = (e: any) => {
      if ((clicked != undefined || null) && (!clicked.contains(e.target))) {
        clicked.className = "displayNone";
      }
    }
    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }

  }, [userID])

  //Memoizing the data sent to the table.
  
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
          <div onClick={(e) => handleDetails(row)} className='detailsBtn'>
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
        <Filter />
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
                  const headers = ["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS" ]
                  return (
                    <td data-label={(headers[index] != undefined) ? headers[index] : null} className={ "column" + index + ' tableCell ' + ( index = 5 ? cell.value : "")} {...cell.getCellProps()}>
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