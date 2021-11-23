import advertsReducer from "./advertsReducer";
import usersReducer from "./usersReducer";
import settingsReducer from "./settingsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    loggedUser: usersReducer,
    adverts: advertsReducer,
    autoLogin: settingsReducer,
})