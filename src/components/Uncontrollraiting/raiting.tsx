import React, {useState} from "react";
import Accordion from "../accordion/accordion";

type RaitingPropsType = {
    // value: number
}

export function UncontrolRaiting(props:RaitingPropsType) {
    console.log("Raiting rendering")
    const [number, setNumber] = useState(0)
        return (
            <div>
                <Star selected={number >0}/> <button onClick={()=>setNumber(1)}>1</button>
                <Star selected={number >1}/> <button onClick={()=>setNumber(2)}>2</button>
                <Star selected={number >2}/> <button onClick={()=>setNumber(3)}>3</button>
                <Star selected={number >3}/> <button onClick={()=>setNumber(4)}>4</button>
                <Star selected={number >4}/> <button onClick={()=>setNumber(5)}>5</button>
            </div>
        )
    }

type StarPropsType = {
    selected: boolean

}
export function Star(props:StarPropsType) {
    console.log("Star rendering")
    return props.selected ? <span><b>star </b></span> : <span>star </span>

}

export default UncontrolRaiting;