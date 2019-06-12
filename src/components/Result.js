import React from 'react';
import "./Result.css";

class Result extends React.Component {
    state = { result: this.props.result };

    componentDidMount(){
        this.setState({result: this.props.result});
    }

    componentWillReceiveProps(props){
        this.setState({result: props.result});
    }

    componentDidUpdate(){
    }
    onInputChange = (event) =>{
        this.setState({result: 'servando'});
    };
    
    render(){
        console.log('Result.render', this.state.result);
        return (
            <div className="result">
                {/* {this.state.result} */}
                <input 
                    type="text" 
                    readOnly
                    value={this.state.result} 
                    onChange={this.onInputChange}
                    />
            </div>
        );
    }
};

export default Result;