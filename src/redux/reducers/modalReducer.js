import {CLOSE_MODAL, SET_MODAL} from "../actions/actionType";

const initState = {
  modal: {
    isModal: false,
    content: {
      title: 'Create user',
      first_name: '',
      last_name: '',
      email: '',
      isEdit: false,
    }
  }
}

const modalReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case SET_MODAL:
      return  {
        ...state,
        modal: {
          ...state.modal,
          isModal: true,
          content: payload || state.modal.content
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isModal: false,
          content: {
            title: 'Create new user',
            first_name: '',
            last_name: '',
            email: '',
            isEdit: false,
          }
        }
      }
    default:
      return state
  }
}

export default modalReducer