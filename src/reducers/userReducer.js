import {
  FETCH_USERS,
  NEW_USER,
  EDIT_USER,
  DELETE_USER
} from "../actions/types";

const initialState = {
  userList: []
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
        userList: [...state.userList, action.payload]
      };
    case EDIT_USER:
      let newList = state.userList.map(user => {
        if (user.id === action.id) {
          return Object.assign({}, user, action.payload);
        } else {
          return user;
        }
      });
      //console.log(newList);
      return {
        ...state,
        userList: newList
      };
    case DELETE_USER:
      let updatedList = state.userList.filter(user => user.id !== action.id);
      console.log(updatedList);
      return {
        ...state,
        userList: updatedList
      };
    default:
      return state;
  }
}
