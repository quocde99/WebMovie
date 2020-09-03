import {combineReducers} from "redux";
import ListUser from "./ListUser"
import userDetail from "./userDetail"
const rootReducer = combineReducers({
    ListUser,
    userDetail
})
export default rootReducer;