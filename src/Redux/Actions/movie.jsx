import {createAction} from "./index";
import * as ActionType from "../Types/type";
import {movieService} from "../../Service/index"

// lấy danh sách movie
export const fetchMovie = ()=>{
    return (dispatch)=>{
         movieService
         .getMovie()
         .then((result)=>{
           dispatch(createAction(ActionType.GET_MOVIE,result.data))
         })
        .catch((error)=>{
           dispatch(createAction(ActionType.GET_MOVIE_EROR))
        })
    }
 }
 // dispatch loading all MOVIE
 export const loading = ()=>{
    return (dispatch)=>{
      dispatch({
         type:ActionType.GET_MOVIE_REQUEST
      })
    }
 }
// detail
export const getMovieDetail = (id)=>{
   return (dispatch)=>{
      movieService
      .getDetailMovie(id)
      .then((result)=>{
        dispatch(createAction(ActionType.GET_MOVIE_DETAIL,result.data))
      })
     .catch((error)=>{
        console.log(error);
     })
 }
}
export const loadingDetail = ()=>{
   return (dispatch)=>{
     dispatch({
        type:ActionType.GET_MOVIE_DETAIL_LOADING
     })
   }
}