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
                <Star selected={number >0} setValue={() => setNumber (1)} />
                <Star selected={number >1} setValue={() => setNumber (2)} />
                <Star selected={number >2} setValue={() => setNumber (3)} />
                <Star selected={number >3} setValue={() => setNumber (4)} />
                <Star selected={number >4} setValue={() => setNumber (5)} />
            </div>
        )
    }

type StarPropsType = {
    selected: boolean
    setValue: () => void

}
export function Star(props:StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => props.setValue()}>
        {props.selected ? <b> star</b> : " star"}
    </span>

}

export default UncontrolRaiting;