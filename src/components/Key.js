import React from 'react';
import "./Key.css";

// const type = {
//     numeric: {
//         backgroundColor: "green"
//     },
//     operation:{
//         backgroundColor: "blue"
//     },
//     clean:{
//         backgroundColor: "red"
//     },
//     result:{
//         backgroundColor: "orange"
//     }
// };

const Key = (props) => {
    return (
        <div className={`key-display ${props.type}`}>
            <input type="button" value={props.text} />
        </div>
    );
};

export default Key;