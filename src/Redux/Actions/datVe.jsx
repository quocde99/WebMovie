import {createAction} from "./index";
import * as ActionType from "../Types/type";
import { message } from 'antd';


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
 //  đặt vé
 export const datVe =()=>{
    return (dispatch)=>{
      (dispatch(createAction(ActionType.DAT_VE)))
      message.success('Đặt vé thành công :)');
    }
 }