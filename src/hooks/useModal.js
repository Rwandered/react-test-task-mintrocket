import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../redux/actions/actionCreators";

export const useModal = () => {
  const { modal } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const isModal = modal.isModal

  const modalHandle = () => {
    if(isModal) {
      dispatch( closeModal() )
    }
  }

  return { isModal, content: modal.content , modalHandle, dispatch }
}