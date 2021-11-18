import { advertsReducer } from "./advertsReducer";
import { usersReducer, userLogin } from "./usersReducer";
import { combineReducers } from "redux";

export default combineReducers({
    users: usersReducer,
    loggedUser: userLogin,
    adverts: advertsReducer
})