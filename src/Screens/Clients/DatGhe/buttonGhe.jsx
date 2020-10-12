import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import {addDanhSachVe, xoaDanhSachVe} from "../../../Redux/Actions/datVe"
export default function ButtonGhe(props) {
    const {item,tien,setTien} = props;
    const [chon,setChon] = useState(false);
    const dispatch = useDispatch();
    if(item.loaiGhe === "Vip")
    {
      return  <button 
        disabled={item.daDat} 
        onClick={()=>{
            setChon(!chon)
            if(!chon){
                const ghe = {"maGhe":item.maGhe,"giaVe":item.giaVe}
                dispatch(addDanhSachVe(ghe))
                setTien(tien+item.giaVe)
            }
            else{
                setTien(tien-item.giaVe)
                dispatch(xoaDanhSachVe(item.maGhe))
            }
        }}
        className={`btn ghe gheVip ${chon ? 'gheDangDat' : ''}`  }
       >{item.stt}</button>
    }
    else {
        return  <button 
            onClick={()=>{
                setChon(!chon)
                if(!chon){
                    const ghe = {"maGhe":item.maGhe,"giaVe":item.giaVe}
                    dispatch(addDanhSachVe(ghe))
                    setTien(tien+item.giaVe)
                }
                else{
                    setTien(tien-item.giaVe)
                    dispatch(xoaDanhSachVe(item.maGhe))
                }
            }}
           className={`btn ghe ${chon ? 'gheDangDat' : ''}` }
           disabled={item.daDat}>{item.stt}</button>
    }
}

