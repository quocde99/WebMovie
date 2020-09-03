import React from 'react'
import { Breadcrumb,Layout  } from 'antd';
import DashBoard from "../../Screens/Admin/DashBoard/index"
export default function DashBoardAdmin() {
    const { Content } = Layout;
    document.title = " Dashboard"
    return (
        <>
        <Breadcrumb style={{marginTop:"80px"}}>
        <Breadcrumb.Item style={{padding:"30px", fontSize:"20px"}}>DashBoard</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ padding: '0 24px', minHeight:550, }}>
           <DashBoard></DashBoard>
        </Content>
        </>
    )
}
