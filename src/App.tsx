import React from 'react';
import './App.css';
import Accordion from './components/accordion/accordion'
import {Raiting, Star} from "./components/raiting/raiting";

function App() {
  console.log("App rendering")
  return (
      <div className="App">
        <PageTitle title={"Hello, samurai! Let's go!"} />
        <PageTitle title={"Users"} />
        <Raiting value={3} />
        <Accordion title={"Menu"}  />
        <Accordion title={"Users"} />
        <Raiting value={4} />
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
