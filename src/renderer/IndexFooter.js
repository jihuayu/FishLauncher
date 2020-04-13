import {Button, Col, Row} from "antd";
import React from "react";

export class IndexFooter extends React.Component {
    render() {
        return <Row>
            <Col push={0} span={6}>
                <Button type="primary" size="large" style={{
                    backgroundColor: "rgba(185,185,255,255)",
                    borderColor: "rgba(185,155,155,255)",
                    margin: "0px 0px 0px 15px"
                }}>
                    开始游戏
                </Button>
                <Button type="primary" size="large" style={{
                    backgroundColor: "rgba(185,185,255,255)",
                    borderColor: "rgba(185,155,155,255)",
                    borderWidth:"1px 1px 1px 0px",
                    margin: "0px 15px 0px 0px",
                    padding: "2px 5px"
                }}>
                    ^
                </Button>
            </Col>
            <Col push={12} span={3}>
                <Button type="primary" size="large" style={{
                    backgroundColor: "rgba(255,185,155,0.85)",
                    borderColor: "rgba(185,155,155,255)",
                    margin: "0px 15px"
                }}>
                    设置
                </Button>
            </Col>
            <Col push={12} span={3}>

                <Button type="primary" size="large" style={{
                    backgroundColor: "rgba(255,185,155,0.85)",
                    borderColor: "rgba(185,155,155,255)",
                    margin: "0px 15px"
                }}>
                    退出
                </Button>
            </Col>
        </Row>;
    }
}
