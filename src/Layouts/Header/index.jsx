import React, { Component } from 'react';
import { Layout,Typography,Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as Style from "./index.module.css"
const { Header } = Layout;
const { Title } = Typography;
export default class HeaderAdmin extends Component {
    render() {
        return <Header className={Style.header}>

            <Title className={Style.title} level={3}><a>
                QuDez Movie
                </a> </Title>
            <div className={Style.dropdown}>
                <p className={Style.admin}>
                    <a>
                        <Avatar
                            size="large" icon={<UserOutlined />} />
                    Quoc De Admin</a></p>
                <div className={Style.dropdowncontent}>
                    <a href="#">Đăng xuất</a>
                </div>
            </div>
        </Header>

          
    }
}
