import React,{useEffect, useState} from 'react'
import ava from "../../../Assets/Img/avatar.png"
import screen from "../../../Assets/Img/screen.png"
import popcorn from "../../../Assets/Img/popcorn.png"
import {useDispatch,useSelector} from "react-redux";
import {getLichChieu,loaddingThongTinLichChieu} from "../../../Redux/Actions/user"
import { Ring } from 'react-spinners-css';
import ButtonGhe from "./buttonGhe"
import ButtonDatVe from './buttonDatVe';

export default function DatGhe(props) {
  const thongTinLich = useSelector(state => state.UserReducer.thongTinLichChieu)
  const loadingThongtin = useSelector(state => state.UserReducer.loaddingThongTinLichChieu)
  // lấy danh sách ghế
  const danhSachVe = useSelector(state =>state.DatVeReducer.danhSachVe)
  //console.log(danhSachVe);
  const userName = JSON.parse(localStorage.getItem("credentials"));
  const dispatch = useDispatch();
  const idLichChieu = props.match.params.idLichChieu;
  const [tien,setTien] = useState(0)
  useEffect(() => {
    dispatch(loaddingThongTinLichChieu())
    dispatch(getLichChieu(props.match.params.idLichChieu))
  }, [])
  const renderGhe = ()=>{
    return thongTinLich.danhSachGhe.map((item,index)=>{
    return <ButtonGhe  key={index}  setTien={setTien} item = {item} tien={tien}/>
    })
  }
  if(loadingThongtin){
    return <section className="movie">
      <div className="container">
        <div className="row">
          <Ring className="circle" color="#fa5238" />
        </div>
      </div>
    </section>
  }
  else{
    return (
      <section className="checkout">
<div className="container-fuild">
  <div className="row">
    <div className="col-sm-8">
      <div className="checkout__header d-flex">
        <div className="checkout__text d-flex">
          <p 
          //className={` ${danhSachVe.length = 0 ? "active" : ""}`}
          >01 CHỌN GHẾ </p>
          <p
           //className={`ml-5 ${danhSachVe.length > 0 ? "active" : ""}`}
           >02 THANH TOÁN</p>
        </div>  
        <div className="checkout__avt">
          <img className="avatar" src={ava} alt="avt" />
          <a>{userName.hoTen}</a>
        </div>
      </div>
      <div className="checkout__seat d-flex">
        <div className="lefttitle d-flex">
          <div className="logocinema">
            <img className="logo" ng-src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" />
          </div>
          <div className="contentcinema">
            <p className="address">
  <span className="pcinema ng-binding" style={{color: '#9C9C9C'}}>{thongTinLich.thongTinPhim.tenCumRap}</span>
            </p>
            <p className="hour ng-binding">{thongTinLich.thongTinPhim.gioChieu} - {thongTinLich.thongTinPhim.tenRap}</p>
          </div>
        </div>
        <div className="righttitle">
          <p className="info1">thời gian giữ ghế</p>
          <p className="info2">
            <span className="minute">04</span>:<span className="second">38</span>
          </p>
        </div>
      </div>
      <div className="namescreen">
        <img className="logo" src={screen} />
      </div>
      <div className="checkout__location">
       
      
        {/* dãy  */}
                <div className="checkout__row">
                  <div className="col-md-12">
                    {renderGhe()}
                  </div>
                </div>
        {/* hết dãy */}
        <div className="typeseat d-flex">
          <div className="type">
            <div className="s-img icon-s-type-single color__thuong" />
            <span>Thường</span>
          </div>
          <div className="type">
            <div className="s-img icon-s-type-single color__vip" />
            <span>Vip</span>
          </div>
          <div className="type">
            <div className="s-img icon-s-type-single color__choose" />
            <span>Ghế đang chọn</span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 checkout__datve">
      <div className="checkout__price">
        <p>{tien} Đ</p>
      </div>
      <div className="checkout__info">
      <p>{thongTinLich.thongTinPhim.tenPhim}</p>
    <p>{thongTinLich.thongTinPhim.tenCumRap}</p>
      <p>{thongTinLich.thongTinPhim.ngayChieu}-{thongTinLich.thongTinPhim.gioChieu}-{thongTinLich.thongTinPhim.tenRap}</p>
      </div>
      <div className="checkout__ghe">
        <p>Ghế</p>
        <p>{tien} Đồng</p>
      </div>
      <div className="checkout__ghe">
        <div className="popcorn">
          <img src={popcorn} alt="popcorn" />
          <p>Chọn combo</p>
        </div>
        <p>0 đ</p>
      </div>
      <div className="checkout__form">
        <input type="text"  placeholder="Email" />
        <br />
        <input type="text"  placeholder="Phone" />
        <br />
        <p>Mã giảm giá </p>
        <div className="checkout__giamgia">
          <input type="text" placeholder="Nhập tại đây.." />
          <button>Áp dụng</button>
        </div>
      </div>
      <ButtonDatVe idLichChieu={idLichChieu} userName={userName} danhSachVe={danhSachVe} />
    </div>
  </div>
</div>
</section>)}
}
