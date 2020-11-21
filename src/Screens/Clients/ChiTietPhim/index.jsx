import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import * as Action from "../../../Redux/Actions/movie";
import { Ring } from 'react-spinners-css';
export default function ChiTietPhim(props) {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.ListMovie.movieDetail)
    const loadding = useSelector(state => state.ListMovie.loaddingDetail)
    useEffect(() => {
        dispatch(Action.loadingDetail())
        dispatch(Action.getMovieDetail(props.match.params.movieId))
    }, [])
    if(loadding){
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
            <section className="detail">
                <div className="detail__bg" />
                <div className="container flip-horizontal-bottom">
                    <div className="row">
                        <div className="col-12 col-lg-3 detail__img">
                            <img src={detail.hinhAnh} alt="Lỗi" />
                        </div>
                        <div className="col-12 col-lg-9 detail__content">
                            <p>19.06.2020</p>
                            <h5>{detail.tenPhim}</h5>
                            <p>100 phút - 0 IMDb - 2D/Digital</p>
                            <p>{detail.moTa}</p>
                            <button className="btn__muave">Mua Vé</button>
                        </div>
                        {/* đánh giá  */}
                        <div className="col-sm-2 circleStar ng-scope" ng-if="filmDetail.avg_point > 0">
                            <div className="circleSum">
                            </div>
                            <div id="circlePercent" className="c100 p91">
                                <div className="circleBorder">
                                </div>
                                <span className="ng-binding" style={{ color: '#ffffff' }}>9.1</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                </div>
                <div className="bg__2" />
                <div className="container detail__content2">
                    <div className="row">
                        <nav className="col-sm-12 block movie__center p-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#lichchieu" role="tab" aria-controls="nav-home" aria-selected="true">Lịch chiếu</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#thongtin" role="tab" aria-controls="nav-profile" aria-selected="false">Thông tin</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#danhgia" role="tab" aria-controls="nav-profile" aria-selected="false">Đánh giá</a>
                            </div>
                        </nav>
                        {/* danh sách nhà chiếu phim  */}
                        {/* <div className="nav col-4 flex-column nav-pills calender__rap" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#cgv" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <img src="./img/ee621ee05dcd4565caead4f29421b41e.png" alt />
                                <div className="clender__text">
                                    <h3>CGV</h3>
                                    <p>x3 vé có CGV 79k/vé</p>
                                </div>
                            </a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#bhd" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                <img src="./img/f32670fd0eb083c9c4c804f0f3a252ed.png" alt />
                                <div className="clender__text">
                                    <h3>BHD Start </h3>
                                    <p>x3 vé có CGV 79k/vé</p>
                                </div>
                            </a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#bhd" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                <img src="./img/e520781386bd5436e94d6e15e193a005.png" alt />
                                <div className="clender__text">
                                    <h3>BHD Start </h3>
                                    <p>x3 vé có CGV 79k/vé</p>
                                </div>
                            </a>
                        </div> */}
                        {/* <div className="col-8 detail__calender">
                            <div className="calender__lich d-flex">
                                <a href="#" className="active">
                                    <p>Thứ 2</p>
                                    <p>29</p>
                                </a>
                                <a href="#">
                                    <p>Thứ 3</p>
                                    <p>30</p>
                                </a>
                                <a href="#">
                                    <p>Thứ 4</p>
                                    <p>1</p>
                                </a>
                                <a href="#">
                                    <p>Thứ 5</p>
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <p>Thứ 6</p>
                                    <p>3</p>
                                </a>
                                <a href="#">
                                    <p>Thứ 7</p>
                                    <p>4</p>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
    
        )
    }
}
