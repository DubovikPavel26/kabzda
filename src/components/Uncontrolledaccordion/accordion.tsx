import React, {useReducer, useState} from "react";
import AccordionReducer, {ToogleCollabsedAC} from "../../state/accordion-reducer";

type AccordionPropsType = {
    title: string
    // collabsed: boolean
}

function UncontrolledAccordion(props:AccordionPropsType){
    console.log("Accordion rendering")

    const [collabsed, dispatch] = useReducer(AccordionReducer,true)
    // const setCollabsedHandler = () =>setCollabsed(collabsed ? false : true)
    const setCollabsedHandler = () => dispatch(ToogleCollabsedAC())

        return (
            <div>
                <AccordionTitle title = {props.title} setCollabsedHandler={setCollabsedHandler}/>
                {!collabsed && <AccordionBody />}
            </div>
        )
    }



type AccordionTitlePropsTitle = {
    title: string
    setCollabsedHandler: () => void

}
function AccordionTitle(props:AccordionTitlePropsTitle) {
    console.log("AccordionTitle rendering")
    return (
        <div><h3 onClick={() => {props.setCollabsedHandler()}}>{props.title}</h3></div>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UncontrolledAccordion;