
import {Modal,Input} from "antd"
import { UserOutlined,PhoneOutlined,MailOutlined } from '@ant-design/icons';
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import * as Action from "../../../Redux/Actions/user"
function  RepairUser(props){
  const {taiKhoan,visable,handleOk,handleCancel} = props;
  const dataUser = useSelector(state => state.ListUser.userDetails);
  // console.log(taiKhoan);
  //call api gọi chi tiết người dùng
  const dispatch = useDispatch();
  const user = {taiKhoan:taiKhoan}
  useEffect(() => {
    dispatch(Action.getDetailUser(user))
  }, )
    return (
      <>
      <Modal
        title="Sửa thông tin người dùng"
        visible={visable}
        onOk={handleOk}
        onCancel={handleCancel}
      >
         <>
    <Input placeholder="Tài khoản" value={dataUser.taiKhoan}  disabled prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="Họ tên" value={dataUser.hoTen} prefix={<UserOutlined />} />
    <br/>
    <br/>
    <Input placeholder="Số điện thoại" value={dataUser.soDT} prefix={<PhoneOutlined />} />
    <br />
    <br />
    <Input placeholder="Email" value={dataUser.email} prefix={<MailOutlined />} />
  </>
      </Modal>
    </>
    )
}
export default RepairUser;