import Axios from "axios"

 class RapService{
       getHeThongRap(){
         return Axios({
             method:'GET',
             url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
         });
     }
     getLayThongTinCumRapTheoHeThong(tenHeThongRap){
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${tenHeThongRap}`
        });
    }
    getLayThongTinLichChieuHeThongRap(maRap){
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP04`
        })
    }
 }
 export default RapService;