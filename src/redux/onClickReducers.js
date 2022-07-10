import { ActionTypes } from "./actionTypes";

const initialState = {
    sortOrder : 0
}

const onClickReducers = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.DESCENDING_SORT:
        return { ...state, sortOrder: 0 };
      case ActionTypes.ASCENDING_SORT:
        return { ...state, sortOrder: 1 };
      default:
        return state;
    }
  };

  export default onClickReducers;