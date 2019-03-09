import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL
} from "../actions/types";

const initialState = {
  show: false,
  showEdit: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: action.payload
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: action.payload
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        showEdit: action.payload
      };
    case HIDE_EDIT_MODAL:
      return {
        ...state,
        showEdit: action.payload
      };
    default:
      return state;
  }
}
