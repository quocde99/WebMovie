import * as ActionType from "../Types/type"
const init = {
    listMovie : [],
    loadding: false,
    error: false,
    movieDetail : {},
    loaddingDetail:false,
    
}
const ListMovie = (state = init,action)=>{
    switch (action.type) {
        case ActionType.GET_MOVIE_REQUEST :{
            return {...state,loading:true}
        }
        case ActionType.GET_MOVIE :
            {
                state.listMovie = action.data;
                return {...state,loading:false}
            }
        case ActionType.GET_MOVIE_EROR:{
            return {...state,loading:false,error:true}
        }
        case ActionType.GET_MOVIE_DETAIL:{
            state.movieDetail = action.data;
            return {...state,loaddingDetail:false}
        }
        case ActionType.GET_MOVIE_DETAIL_LOADING :{
            state.movieDetail = {};
            return {...state,loaddingDetail:true}
        }
        default:
            return {...state};
    }
}
export default ListMovie;