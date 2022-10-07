import React from "react";
import Accordion from "../accordion/accordion";

export type raitingTypeProps = 0 | 1 | 2 | 3 | 4 |5

type RaitingPropsType = {
    value: raitingTypeProps
    ChangeStar: (value: raitingTypeProps) => void
}

export function Raiting(props:RaitingPropsType) {
    console.log("Raiting rendering")
        return (
            <div>
                <Star selected={props.value >0} ChangeStar={props.ChangeStar} value={1} />
                <Star selected={props.value >1} ChangeStar={props.ChangeStar} value={2}/>
                <Star selected={props.value >2} ChangeStar={props.ChangeStar} value={3}/>
                <Star selected={props.value >3} ChangeStar={ props.ChangeStar} value={4}/>
                <Star selected={props.value >4} ChangeStar={props.ChangeStar} value={5}/>
            </div>
        )
    }

type StarPropsType = {
    selected: boolean
    ChangeStar: (value: raitingTypeProps) => void
    value: raitingTypeProps

}
export function Star(props:StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() =>props.ChangeStar(props.value)}>{props.selected ? <b> star</b> : " star"}</span>
}
