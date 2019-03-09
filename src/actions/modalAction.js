import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL
} from "./types";
export function showModal() {
  return function(dispatch) {
    dispatch({
      type: SHOW_MODAL,
      payload: true
    });
  };
}
export function hideModal() {
  return function(dispatch) {
    dispatch({
      type: HIDE_MODAL,
      payload: false
    });
  };
}
export function showEditModal() {
  return function(dispatch) {
    dispatch({
      type: SHOW_EDIT_MODAL,
      payload: true
    });
  };
}
export function hideEditModal() {
  return function(dispatch) {
    dispatch({
      type: HIDE_EDIT_MODAL,
      payload: false
    });
  };
}
