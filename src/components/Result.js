import React from 'react';
import "./Result.css";

class Result extends React.Component {
    constructor(props){
        super(props);

        this.state = { result: 'HELLO' };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({result: 'servando'});
        }, 30000); // time in milliseconds
    }
    render(){
        return (
            <div className="result">
                <input type="text" value={this.state.result} />
            </div>
        );
    }
};

export default Result;