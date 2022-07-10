import { ActionTypes } from "./actionTypes"

export const userLoggedIn = () => {
    return {
        type : ActionTypes.USER_LOGGED_IN
    }
}

export const userLoggedOut = () => {
    return {
        type : ActionTypes.USER_LOGGED_OUT
    }
}

export const userClickedDescending = () => {
    return {
        type : ActionTypes.DESCENDING_SORT
    }
}

export const userClickedAscending = () => {
    return {
        type : ActionTypes.ASCENDING_SORT
    }
}
