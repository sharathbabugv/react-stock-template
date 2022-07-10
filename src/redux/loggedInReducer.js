import { ActionTypes } from "./actionTypes";

const initialState = {
  isUserLoggedIn: localStorage.getItem("session-key") !== null ? true : false,
};

const userLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGGED_IN:
      return { ...state, isUserLoggedIn: true };
    case ActionTypes.USER_LOGGED_OUT:
      return { ...state, isUserLoggedIn: false };
    default:
      return state;
  }
};

export default userLoggedInReducer;
