import React from "react";

type AccordionPropsType = {
    title: string
    changeAccordion: (value: boolean) => void
    collabsed: boolean
}

function Accordion(props:AccordionPropsType){
    console.log("Accordion rendering")

        return (
            <div>
                <AccordionTitle title = {props.title} changeAccordion={props.changeAccordion} collabsed={props.collabsed}/>
                {!props.collabsed && <AccordionBody />}
            </div>
        )
    }



type AccordionTitlePropsTitle = {
    title: string
    changeAccordion: (value: boolean) => void
    collabsed: boolean
}
function AccordionTitle(props:AccordionTitlePropsTitle) {
    console.log("AccordionTitle rendering")
    return (
        <div onClick={() => props.changeAccordion(!props.collabsed)}><h3>{props.title}</h3></div>
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

export default Accordion;