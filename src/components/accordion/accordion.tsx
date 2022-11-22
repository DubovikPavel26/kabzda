import React from "react";

type itemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    changeAccordion: (value: boolean) => void
    collabsed: boolean
    items: itemType[]
    onclick: (value: any) => void
}

function Accordion(props:AccordionPropsType){
    console.log("Accordion rendering")

        return (
            <div>
                <AccordionTitle title = {props.title} changeAccordion={props.changeAccordion} collabsed={props.collabsed}/>
                {!props.collabsed && <AccordionBody items={props.items} onclick={props.onclick}/>}
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


type AccordionBodyType = {
    items: itemType[]
    onclick: (value: any) => void
}
function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering")
    return(
        <div>
            <ul>
                {props.items.map((el, index) => {
                    return(
                        <li onClick={() => {props.onclick(el.value)}} key={index}>{el.title}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Accordion;