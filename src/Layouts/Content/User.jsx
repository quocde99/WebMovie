import React, { Component } from 'react'
import { Layout,Breadcrumb  } from 'antd';
import ListUser from '../../Screens/Admin/ListUser';

const { Content } = Layout;

export default class UserAdmin extends Component {
    render() {
        return (
            <>
            <Breadcrumb style={{marginTop:"80px"}}>
            <Breadcrumb.Item style={{padding:"30px", fontSize:"20px"}}>Danh sách người dùng</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ padding: '0 24px', minHeight: 280, }}>
               <ListUser></ListUser>
            </Content>
            </>
        )
    }
}
