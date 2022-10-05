import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    // collabsed: boolean
}

function UncontrolledAccordion(props:AccordionPropsType){
    console.log("Accordion rendering")

    const [collabsed, setCollabsed] = useState(true)

        return (
            <div>
                <AccordionTitle title = {props.title} /> <button onClick={() =>setCollabsed(collabsed ? false : true)}>x</button>
                {!collabsed && <AccordionBody />}
            </div>
        )
    }



type AccordionTitlePropsTitle = {
    title: string

}
function AccordionTitle(props:AccordionTitlePropsTitle) {
    console.log("AccordionTitle rendering")
    return (
        <div><h3>{props.title}</h3></div>
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