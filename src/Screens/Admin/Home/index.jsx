import React from 'react'
import { Layout } from 'antd'
import HeaderAdmin from '../../../Layouts/Header'
import SiderAdmin from '../../../Layouts/Sider'
import DashBoardAdmin from '../../../Layouts/Content/DashBoard'
import UserAdmin from '../../../Layouts/Content/User'
import {Switch,Route} from "react-router-dom"
import FooterAdmin from '../../../Layouts/Footer'

export default function HomeAdmin() {
    return (
        <Layout>
        {/* <HeaderAdmin></HeaderAdmin> */}
        <Layout>
          <SiderAdmin></SiderAdmin>
          <Layout>
            <Switch>
              <Route exact   path="/admin" component={DashBoardAdmin}></Route>
              <Route exact  path="/admin/user" component={UserAdmin}></Route>
            </Switch>
         
          <FooterAdmin></FooterAdmin>
          </Layout>
      </Layout>
    </Layout>
    )
}
