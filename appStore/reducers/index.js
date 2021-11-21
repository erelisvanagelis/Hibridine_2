import advertsReducer from "./advertsReducer";
import usersReducer from "./usersReducer";
import settingsReducer from "./settingsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    users: usersReducer,
    loggedUser: usersReducer,
    adverts: advertsReducer,
    userAdverts: advertsReducer,
    autoLogin: settingsReducer,
})