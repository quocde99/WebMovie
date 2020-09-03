import React from 'react';
import './App.css';
import HeaderAdmin from "../src/Layouts/Header/index"
import {Layout} from "antd"
import SiderAdmin from './Layouts/Sider/index';
import FooterAdmin from './Layouts/Footer';
// router 
import {BrowserRouter,Route,Switch} from "react-router-dom"
import UserAdmin from './Layouts/Content/User';
import DashBoardAdmin from "./Layouts/Content/DashBoard"
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderAdmin></HeaderAdmin>
        <Layout>
          <SiderAdmin></SiderAdmin>
          <Layout>
            <Switch>
              <Route exact path="/" component={DashBoardAdmin}></Route>
              <Route exact path="/user" component={UserAdmin}></Route>
            </Switch>
         
          <FooterAdmin></FooterAdmin>
          </Layout>
      </Layout>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
