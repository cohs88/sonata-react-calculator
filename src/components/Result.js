import React from 'react';

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
            <div>
                {this.state.result}
            </div>
        );
    }
};

export default Result;