import { SHOW_MODAL, HIDE_MODAL } from "./types";
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
