import React from "react"
import Button from 'antd/lib/button';
import "../assets/css/AntdSelf.css"
class AntdSelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
            </div>  
        );
    }
}

export default AntdSelf;