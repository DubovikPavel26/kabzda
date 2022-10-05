import React, {useState} from 'react';

type onOffType = {
    //on: boolean
}


const OnOff = (props:onOffType) => {
   const [on, setOn] = useState(false)

    const onStyle = {
       width: '30px',
       height: '20px',
       border: '1px solid black',
       display: "inline-block",
       backgroundColor: on ? "green": "white"
   }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        backgroundColor: on ? "white": "red"
    }
    const inStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"


    }
    return (
        <div>
           <div style={onStyle} onClick={() => {setOn(true)}}>on</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>off</div>
            <div style={inStyle}></div>
        </div>
    );
};

export default OnOff;