import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/accordion'
import {Raiting, raitingTypeProps, Star} from "./components/raiting/raiting";
import UncontrolOnOff from "./components/UncotrollOnOff/UncontrolOnOff";
import UncontrolledAccordion from "./components/Uncontrolledaccordion/accordion";
import UncontrolRaiting from "./components/Uncontrollraiting/raiting";
import OnOff from "./components/OnOff/OnOff";

function App() {
  console.log("App rendering")
    let[raitingValue, setRaitingValue] = useState<raitingTypeProps>(0)
    let[accordionCollabsed, setAccordionCollabsed] = useState<boolean>(true)
    const [on, setOn] = useState(false)


  return (
      <div className="App">
          <PageTitle title={"Hello, samurai! Let's go!"} />
        <PageTitle title={"Users"} />

        <UncontrolledAccordion title={"Menu"} />
        <UncontrolledAccordion title={"Users"}/>

          <Accordion title={"Menu"} changeAccordion={setAccordionCollabsed} collabsed={accordionCollabsed}/>

          <UncontrolRaiting/>

          {/*<Raiting value={0} />*/}
          {/*<Raiting value={1} />*/}
          {/*<Raiting value={2} />*/}
          <Raiting value={raitingValue} ChangeStar={setRaitingValue}/>
          {/*<Raiting value={4} />*/}
          {/*<Raiting value={5} />*/}

          <UncontrolOnOff onChange={setOn}/>
          <OnOff on={on} setOn={setOn}/>
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props:PageTitlePropsType){
  console.log("AppTitle rendering")
  return <h1>{props.title}</h1>
}

function hello() {
  console.log("hello rendering")
  alert("Hello")
}
hello();



export default App;
