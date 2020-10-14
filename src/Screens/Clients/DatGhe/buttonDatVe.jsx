import React,{useState} from 'react';
import {datVe} from "../../../Redux/Actions/datVe"
import {useDispatch} from "react-redux"
import {datVeService} from "../../../Service/index"
import * as Type from "../../../Redux/Types/type"
import { Button, notification, Space } from 'antd';

const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
    });
  };

export default function ButtonDatVe(props) {
    const {danhSachVe,userName,idLichChieu}= props;
    const [thongBao, setThongBao] = useState(false)
    const dispatch = useDispatch();
    if(danhSachVe.length===0)
    {
        return <button
       className="btn-datve" disabled={true}>Đặt vé</button>
    }
    return (
        <>
        <button 
        onClick={()=>{
            const object = {
                "maLichChieu":Number(idLichChieu),
                "danhSachVe" : danhSachVe,
                "taiKhoanNguoiDung" : userName.taiKhoan
            }
            datVeService.DatVe(object).then((result)=>{
                console.log(result);
                dispatch(datVe(Type.DAT_VE))
            })
            .catch((err)=>{
                console.log(err);
            })
        }}
        className={`btn-datve ${danhSachVe.length > 0 ? "btn-datve-active" : ""}`}>Đặt vé</button>

        </>
    )
}
