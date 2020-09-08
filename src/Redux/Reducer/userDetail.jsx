import * as ActionType from "../Types/type"
const init = {
    userDetail : {},
    loadingDetail: false
}
const userDetail =(state = init,action)=> {
    switch (action.type) {
        case ActionType.GET_USERSDETAIL_REQUEST :{
            state.userDetail = {}
            return {...state,loadingDetail:true}
        }
        case ActionType.GET_USER_DETAIL:
            state.userDetail = action.data;
            return {...state,loadingDetail:false}
        default:
           return {...state}
    }
}
export default userDetail;