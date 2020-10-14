import axiosClient from "../Utils/axiosClient"

 class RapService{
       getHeThongRap(){
         return axiosClient({
             method:'GET',
             url:'QuanLyRap/LayThongTinHeThongRap'
         });
     }
     getLayThongTinCumRapTheoHeThong(tenHeThongRap){
        return axiosClient({
            method:"GET",
            url:`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${tenHeThongRap}`
        });
    }
    getLayThongTinLichChieuHeThongRap(maRap){
        return axiosClient({
            method:"GET",
            url:`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP04`
        })
    }
 }
 export default RapService;