import { advertsReducer } from "./advertsReducer";
import { usersReducer } from "./usersReducer";
import { combineReducers } from "redux";

export default combineReducers({
    users: usersReducer,
    adverts: advertsReducer
})