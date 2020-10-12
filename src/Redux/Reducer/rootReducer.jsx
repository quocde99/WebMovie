import {combineReducers} from "redux";
import ListUser from "./ListUser"
import userDetail from "./userDetail"
import ListMovie from "./Movie"
import RapReducer from "./Rap"
import UserReducer from "./User"
import DatVeReducer from "./DatVe" 
const rootReducer = combineReducers({
    ListUser,
    userDetail,
    ListMovie,
    RapReducer,
    UserReducer,
    DatVeReducer
})
export default rootReducer;