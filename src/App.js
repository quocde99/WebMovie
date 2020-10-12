import React,{useEffect} from 'react';
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
import FooterClinet from './Screens/Clients/Footer';
import DatGhe from './Screens/Clients/DatGhe';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    function getLocal(){
      const credentials = localStorage.getItem("credentials");
      if(credentials)
      {
        dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentials)))
      }
    }
    getLocal()
  }, [])
  return (
    <BrowserRouter>
      <HeaderClient/>
      <Switch >
        <Route exact path="/" component={HomeClient}></Route>
        <Route  path="/detail/:movieId" component={ChiTietPhim}></Route>
        <Route  path="/admin" component={HomeAdmin}></Route>
        <Route path="/checkout/:idLichChieu" component={DatGhe}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
