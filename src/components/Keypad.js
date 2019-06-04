import React from 'react';
import Key from './Key';

const Keypad  = (props) =>{
    return (
        <div>
            Keypad
            <Key text="1"/>
            <Key text="2"/>
            <Key text="3"/>
            <Key text="+"/>
            <Key text="4"/>
            <Key text="5"/>
            <Key text="6"/>
            <Key text="-"/>
        </div>
    );
};

export default Keypad;