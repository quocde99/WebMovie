import React,{useEffect,useState} from 'react';
// router 
import {BrowserRouter,Route,Switch} from "react-router-dom";
import HomeAdmin from './Screens/Admin/Home';
import HeaderClient from './Screens/Clients/Header';
//scss
import './App.scss'
import HomeClient from './Screens/Clients/Home';
import ChiTietPhim from './Screens/Clients/ChiTietPhim';
import {useDispatch} from "react-redux";
import {FETCH_CREDENTIALS} from "./Redux/Types/type";
import {createAction} from "./Redux/Actions/index"
import DatGhe from './Screens/Clients/DatGhe';
import {setToken} from "./Utils/axiosClient"
import LoginPage from './Screens/Clients/LoginPage';
import Error404 from './Screens/Clients/Error';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("credentials"))
    {
      const credentials = localStorage.getItem("credentials");
      if(JSON.parse(credentials))
      {
        dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentials)))
        setToken(JSON.parse(credentials).accessToken)
      }
    }}, [])
  return (
    <BrowserRouter>
      <HeaderClient/>
      <Switch >
        <Route exact path="/" component={HomeClient}></Route>
        <Route  path="/detail/:movieId" component={ChiTietPhim}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route  path="/admin" component={HomeAdmin}></Route>
        <Route path="/checkout/:idLichChieu" component={DatGhe}></Route>
        <Route path="*" component={Error404}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
