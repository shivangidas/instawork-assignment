import { FETCH_USERS, NEW_USER } from "../actions/types";

const initialState = {
  userList: [],
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        userList: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
