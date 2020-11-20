import React,{useState,useEffect} from 'react'
import ava from "../../../Assets/Img/avatar.png"
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import logo from "../../../Assets/Img/web-logo.png"
import Login from "../LoginModal/index"
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {createAction} from "../../../Redux/Actions/index"
import {FETCH_CREDENTIALS} from "../../../Redux/Types/type";

export default function HeaderClient() {
    const [smShow,setsmShow] = useState(false);
    const dispatch = useDispatch();
    const creadential = useSelector(state => state.UserReducer.cretidentals);
    const [cre,setCre] = useState(creadential);
    useEffect(() => {
        setsmShow(false)
    }, [cre])
    return (
        <>
        <Navbar id="header" className="header" expand="lg" >
            <Navbar.Brand className="header__brand">
                <Link to="/">
                <img src={logo}/>
                QuDez Movie
                </Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="header__opption">
                    <Nav className="header__nav">
                        <Nav.Link className="header__link">Lịch chiếu</Nav.Link>
                        <Nav.Link className="header__link">Tin tức</Nav.Link>
                        {
                            creadential ? <Nav.Link className="header__link">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <img className="avatar" src={ava} />
                                    {creadential.taiKhoan}
                                     </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item>
                                           <Link to="/">Thông tin cá nhân</Link>
                                           </Dropdown.Item>
                                           {creadential.maLoaiNguoiDung==="QuanTri"?   <Dropdown.Item>
                                           <Link to="/admin">Quản Trị</Link>
                                           </Dropdown.Item> : null}
                                        <Dropdown.Item 
                                        onClick={()=>{
                                            localStorage.removeItem("credentials"); 
                                            dispatch(createAction(FETCH_CREDENTIALS,null))
                                        }}
                                       >
                                           <Link to="/">Đăng xuất</Link>
                                           </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                                :
                                <Nav.Link className="header__link" 
                                // onClick={
                                //     () => { setsmShow(!smShow) }
                                // } 
                                
                                >
                                    
                                    <Link to="/login" >
                                        <img className="avatar" src={ava} />
                                        Đăng nhập
                                    </Link>
                            </Nav.Link>
                        }
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Login show={smShow} closePopup={setsmShow}/>
        </>
    )
}
