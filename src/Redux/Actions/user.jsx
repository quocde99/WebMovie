import {createAction} from "./index";
import * as ActionType from "../Types/type";
import {userService} from "../../Service/index"


// async action 
// lấy danh sách user
 export const fetchUser = ()=>{
    return (dispatch)=>{
         userService
         .fetchUser()
         .then((result)=>{
            dispatch(createAction(ActionType.GET_USER,result.data))
         })
        .catch((error)=>{
           dispatch(createAction(ActionType.GET_USER_ERROR))
        })
    }
 }
 // tìm kiếm 
 export const searchUser = (userName)=>{
    return (dispatch)=>{
       userService
       .searchUser(userName)
      .then((result)=>{
         dispatch(createAction(ActionType.SEARCH_USER,result.data))
      })
      .catch((err)=>{
         console.log(err);
      })
    }
 }
 // dispatch loading 
 export const loading = ()=>{
    return (dispatch)=>{
      dispatch({
         type:ActionType.GET_USER_REQUEST
      })
    }
 }

 // lấy thông tin người dùng
 export const getDetailUser = (userName)=>{
    return (dispatch)=>{
       userService.getUserDetail(userName).then((result)=>{
            //console.log(result.data);
            dispatch(createAction(ActionType.GET_USER_DETAIL,result.data))
       })
       .catch((err)=>{
          console.log(err);
       })
    }
 }