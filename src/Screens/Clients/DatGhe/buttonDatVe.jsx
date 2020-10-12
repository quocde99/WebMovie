import React,{useState} from 'react'
import {useSelector} from "react-redux"
export default function ButtonDatVe(props) {
    const {danhSachVe}= props;
    //console.log(danhSachVe);
    // if(danhSachVe.length===0)
    // {
    //     return <button
    //    className="btn-datve" disabled={true}>Đặt vé</button>
    // }
    return (
        <button
        className={`btn-datve ${danhSachVe.length > 0 ? "btn-datve-active" : ""}`}>Đặt vé</button>
    )
}
