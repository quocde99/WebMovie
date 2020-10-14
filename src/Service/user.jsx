import axiosClient from "../Utils/axiosClient"

class UserService{
    fetchUser(){
        return  axiosClient({
            method :"GET",
            url:"QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
        })
    }
    searchUser(userName){
       return axiosClient({
        method:"GET",
        url:`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userName}`
       })
    }
    //lấy thông tin người dùng
    getUserDetail(userName){
        return axiosClient({
            method:'POST',
            url:"QuanLyNguoiDung/ThongTinTaiKhoan",
            data: userName
        })
    }
    // đăng nhập 
    signIn(user){
        return axiosClient({
            method:'POST',
            url:"QuanLyNguoiDung/DangNhap",
            data: user
        })
    }
    // Đăng ký 
    signUp(user){
        return axiosClient({
            method:"POST",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user
        })
    }
    // Đặt ghế 
    getLichChieu(idLichChieu){
        return axiosClient({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idLichChieu}`
        })
    }
}
export default UserService;