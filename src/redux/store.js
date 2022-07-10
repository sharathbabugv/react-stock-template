import { createStore } from "redux";
import reducers from "./combineMyReducers";

const store = createStore(reducers);

export default store;