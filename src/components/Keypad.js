import React from 'react';
import Key from './Key';
import "./Keypad.css";

const Keypad  = (props) =>{
    return (
        <div className="keys-grid">
            <Key text="1" type="numeric"/>
            <Key text="2" type="numeric"/>
            <Key text="3" type="numeric"/>
            <Key text="+" type="operation"/>

            <Key text="4" type="numeric"/>
            <Key text="5" type="numeric"/>
            <Key text="6" type="numeric"/>
            <Key text="-" type="operation"/>

            <Key text="7" type="numeric"/>
            <Key text="8" type="numeric"/>
            <Key text="9" type="numeric"/>
            <Key text="x" type="operation"/>

            <Key text="C" type="clean"/>
            <Key text="0" type="numeric"/>
            <Key text="=" type="result"/>
            <Key text="/" type="operation"/>
        </div>
    );
};

export default Keypad;