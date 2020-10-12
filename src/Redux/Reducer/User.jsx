import * as Type from "../Types/type"
let init = {
    // thông tin đăng nhập
    cretidentals:null,
    error: false,
    thongTinLichChieu:null,
    loaddingThongTinLichChieu:true,
    //danhSachVe:[],
}
const UserReducer = (state= init,action)=>{
    switch (action.type) {
        case Type.FETCH_CREDENTIALS:
            state.cretidentals = action.data
            return {...state,error:false}
        case Type.EROR_FETCH_CREDENTIALS:
            state.error= true;
            return{...state}
        case Type.SIGN_UP:
            state.cretidentals = action.data
            return {...state}
        case Type.LOADING_GET_THONG_TIN_LICH_CHIEU:
            return {...state,loaddingThongTinLichChieu:true}
        case Type.GET_LICH_CHIEU :
            state.thongTinLichChieu= action.data
            return {...state,loaddingThongTinLichChieu:false}
        // case Type.ADD_DANH_SACH_VE:
        //     {
        //         const itemVe = action.data;
        //         const tempArr = [...state.danhSachVe,itemVe]
        //         return { ...state,danhSachVe:tempArr}
        //     }
        // case Type.XOA_DANH_SACH_VE:
        //     const index = state.danhSachVe.findIndex(p=>p.maGhe == action.maGhe)
        //     const dssp = [...state.danhSachVe]
        //     dssp.splice(index,1)
        //     return {...state,danhSachVe:dssp}
        default:
            return {...state};
    }
}
export default UserReducer;