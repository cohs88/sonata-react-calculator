import React from 'react';
import Result from './Result';
import Keypad from './Keypad';

class App extends React.Component{
    render(){
        return (
            <div>
                <Result />
                <Keypad />
            </div>
        );
    }
}

export default App;