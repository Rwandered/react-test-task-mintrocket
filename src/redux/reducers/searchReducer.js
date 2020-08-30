import {RESET_SEARCH, SWITCH_SEARCH} from "../actions/actionType";

const initState = {
  search: {
    isSearch: false,
    searchString: ''
  }
}

const searchReducer = (state = initState, { type, payload } ) => {
  switch (type) {
    case SWITCH_SEARCH:
      return {...state, search: {...state.search, isSearch: !state.isSearch, searchString: payload } }
    case RESET_SEARCH:
      return {...initState}
    default:
      return state
  }
}

export default searchReducer