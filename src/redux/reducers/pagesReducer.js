import {SET_COUNT_PAGES, SET_CURRENT_PAGE, SET_PER_PAGE} from "../actions/actionType";

const initState = {
  page: {
    currentPage: 1, //выбранная страница
    perPage: 6, // число элементов на странице - задается select
    countPages: 1 // высчитывается на основании полученных данных об общем количестве пользвоателей в базе
  }
}

const pagesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: {...state.page, currentPage: payload }
      }
    case SET_PER_PAGE:
      return {
        ...state,
        page: {...state.page, perPage: payload, currentPage: initState.page.currentPage }
      }
    case SET_COUNT_PAGES:
      return {...state, page: {...state.page, countPages: payload }}
    default:
      return state
  }
}

export default pagesReducer
