import { combineReducers } from "redux";
import userLoggedInReducer from "./loggedInReducer";
import onClickReducers from "./onClickReducers";

const reducers = combineReducers({
    isUserLoggedIn : userLoggedInReducer,
    sortOrder: onClickReducers
})
export default reducers;