import React from 'react';
import "./Key.css";

class Key extends React.Component {
    state = {value: '', type: ''};

    onClickEvent = (event) => {
        // event.preventDefault();

        this.props.onKeyClick(this.props.text);
    }

    render(){
        
        return (
            <div className={`key-display ${this.props.type}`}>
            
                <input 
                    type="button" 
                    value={this.props.text} 
                    onClick={this.onClickEvent}
                    />
            </div>
        ); 
    }
    
};

export default Key;