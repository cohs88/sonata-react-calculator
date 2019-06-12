import React from 'react';
import Key from './Key';
import "./Keypad.css";

const Keypad  = (props) =>{
    
    return (
        <div className="keys-grid">
            <Key text="1" type="numeric" onKeyClick={ props.onKeyClick }/>
            <Key text="2" type="numeric" onKeyClick={props.onKeyClick}/>
            <Key text="3" type="numeric" onKeyClick={props.onKeyClick}/>
            <Key text="+" type="operation" onKeyClick={props.onKeyClick}/>

            <Key text="4" type="numeric" onKeyClick={ props.onKeyClick }/>
            <Key text="5" type="numeric" onKeyClick={ props.onKeyClick }/>
            <Key text="6" type="numeric" onKeyClick={ props.onKeyClick }/>
            <Key text="-" type="operation" onKeyClick={ props.onKeyClick }/>

            <Key text="7" type="numeric" onKeyClick={ props.onKeyClick } />
            <Key text="8" type="numeric" onKeyClick={ props.onKeyClick } />
            <Key text="9" type="numeric" onKeyClick={ props.onKeyClick } />
            <Key text="x" type="operation" onKeyClick={ props.onKeyClick } />

            <Key text="C" type="clean" onKeyClick={ props.onKeyClick } />
            <Key text="0" type="numeric" onKeyClick={ props.onKeyClick } />
            <Key text="=" type="result" onKeyClick={ props.onKeyClick } />
            <Key text="/" type="operation" onKeyClick={ props.onKeyClick } />
        </div>
    );
};

export default Keypad;