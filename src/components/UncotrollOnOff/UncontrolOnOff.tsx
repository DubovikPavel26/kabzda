import React, {useState} from 'react';

type onOffType = {
    onChange: (on: boolean) => void
}


const UncontrolOnOff = (props:onOffType) => {
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

    const Onclicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const Offclicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
           <div style={onStyle} onClick={Onclicked}>on</div>
            <div style={offStyle} onClick={Offclicked}>off</div>
            <div style={inStyle}></div>
        </div>
    );
};

export default UncontrolOnOff;