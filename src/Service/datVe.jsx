import axiosClient from "../Utils/axiosClient"

class DatVeService{
    DatVe(datVe){
        console.log(axiosClient.defaults.headers.common.Authorization);
        return axiosClient({
            method:'POST',
            url:"QuanLyDatVe/DatVe",
            data: datVe
        })
    }
}
export default DatVeService;