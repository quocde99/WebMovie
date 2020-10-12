import React from 'react'
import HeaderClient from "../Header/index"
import CarouselClient from '../Carousel/index'
import ListMovie from '../ListMovie'
import RapPhim from '../RapPhim'
import FooterClinet from '../Footer'





export default function HomeClient() {
    // set lại state khi đăng nhập thành công
    // const [credentials,setCredentials] = useState("");
    // useEffect(() => {
    //     setCredentials(localStorage.getItem("credentials"))
    // }, [credentials])
    return (
        <>
         <HeaderClient/>
         <CarouselClient/>
         <ListMovie/>
         <RapPhim/>
         <FooterClinet/>
        </>
    )
}
