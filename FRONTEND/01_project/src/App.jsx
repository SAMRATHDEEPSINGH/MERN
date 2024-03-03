import Example from "./Example"
import { useState } from "react";
import Card from "./components/Card";

function App() {
 let [counter,setCounter]= useState(5);

  const username="How are You";
  // let counter=5;
  const addValue=()=>{
    console.log(counter)
    // counter=counter+1;
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
  }

  const removeValue=()=>{
    if (counter<=0) {
      console.log("value cannot be negatve")
    }
    else{
    setCounter(counter-1);
    }
  }
  // let myObj={
  //   username:"Samrath",
  //   age:21
  // }
  // let newArr=[1,2,3,4];
  return (
    <>
    {/* <div className="grid grid-rows-2 grid-flow-col gap-4 justify-center my-2">
    <div><h1 className="bg-green-400 text-black rounded-xl mb-4 text-center">Tailwind test</h1></div>
    <Card username="Samrath" btnText="clickme" />
    <Card username="Tami" />
    {/* <Card mycard="Samrath" someObj={myObj} myARRR={newArr} /> */}
    {/* <div/>} */}
   


    <Example/>
    <p>Hello World,{username}</p>

    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
