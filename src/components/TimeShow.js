import React from "react"
import { Timeline } from 'antd';
import AntdSelf from "./AntdSelf";
// First we import some modules...
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

class TimeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            timeList:[1,2,3,4,45,6,7,]
         };
        }

    render() {
        return (
        <Router>
            <div style={{margin:'10%'}}>
                <Timeline>
                   this.state.timeList.map(function(value) {
                        <Timeline.Item color="green">
                            <Link to = "/elem">{value}</Link>
                        </Timeline.Item>
                   })
                </Timeline>
            </div>
            <Route path="/elem" exact component={AntdSelf} />
        </Router>
        );
    }
}

export default TimeShow;