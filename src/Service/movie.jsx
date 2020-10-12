import Axios from "axios"

class MovieService{
    getMovie(){
        return Axios({
            method:"GET",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04"
        })
    }
    getDetailMovie(id){
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
    }
}
export default MovieService;