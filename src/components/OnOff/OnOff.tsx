import React, {useState} from 'react';

type onOffType = {
    on: boolean
    setOn: (value: boolean) => void
}


const OnOff = (props:onOffType) => {
    const onStyle = {
       width: '30px',
       height: '20px',
       border: '1px solid black',
       display: "inline-block",
       backgroundColor: props.on ? "green": "white"
   }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        backgroundColor: props.on ? "white": "red"
    }
    const inStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"


    }
    return (
        <div>
           <div style={onStyle} onClick={() => {props.setOn(!props.on)}}>on</div>
            <div style={offStyle} onClick={() => {props.setOn(!props.on)}}>off</div>
            <div style={inStyle}></div>
        </div>
    );
};

export default OnOff;