import React from 'react'
import{Row,Card,Col} from "react-bootstrap"
import {ArrowUpOutlined,DribbbleOutlined,UserOutlined,DollarOutlined,ThunderboltOutlined} from '@ant-design/icons'
import * as Style from "./style.module.css";
export default function DashBoard() {
  const [total,user,yellow,blue] = ['#13E85A','#DB5B68','#DFF763','#6156F3'];
  return<>
  
    <Row>
      <div className="col-xl-3 col-md-6" className={Style.card}>
        <Card>
          <Card.Body>
            <Row>
              <Col className="col">
                <Card.Title className="card-title text-uppercase text-muted mb-0">Total traffic</Card.Title>
                <span className="h2 font-weight-bold mb-0">200.121</span>
              </Col>
              <div className="col-auto">
                <div className={Style.circle} style={{backgroundColor:total}}>
                <DribbbleOutlined className={Style.icons} />
                </div>
              </div>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2"><ArrowUpOutlined/> 2.48%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6">
        <Card className={Style.card}>
          <Card.Body>
            <Row>
              <Col className="col">
                <Card.Title className="card-title text-uppercase text-muted mb-0">New User</Card.Title>
                <span className="h2 font-weight-bold mb-0">20</span>
              </Col>
              <div className="col-auto">
                <div className={Style.circle} style={{backgroundColor:user}}>
                <UserOutlined  className={Style.icons}/>
                </div>
              </div>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2"><ArrowUpOutlined/> 3.48%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6">
        <Card className={Style.card}>
          <Card.Body>
            <Row>
              <Col className="col">
                <Card.Title className="card-title text-uppercase text-muted mb-0">Sale</Card.Title>
                <span className="h2 font-weight-bold mb-0">20</span>
              </Col>
              <div className="col-auto">
                <div className={Style.circle} style={{backgroundColor:yellow}}>
                <DollarOutlined  className={Style.icons}/>
                </div>
              </div>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2"><ArrowUpOutlined/> 3.48%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xl-3 col-md-6">
        <Card className={Style.card}>
          <Card.Body>
            <Row>
              <Col className="col">
                <Card.Title className="card-title text-uppercase text-muted mb-0">PERFORMANCE</Card.Title>
                <span className="h2 font-weight-bold mb-0">20.1 %</span>
              </Col>
              <div className="col-auto">
                <div className={Style.circle} style={{backgroundColor:blue}}>
                <ThunderboltOutlined className={Style.icons}/>
                </div>
              </div>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2"><ArrowUpOutlined/> 3.48%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </Card.Body>
        </Card>
      </div>
  
    </Row>
</>

}
