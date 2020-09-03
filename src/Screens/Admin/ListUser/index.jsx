import React, { useState,Component } from 'react'
import { Input, Button, Result } from "antd";
import { UserOutlined,SearchOutlined,SmileOutlined,CloseCircleOutlined   } from '@ant-design/icons';
import {connect} from "react-redux"
import * as style from "../ListUser/index.module.css";
import Pagination from "../../../Layouts/Pagination/index";
import * as Action from "../../../Redux/Actions/user"
import RepairUser from "../RepairUser/index"
import userDetail from '../../../Redux/Reducer/userDetail';
class ListUser extends Component {
  constructor(){
    super();
    this.state= {
      // trang hiện tại
        currentPage: 1,
        // số phần tử của 1 trang
        newsPerPage: 30,
        // từ tìm kiếm
        search:'',
        // sưae
        visable: false,
        //xóa
        visableDelete:false,
        // lưu tên tài khoản khi được chọn
        taiKhoan :null
    }
  }
    // change page 
    paginate =(number)=> {
        this.setState({
            currentPage: number
        })
    }
    // open modal sửa
    handleRepair(taiKhoan){
        this.setState({
          visable:true,
          taiKhoan:taiKhoan
        })
    }
    // ok của modal 
    handleOk=()=>{
      this.setState({
        visable:false
      })
    }
    handleCancel=()=>{
      this.setState({
        taiKhoan:'',
        visable:false
      })
    }
    // render danh sách
    renderUser = (list)=>{
      // đưa lên đầu
      window.scrollTo(0,0);
      //trả về danh sách người dùng
      return list.map((user,index)=>{
       return <tr key={index} >
                <td>{user.taiKhoan}</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDt}</td>
                <td style={{textAlign:"center"}}>
                  <button onClick={()=>{this.handleRepair(user.taiKhoan)}} className={style.btn__sua }>Sửa</button>
                  <button className={style.btn__xoa }>Xóa</button>
                </td>
              </tr>
      })
    }
    //thay đổi input
    handleChange = (event)=>{
      this.setState({
        search: event.target.value 
      })
    }
    //submit
    // handleClick = (event)=>{
    //   // dispatch data
    //   this.props.dispatch(Action.searchUser(this.state.search))
    //   // gán data hiển thị 
    // }
    render() {
       // xét title
       document.title = "Danh sách người dùng";
      const {loading,error} = this.props;
      if(loading){
        return <Result
        icon={<SmileOutlined />}
        title="Vui lòng đợi giây lát !"
      />
      }
      else if(error){
        return   <Result
        icon={<CloseCircleOutlined />}
        title="Lỗi rồi !"
      />
      }
      else{
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //số lượng user hiện
        // vị trí user bắt đầu cắt 
        const indexOfLastNews = currentPage * newsPerPage;
        // vị trí cuối
        const indexOfFirstNews = indexOfLastNews - newsPerPage; 
        // kiểm tra người dùng có tìm kiếm hay không 
        
           // cắt dữ liệu
        const currentTodos = this.props.list.slice(indexOfFirstNews, indexOfLastNews);
        
        return (
            <div>
                {/* <form 
                style={{display:"flex"}}>
                    <Input 
                    size="large" 
                    placeholder="Tên người dùng" 
                    value = {this.state.search}
                    onChange= {this.handleChange}
                    prefix={<UserOutlined />} />
                    <Button 
                    onClick={this.handleClick}
                    style={{margin:"5px 0px"}} 
                    type="primary" 
                    icon={<SearchOutlined />}>
                        Tìm kiếm 
                    </Button>
                </form> */}
              <RepairUser visable={this.state.visable} handleOk={this.handleOk} taiKhoan={this.state.taiKhoan}  handleCancel={this.handleCancel}></RepairUser>
            <table className={style.table}>
              <thead>
                <tr className={style.table_tr}>
                  <th>Tài khoản</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
               {this.renderUser(currentTodos)}
              </tbody>
            </table>

            <Pagination 
            postPerPage={this.state.newsPerPage} 
            totalPost={this.props.list.length} 
            paginate={this.paginate} 
            currentPage={this.state.currentPage} />
            </div>
        )
      }
        
    }
    // call api
    componentDidMount(){
        //dispatc loading
        this.props.dispatch(Action.loading())
        this.props.dispatch(Action.fetchUser())
     }
}
const mapStateToProps=(state)=>({
    list : state.ListUser.listUser,
    search : state.ListUser.searchUser,
    loading : state.ListUser.loading,
    error : state.ListUser.error
})
export default connect(mapStateToProps)(ListUser);
