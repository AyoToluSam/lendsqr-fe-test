import { icons } from '../../constants'


const DashboardTableNav = ({prev, next, canPrev, canNext, pageIndex, 
  pageOptions, gotoPage, pageCount, pageSize, setPageSize, rows} : any) => {
  return (
    <div className="dashboard_tableNav">
      <div className="tableNav_left">
        <p>Showing</p>
        <div className='select_wrapper'>
          <select defaultValue={pageSize} name="pageSize" id=""> 
          <option value="100" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>100</option>
          <option value="50" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>50</option>
          <option value="20" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>20</option>
          <option value="10" onClick={e => setPageSize(Number((e.target as HTMLOptionElement).value))}>10</option>
          </select>
        </div>
        <span>out of {rows.length}</span>
      </div>
      <div className="tableNav_right">
        <button onClick={()=>prev()} disabled={!canPrev} >
          <img src={icons.prev} alt="previous" />
        </button>
        <button className="currentPage">{(pageIndex+1 < pageCount-3) ? pageIndex+1 : pageCount-4}</button>
        <button className='pages' onClick={ () => gotoPage(pageIndex+2)}>{(pageIndex+2 < pageCount-2) ? pageIndex+2 : pageCount-3}</button>
        <button className='pages' onClick={ () => gotoPage(pageIndex+3)}>{ (pageIndex+3 < pageCount-1) ? pageIndex+3 : pageCount-2}</button>
        <button className='pages'>...</button>
        <button className='pages' onClick={ () => gotoPage(pageCount-1)}>
          {pageCount-1}
        </button>
        <button className='pages' onClick={ () => gotoPage(pageCount)}>
          {pageCount}
        </button>
        <button onClick={()=>next()} disabled={!canNext} >
          <img src={icons.next} alt="next" />
        </button>
      </div>
    </div>
  )
}

export default DashboardTableNav