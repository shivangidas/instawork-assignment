import { FETCH_USERS, NEW_USER } from "./types";
import users from "../data.json";
export function fetchUsers() {
  return function(dispatch) {
    dispatch({
      type: FETCH_USERS,
      payload: users
    });
  };
}
export function addUser(postData) {
  return function(dispatch) {
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "POST",
    //   body: postData,
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(user =>
    //     dispatch({
    //       type: NEW_USER,
    //       payload: user
    //     })
    //   );
    dispatch({
      type: NEW_USER,
      payload: postData
    });
  };
}
