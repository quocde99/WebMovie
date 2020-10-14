//import Axios from "axios"
import axiosClient from "../Utils/axiosClient"
class MovieService{
    getMovie(){
        return axiosClient({
            method:"GET",
            url:"QuanLyPhim/LayDanhSachPhim?maNhom=GP04"
        })
    }
    //https://movie0706.cybersoft.edu.vn/api/
    getDetailMovie(id){
        return axiosClient({
            method:"GET",
            url:`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
    }
}
export default MovieService;