import React from 'react'
import { Card } from "react-bootstrap"
import start from "../../../Assets/Img/star1.png"
import halfstart from "../../../Assets/Img/star1.2.png"
import play from "../../../Assets/Img/play-video.png"
import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'

export default function Movie(props) {
    const [trailer,setTrailer]=useState(false);
    const {item}= props;
    const renderStar = (star)=>{
        if(start!=null){
            let render=[];
        for(let i =0 ;i<star - 1  ;i=i+2)
        {
            render.push(<img src={start} />)
        }
        if(star%2==1)
        {
            render.push(<img src={halfstart} />)
        }
        return render.map((item)=>{
            return item;
        })
        }
    }
    const youtube_parser=(url)=>{
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }
    const handleClick=()=>{
       setTrailer(true);
    }
    return (
            <Card>
                <Card.Img style={{ height: 280 }} variant="top" src={item.hinhAnh} alt="Hình lỗi" />
            <div onClick={()=>{handleClick()}} className="movie__hover">
                <img className="btn-play" src={play} alt="play" >
                    {/* <a href="facebook.com"></a> */}
                </img>
            </div>
                <span className="avgPoint ng-scope">
                <p className="txtPoint ng-binding">{item.danhGia}</p>
                    <p className="ng-binding">
                        {/* <img src={start} /> */}
                        {renderStar(item.danhGia)}
                    </p>
                </span>

                <Card.Body>
                    <Card.Title className="movie__name">{item.tenPhim}</Card.Title>
                    <Card.Text>
                        96 phút
                            </Card.Text>
                    <Link className="btn-muave" 
                 to = {`/detail/${item.maPhim}`}
                    >Xem chi tiết</Link>
                </Card.Body>
                <ModalVideo channel='youtube' isOpen={trailer} videoId={youtube_parser(item.trailer)} onClose={() => {setTrailer(false)}}/>
            </Card>
    )
}
