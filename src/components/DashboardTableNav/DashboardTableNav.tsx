import './DashboardTableNav.scss'
import { icons } from '../../constants'



const DashboardTableNav = ({prev, next, canPrev, canNext, pageIndex, 
  pageOptions, gotoPage, pageCount, pageSize, setPageSize, state} : any) => {
  return (
    <div className="dashboard_tableNav">
      <div className="tableNav_left">
        <p>Showing</p>
        <select value="10" name="pageSize" id=""
          onChange={e => setPageSize(Number(e.target.value))} > 
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
        </select>
        <span>out of {pageCount-1}</span>
      </div>
      <div className="tableNav_right">
        <button onClick={()=>prev()} disabled={!canPrev} >
          <img src={icons.prev} alt="previous" />
        </button>
        <p className="currentPage">{pageIndex+1}</p>
        <p onClick={gotoPage(pageIndex+2)}>{pageIndex+2}</p>
        <p onClick={gotoPage(pageIndex+3)}>{pageIndex+3}</p>
        <p>...</p>
        <p 
          onClick={gotoPage(pageIndex+15) ?? 
          gotoPage((pageIndex+15 < pageCount-15) ? 
          pageIndex+15 : pageCount-2)}>
          { (pageIndex+15 < pageCount-15) ? pageIndex+15 : pageCount-2 }
        </p>
        <p 
          onClick={gotoPage(pageIndex+16) ?? 
          gotoPage((pageIndex+16 < pageCount-16) ? 
          pageIndex+16 : pageCount-1)} >
          { (pageIndex+16 < pageCount-16) ? pageIndex+16 : pageCount-1 }
        </p>
        <button onClick={()=>next()} disabled={!canNext} >
          <img src={icons.next} alt="next" />
        </button>
      </div>
    </div>
  )
}

export default DashboardTableNav