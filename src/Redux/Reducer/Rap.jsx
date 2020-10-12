import * as ActionType from "../Types/type"

const init = {
    heThongRap : [],
    thongTinCumRapTheoHeThong:[],
    thongTinLichChieu : []
}
const RapReducer = (state = init,action)=>{
    switch(action.type){
        case ActionType.GET_HE_THONG_RAP:
            {
                state.heThongRap = action.data;
                console.log('hệ thống rạp',action.data);
                return {...state}
            }
        case ActionType.GET_THONG_TIN_CUM_RAP_THEO_HE_THONG:
            {
                state.thongTinCumRapTheoHeThong = action.data;
                return {...state}
            }
        case ActionType.GET_Lay_Thong_Tin_Lich_Chieu_He_Thong_Rap:
            {
                state.thongTinLichChieu = action.data;
                return {...state}
            }
            default:
                return {...state}
    }
}
export default RapReducer;