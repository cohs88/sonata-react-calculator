import React from 'react';
import Result from './Result';
import Keypad from './Keypad';
import ResultList from './ResultList';

class App extends React.Component{
    state = { results: [], currentResult: "" };

    onKeyClick = (text) => {
        const isEqualOperator = text === '=';

        if (isEqualOperator) {
            this.onEqualOperator();
        }

        const cr = this.state.currentResult.concat(text);

        this.setState({currentResult: cr });

        if (isEqualOperator) {
            this.setState({currentResult: '' });
        }
    }

    onEqualOperator(){
        const str = this.state.currentResult;
        console.log('onEqualOperator', str);
        
        // do calculations here :D
        for (var i = 0; i < str.length; i++) {
            const val = parseInt(str.charAt(i));
        }

        this.setState({results: [...this.state.results, this.state.currentResult] });
    }

    render(){
        console.log('App.render');
        return (
            <div>
                <Result result={this.state.currentResult} />
                <Keypad onKeyClick={this.onKeyClick} />
                <div>
                    <ResultList results={this.state.results} />
                </div>
            </div>
        );
    }
}

export default App;