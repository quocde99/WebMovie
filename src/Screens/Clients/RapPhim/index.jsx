import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import * as Action from "../../../Redux/Actions/rap";
import {Link} from "react-router-dom";
import {notification} from "antd"
const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Vui lòng đăng nhập để tiến hành đặt vé',
    //   description:
    //     '',
    });
  };
export default function RapPhim() {
    const dispatch = useDispatch();
    // lấy data từ redux 
    const listHeThongRap = useSelector(state => state.RapReducer.heThongRap);
    // hệ thống cụm rạp
    const thongTinHeThongRap = useSelector(state => state.RapReducer.thongTinCumRapTheoHeThong)
    const thongTinLichChieu = useSelector(state =>state.RapReducer.thongTinLichChieu)
    const [stateMaHeThongRap,setMaHeThongRap] = useState("BHDStar")
    // lấy cụm rapj
    const [stateCumRap,setCumRap] =useState("bhd-star-cineplex-bitexco")
    const renderHeThongRap = () => {
        return listHeThongRap.map((item, index) => {
            return  <a key={index} className="nav-link active"
            onClick={()=>{
                setMaHeThongRap(item.maHeThongRap)  
            }}
            >
            <img className="calender__img" key={index} src={item.logo} alt={item.biDanh} />
        </a>
        })
    }
    // cột 2
    const renderCumRapTheoHeThong=()=>{
        return thongTinHeThongRap.map((item,index)=>{
            return <div key={index}
            onClick={()=>{
                setCumRap(item.maCumRap)
            }}
            className="rap">
                <div className="card d-flex">
                    <img className="card-img-top ml-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiYf2QmN6EoeQxb8UzDp2NKRL_9jvFl_31XA&usqp=CAU" alt />
                    <div className="card-body rap__text">
                        <p className="card-title">{stateMaHeThongRap}</p>
                        <p className="card-text">{item.diaChi}</p>
                        <a>[Chi tiết]</a>
                    </div>
                </div>
            </div>
        })
    }
    //render Lịch chiếu phim 
    const renderLichChieu = (maCum)=>{
        const renderGio = (time)=>{
            return time.map((item,key)=>{
               if(item.ngayChieuGioChieu.slice(5,7)==="01" && item.ngayChieuGioChieu.slice(8,10) ==="01" )
               {
                if (localStorage.getItem("credentials") === null){
                   return <a onClick={()=>{
                    openNotificationWithIcon('warning')
                    }} key={key}  className="item__lich">{item.ngayChieuGioChieu.slice(11,16)}</a>
                }
                return <Link  to = {`/checkout/${item.maLichChieu}`} key={key}  className="item__lich">{item.ngayChieuGioChieu.slice(11,16)}</Link>
               }
               return null;
            })
        }
        let listPhim = []
        if(thongTinLichChieu.length!==0)
        {
            for(let i of thongTinLichChieu[0].lstCumRap)
            {
                if(i.maCumRap === maCum)
                {
                    listPhim = i.danhSachPhim;
                }
            }
            if(listPhim.length >0)
            {
                return listPhim.map((item,index)=>{
                    console.log("it",item);
                    return <div key={index} className="celander__items">
                    <div className="celander__img d-flex">
                        <img className="m-2" src={item.hinhAnh} alt="Err" />
                        <div className="celander__text pt-2">
                            <h5><span className="green">P</span>{item.tenPhim}</h5>
                            <p>100 phút - Tix 8.9 - IMDB 0</p>
                        </div>
                    </div>
                    <div className="listTypeTime">
                        <p className="typeFlim">2D Digital</p>
                        <div className="listTypeTime__items">
                            {renderGio(item.lstLichChieuTheoPhim)}
                        </div>
                    </div>
                </div>
                })   
            }
            return <p>Không có lịch chiếu</p>
        }
    }
    useEffect(() => {
        // call api
    function getHeThongRap(){
        dispatch(Action.getHeThongRap());
    }
    function layThongTinCumRap(){
        dispatch(Action.getLayThongTinCumRapTheoHeThong(stateMaHeThongRap))
    }
    function layThongTinLichhieu(){
        dispatch(Action.getLayThongTinLichChieuHeThongRap(stateMaHeThongRap))
    }
     getHeThongRap();
     layThongTinCumRap();
     layThongTinLichhieu();
    }, [])
    useEffect(()=>{
        function layThongTinCumRap(){
            dispatch(Action.getLayThongTinCumRapTheoHeThong(stateMaHeThongRap))
        }
        function layThongTinLichhieu(){
            dispatch(Action.getLayThongTinLichChieuHeThongRap(stateMaHeThongRap))
        }
        layThongTinCumRap()
        layThongTinLichhieu()
    },[stateMaHeThongRap])
    return (
        <section className="calender mt-5">
            <div className="container">
            <h3 className="title text-center p-3">Lịch chiếu phim</h3>
                <div className="row">
                    {/* danh sách nhà chiếu phim */}
                    <div className="nav col-md-1 col-12 flex-column nav-pills calender__rap scrollbar" id="style-1">
                        {renderHeThongRap()}
                    </div>
                    {/* end rap phim  */}
                    <div className="list__rap col-12 col-md-4 scrollbar" id="style-1">
                        {/* hiển thị tên rạp */}
                        {renderCumRapTheoHeThong()}
                        {/* end rap  */}
                    </div>
                    {/* lịch chiếu */}
                    <div className="celander__content col-12 col-md-7 scrollbar" id="style-1">
                        {/* start items */}
                        {renderLichChieu(stateCumRap)}
                        {/* end */}
                    </div>
                </div>
            </div>
        </section>

    )
}
