import React from 'react'
import HeaderClient from "../Header/index"
import CarouselClient from '../Carousel/index'
import ListMovie from '../ListMovie'
import RapPhim from '../RapPhim'
import FooterClinet from '../Footer'
import { BackTop } from 'antd';
import {UpOutlined} from "@ant-design/icons"


export default function HomeClient() {
    // set lại state khi đăng nhập thành công
    // const [credentials,setCredentials] = useState("");
    // useEffect(() => {
    //     setCredentials(localStorage.getItem("credentials"))
    // }, [credentials])
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#FA5238',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };
    return (
        <>
         <HeaderClient/>
         <CarouselClient/>
         <ListMovie/>
         <RapPhim/>
         <FooterClinet/>
         <BackTop>
         <div style={style}>
            <UpOutlined/>
         </div>
         </BackTop>
        </>
    )
}
