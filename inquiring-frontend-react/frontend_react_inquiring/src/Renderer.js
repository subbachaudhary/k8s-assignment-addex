import React, { useState,useEffect } from 'react'
import Student from './Student'
function Renderer() {
    let [count, setCount ] = useState(0)
    useEffect(() => {
        console.log("Hello I am effect =" + count)
    },[count])
    const students  = ["Bhuwan","Royal","Sohit","Devil","Anonymous"]
    const res = students.map( std =>  <h1>I am {std} </h1>)
    const list_obj = [
        {
            name:"Royal Chaudhary",
            age:8
        },
        {
            name:"AnonYmous Chaudhary",
            age:38
        },
        {
            name:"Devil Chaudhary",
            age:12
        },
        {
            name:"Sohit Chaudhary",
            age:14
        },
        {
            name:"Bhuwan Chaudhary",
            age:28
        }
    ]

  return (
    <div>
        {list_obj.map((std,index) => <Student key={index} std={std}/>)}
        <h1>Current Value is {count}</h1>
        <button onClick={() => {setCount(count+1)}} >UpdateValue</button>
    </div>
  )
}

export default Renderer