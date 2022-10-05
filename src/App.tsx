import React from 'react';
import './App.css';
import Accordion from './components/accordion/accordion'
import {Raiting, Star} from "./components/raiting/raiting";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Uncontrolledaccordion/accordion";
import UncontrolRaiting from "./components/Uncontrollraiting/raiting";

function App() {
  console.log("App rendering")
  return (
      <div className="App">
          <PageTitle title={"Hello, samurai! Let's go!"} />
        <PageTitle title={"Users"} />

        <UncontrolledAccordion title={"Menu"}/>
        <UncontrolledAccordion title={"Users"}/>

          <UncontrolRaiting/>

          <Raiting value={0} />
          <Raiting value={1} />
          <Raiting value={2} />
          <Raiting value={3} />
          <Raiting value={4} />
          <Raiting value={5} />

          < OnOff/>
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
