import React from 'react'
import slide1 from "../../../Assets/Img/midway-15913272858873.png"
import slide2 from "../../../Assets/Img/quan-tien-15911726946978.png"
import slide3 from "../../../Assets/Img/nao-tom-15913296931390.jpg"
import slide4 from "../../../Assets/Img/dao-tau-giac-mo-15913270301812.png"
import play from "../../../Assets/Img/play-video.png"
import { Carousel } from 'react-bootstrap'
export default function CarouselClient() {
    return (
        <Carousel className="myCarousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <img className="btn-play" src={play} alt /> */}
        </Carousel>

    )
}
