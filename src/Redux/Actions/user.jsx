import {createAction} from "./index";
import * as ActionType from "../Types/type";
import {userService} from "../../Service/index"
import { message } from 'antd';

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
 // dispatch loading all user
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
            dispatch(createAction(ActionType.GET_USER_DETAIL,result.data))
       })
       .catch((err)=>{
          console.log(err);
       })
    }
 }
  // dispatch loading userdetail
  export const loadingDetail = ()=>{
   return (dispatch)=>{
     dispatch({
        type:ActionType.GET_USERSDETAIL_REQUEST
     })
   }
}
// đăng nhập
export const signIn = (user)=>{
   return (dispatch)=>{
      userService.signIn(user).then((result)=>{
         dispatch(createAction(ActionType.FETCH_CREDENTIALS,result.data))
         localStorage.setItem('credentials',JSON.stringify(result.data))
         message.success('Đăng nhập thành công :)');
      })
      .catch((err)=>{
         dispatch(createAction(ActionType.EROR_FETCH_CREDENTIALS,null))
         message.error("Sai tên đăng nhập hoặc mật khẩu !")
      })
   }
}
export const signUp = (user) =>{
   return (dispatch)=>{
      userService.signUp(user).then((result)=>{
          dispatch(createAction(ActionType.SIGN_UP,result.data))
          localStorage.setItem('credentials',JSON.stringify(result.data))
      })
      .catch((err)=>{
         console.log(err);
      })
   }
}
// xem chi tiets lịch chiếu checkout
export const getLichChieu = (id) =>{
   return (dispatch)=>{
      userService.getLichChieu(id).then((result)=>{
         dispatch(createAction(ActionType.GET_LICH_CHIEU,result.data))
      })
      .catch((err)=>{
         console.log(err);
      })
   }
}
export const loaddingThongTinLichChieu = ()=>{
   return (dispatch)=>{
     dispatch({
        type:ActionType.LOADING_GET_THONG_TIN_LICH_CHIEU
     })
   }
}