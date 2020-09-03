import Axios from "axios"

class UserService{
    fetchUser(){
        return  Axios({
            method :"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
        })
    }
    searchUser(userName){
       return Axios({
        method:"GET",
        url:`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userName}`
       })
    }
    //lấy thông tin người dùng
    getUserDetail(userName){
        return Axios({
            method:'POST',
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            data: userName
        })
    }
}
export default UserService;