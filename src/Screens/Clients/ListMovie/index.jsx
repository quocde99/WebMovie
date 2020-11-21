// Hiển thị danh sách phim cho người dùng
import React,{useEffect,useState} from 'react'
import { Ring, Heart } from 'react-spinners-css';
import * as Action from "../../../Redux/Actions/movie";
import {useDispatch,useSelector} from "react-redux";
import Movie from './Movie'
//import Ring from '@bit/joshk.react-spinners-css.ring';
export default function ListMovie(props) {
    const listMovie = useSelector(state => state.ListMovie.listMovie);
    const loadding = useSelector(state => state.ListMovie.loading);
    const showListMovie = (list)=>{
        return list.slice(4,16).map((items,index)=>{
            return (<div  className="col-12 col-sm-6 col-md-3 movie__items">
                <Movie item = {items} key={index.toString()}/>
            </div>) 
        })
    }
    const dispatch = useDispatch();
   useEffect(() => {
       // call api
    dispatch(Action.loading())
    dispatch(Action.fetchMovie())
   }, [])
   if(loadding){
       return <section className="movie">
            <h3 className="text-center title">Đang chiếu</h3>
            <div className="container">
                <div className="row">   
                    <Ring className="circle" color="#fa5238" />
                </div>
            </div>
        </section>
   }
    return (
        <section className="movie">
            <h3 className="text-center title">Đang chiếu</h3>
            <div className="container">
                <div className="row">  
                   {
                    showListMovie(listMovie)
                   } 
                </div>
            </div>
        </section>

    )
}


