import React, { useState } from 'react'

function Student({std}) {
//   const myArray = useState("RoyalBabu")
//   let changeState = () => {
//     myArray[1]("DevilHost")
//   }
// const [name,setName] = useState("Royalbabu")
// let changeState = () => {
//  setName("DevilHost")
// }
let obj = {
    name: "Jackilne",
    age: 33,
    hasBf: false
}
const [person,setName] = useState(obj)
// let changeState = () => {
//     setName(previousState => {
//         return {
//             ...previousState,
//             name:"Jackquiline Fernandes"
//         }
//     })
// }
let changeState = () => {
    setName(
        {
            name: "JackquilineFernandes",
            age: 33,
            hasBf: true
        }
    )
}
  let css_obj = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: "50px"
  }
  let css_obj2 = {
    fontFamily: "cooper"
  }
  return (
    <div>
        {/* <h1 style={{...css_obj,...css_obj2}}>I am {std.name} and my age is {std.age} {myArray[0]}!!!</h1> */}
        <h1 style={{...css_obj,...css_obj2}}>I am {std.name} and my age is {std.age} {person.name}!!!</h1>
        <button onClick={changeState}>Update</button>
    </div>
  )
}

export default Student