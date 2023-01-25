import './DashboardUsersTable.scss'
import { useMemo, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import { icons } from '../../constants';
import DashboardTableNav from '../DashboardTableNav/DashboardTableNav';


const DashboardUsersTable = ({tableData}: any) => {

  const Filter = () => {

    return (
      <div className='dashboard_fliter'>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="organization">Organization</label>
          <select className='filter_select' name="organization" placeholder='Select' id=""></select>
        </div>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="username">Username</label>
          <input className='filter_select' name='username' placeholder='user' type="text" />
        </div>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="email" >Email</label>
          <input className='filter_select' name='email' placeholder='email' type="text" />
        </div>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="date">Date</label>
          <div>
          <input className='filter_select' name='date' placeholder='date' type="text" />
          <img src={icons.calendar} alt="calendar" />
          </div>
        </div>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="phoneNumber">Phone Number</label>
          <input className='filter_select' name='phoneNumber' placeholder='Phone Number' type="text" />
        </div>
        <div className='filter_options'>
          <label className='filter_label' htmlFor="status">Status</label>
          <select className='filter_select' name="status" placeholder='Select' id=""></select>
        </div>
        <div className='filter_buttons'>
          <button className='btn1'>Reset</button>
          <button className='btn2'>Filter</button>
        </div>
      </div>
    )
  }

  const listRef = useRef<any>([]);

  const [userID, setUserID] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();

  const handleClick = (event: any, row: any) => {

    const clicked = listRef.current[row.id]
    clicked.className = "viewDetails";
    
    setUserID(Number(row.id))

    setUserDetails(row.original)
  }

  useEffect(() => {
    window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    document.addEventListener("mousedown", () => {
      const clicked = listRef.current[userID]
      if (clicked != undefined || null) {
        clicked.className = "displayNone";
      }
    })

  }, [userID])
  
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

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push( (columns: any) => [
      ...columns,
      {
        id: "details",
        Cell: ({row}: any) => (
          <div onClick={(event) => handleClick(event, row)} className='detailsBtn'>
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
                    <img className={"headerIcon" + index} src={icons.filter} alt="filter" />
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
        state={state}
        />
      </div>
    </div>
  )
}

export default DashboardUsersTable;