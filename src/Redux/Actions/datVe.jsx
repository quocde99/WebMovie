import {createAction} from "./index";
import * as ActionType from "../Types/type";
export const addDanhSachVe = (itemVe)=>{
    return (dispatch)=>{
       dispatch(createAction(ActionType.ADD_DANH_SACH_VE,itemVe))
    }
 }
 export const xoaDanhSachVe = (item) =>{
    return (dispatch)=>{
       dispatch(createAction(ActionType.XOA_DANH_SACH_VE,item))
    }
 }