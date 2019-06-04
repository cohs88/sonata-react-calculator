import React from 'react';

class Result extends React.Component {
    constructor(props){
        super(props);

        this.state = { message: 'HELLO' };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({message: 'servando'});
        }, 30000); // time in milliseconds
    }
    render(){
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
};

export default Result;