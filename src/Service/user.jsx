import Axios from "axios"

class UserService{
    fetchUser(){
        return  Axios({
            method :"GET",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
        })
    }
    searchUser(userName){
       return Axios({
        method:"GET",
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userName}`
       })
    }
    //lấy thông tin người dùng
    getUserDetail(userName){
        return Axios({
            method:'POST',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            data: userName
        })
    }
    // đăng nhập 
    signIn(user){
        return Axios({
            method:'POST',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
    }
    // Đăng ký 
    signUp(user){
        return Axios({
            method:"POST",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user
        })
    }
    // Đặt ghế 
    getLichChieu(idLichChieu){
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idLichChieu}`
        })
    }
}
export default UserService;