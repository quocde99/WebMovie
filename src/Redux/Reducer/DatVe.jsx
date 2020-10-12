import * as Type from "../Types/type"
let init = {
    danhSachVe:[],
}
const DatVeReducer = (state= init,action)=>{
    switch (action.type) {
        case Type.ADD_DANH_SACH_VE:
                console.log("cc",action.data);
                // const itemVe = action.data;
                // const tempArr = [...state.danhSachVe,itemVe]
               // const temp = state.danhSachVe.push(action.data)
                return { ...state,danhSachVe:state.danhSachVe.concat(action.data)}//,danhSachVe:tempArr}
        case Type.XOA_DANH_SACH_VE:
            const index = state.danhSachVe.findIndex(p=>p.maGhe == action.maGhe)
            const dssp = [...state.danhSachVe]
            dssp.splice(index,1)
            return {...state,danhSachVe:dssp}
        default:
            return {...state};
    }
}
export default DatVeReducer;