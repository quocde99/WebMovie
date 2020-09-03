import React, { Component } from 'react'
import { Menu,Layout,Anchor } from 'antd';
import {UserOutlined,DashboardOutlined} from "@ant-design/icons"
import {Link, NavLink} from "react-router-dom"
const {Sider} = Layout;
export default class SiderAdmin extends Component {
   
    render() {
        return (
            <>
               <Sider 
                style={{
                    background:"#0099CC",
                    marginTop:"80px"
                  }}
                  >
                   <Menu mode="inline">
                       <Menu.Item key="dashboard">
                             <Link to="/">
                           <span>
                           <DashboardOutlined />
                           </span>
                           <span>
                           Dashboard
                           </span>
                           </Link>
                           
                       </Menu.Item>
                        <Menu.Item key="user">
                            <Link to="/user">
                            <span>
                           <UserOutlined />
                           </span>
                           <span>
                           Quản lý người dùng
                           </span>
                            </Link>
                       </Menu.Item>
                       <Menu.Item key="movie">
                           <span>
                           <UserOutlined />
                           </span>
                           <span>
                           Quản lý phim
                           </span>
                       </Menu.Item>
                   </Menu>
               </Sider>
            </>
        )
    }
}
