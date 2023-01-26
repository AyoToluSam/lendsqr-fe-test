import './DashboardTableNav.scss'
import { icons } from '../../constants'



const DashboardTableNav = ({prev, next, canPrev, canNext, pageIndex, 
  pageOptions, gotoPage, pageCount, pageSize, setPageSize, rows} : any) => {
  return (
    <div className="dashboard_tableNav">
      <div className="tableNav_left">
        <p>Showing</p>
        <select defaultValue={pageSize} name="pageSize" id=""> 
          <option value="100" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>100</option>
          <option value="50" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>50</option>
          <option value="20" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>20</option>
          <option value="10" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>10</option>
        </select>
        <span>out of {rows.length}</span>
      </div>
      <div className="tableNav_right">
        <button onClick={()=>prev()} disabled={!canPrev} >
          <img src={icons.prev} alt="previous" />
        </button>
        <p className="currentPage">{(pageIndex+1 < pageCount-3) ? pageIndex+1 : pageCount-4}</p>
        <p className='pages' onClick={ () => gotoPage(pageIndex+2)}>{(pageIndex+2 < pageCount-2) ? pageIndex+2 : pageCount-3}</p>
        <p className='pages' onClick={ () => gotoPage(pageIndex+3)}>{ (pageIndex+3 < pageCount-1) ? pageIndex+3 : pageCount-2}</p>
        <p className='pages'>...</p>
        <p className='pages' onClick={ () => gotoPage(pageCount-1)}>
          {pageCount-1}
        </p>
        <p className='pages' onClick={ () => gotoPage(pageCount)}>
          {pageCount}
        </p>
        <button onClick={()=>next()} disabled={!canNext} >
          <img src={icons.next} alt="next" />
        </button>
      </div>
    </div>
  )
}

export default DashboardTableNav