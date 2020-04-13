import ReactDOM from "react-dom"
import React from "react"
import {Layout, Button, Row, Col, Menu, Tabs} from 'antd';
import {IndexFooter} from "./IndexFooter"

const {Header, Content, Footer, Slider} = Layout
const {TabPane} = Tabs
import 'antd/dist/antd.css';

class App extends React.Component {
    render() {
        return <Layout style={{
            background: "url('https://source.unsplash.com/6eL_lMJDwjM/800x600')",
            height: "600px",
            userSelect: "none"
        }}>
            <Header style={{backgroundColor: "rgba(255,255,255,0.3)",}}>
                <Row>
                    <Col push={0} span={6} style={{WebkitAppRegion: "drag"}}>
                        <h2 style={{color: "rgba(185,185,255,255)", fontWeight: "1000", letterSpacing: "2px"}}>Fish
                            Launcher</h2>
                    </Col>
                </Row>
            </Header>

            <Content>
                <div>
                    <Tabs tabPosition="left">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>
            </Content>


            <Footer style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "15px"
            }}>
                <IndexFooter/>
            </Footer>
        </Layout>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app"),
);
