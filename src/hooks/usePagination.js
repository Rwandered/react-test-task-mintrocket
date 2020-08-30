import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCountPages, setCurrentPage} from "../redux/actions/actionCreators";

export const usePagination = () => {
  
  const { page } = useSelector(state => state.pages)
  const { users } = useSelector( state => state.users)
  const dispatch = useDispatch()

  const count = []
  for (let i = 0; i < page.countPages; i++) {
    count.push(i+1)
  }

  const changePage = (pageNum) => {
    dispatch( setCurrentPage(+pageNum))
  }


  const nextPage = (currentIndex) => {
    if(currentIndex !== count.length - 1) {
      changePage(page.currentPage + 1 )
      return true
    }
    return false
  }

  const prevPage = (currentIndex) => {
    if (currentIndex !== 0) {
      changePage(page.currentPage - 1 )
      return true
    }
    return false
  }

  const switchPage = (isNext) => {
    const needElemIndex = count.findIndex( (elem) => elem === page.currentPage)
    if(isNext) {
      return nextPage(needElemIndex)
    } else {
      return prevPage(needElemIndex)
    }
  }


  const setInitPage = () => {
    if(users.users.length !== 0) {
      const countPages = Math.ceil(users.totalUsers / page.perPage)
      dispatch(setCountPages(countPages))
    }
  }

  useEffect( () => {
    setInitPage()
    // eslint-disable-next-line
  }, [page.perPage, users.totalUsers])
  
  return {
    count,
    totalUsers: users.totalUsers ,
    currentPage: page.currentPage,
    perPage: page.perPage,
    dispatch, changePage, nextPage, prevPage, setInitPage, switchPage
  }
}