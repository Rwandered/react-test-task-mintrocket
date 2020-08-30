import React from "react";
import {fetchUsers} from "../../redux/actions/actionCreators";
import cn from 'classnames'
import { usePagination } from "../../hooks/usePagination";


const Pagination = () => {
  const { changePage, count, switchPage, currentPage, dispatch } = usePagination()

  const switchNextPageHandle = () => {
    switchPage(true) && dispatch( fetchUsers() )
  }
  const switchPrevPageHandle = () => {
    switchPage(false) &&  dispatch( fetchUsers() )
  }

  const changeCurrentPage = (event) => {
    changePage(event.target.textContent)
    dispatch( fetchUsers() )
  }

  if(count.length === 1) {
    return null
  }

  return (
    <ul className="pagination">
      <li
        className="waves-effect"
        onClick={ switchPrevPageHandle }
        // eslint-disable-next-line
      ><a><span className="material-icons">Prev page</span></a></li>
      {
        count.map( (e,index) => (
          <li
            className={
              // eslint-disable-next-line
              cn("waves-effect", { ['active']: currentPage === e } )
            }
            key={index}
            onClick={ changeCurrentPage }
            // eslint-disable-next-line
          ><a>{ e }</a></li>
        ))
      }
      <li
        className="waves-effect"
        onClick={ switchNextPageHandle }
        // eslint-disable-next-line
      ><a><span className="material-icons">Next page</span></a></li>
    </ul>
  )
}

export default Pagination