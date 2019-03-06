import { FETCH_USERS, NEW_USER } from "./types";
export function fetchUsers() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        dispatch({
          type: FETCH_USERS,
          payload: users
        })
      );
  };
}
export function addUser(postData) {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: postData,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user =>
        dispatch({
          type: NEW_USER,
          payload: user
        })
      );
  };
}
