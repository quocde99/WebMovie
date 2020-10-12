import {createAction} from "./index";
import * as ActionType from "../Types/type";
import {rapService} from "../../Service/index"
// lấy danh sách hệ thống rạp
export const getHeThongRap = ()=>{
    return (dispatch)=>{
        rapService
        .getHeThongRap()
        .then(
           (result)=>{
               dispatch(createAction(ActionType.GET_HE_THONG_RAP,result.data))
           } 
        )
        .catch((err)=>{
            console.log(err);
        })
    }
}
export const getLayThongTinCumRapTheoHeThong = (tenHeThongRap)=>{
    return (dispatch)=>{
        rapService
        .getLayThongTinCumRapTheoHeThong(tenHeThongRap)
        .then((result)=>{
             dispatch(createAction(ActionType.GET_THONG_TIN_CUM_RAP_THEO_HE_THONG,result.data))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
export const getLayThongTinLichChieuHeThongRap = (maRap)=>{
    return (dispatch)=>{
        rapService.getLayThongTinLichChieuHeThongRap(maRap)  
        .then((result)=>{
            dispatch(createAction(ActionType.GET_Lay_Thong_Tin_Lich_Chieu_He_Thong_Rap,result.data))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
