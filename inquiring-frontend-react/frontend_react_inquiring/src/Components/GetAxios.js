import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = "http://localhost:8000/api/inquiry-list/";
function GetAxios() {
  const [mydata, setData] = useState([])
  useEffect( () => {
    axios.get(baseUrl).then((response) => {
        setData(response.data)
    })
   },[])
   console.log(mydata)
  return (
    <>
        {
            mydata.map((item) => {
            const {id, name, message, branch} = item;
            return(
                    <div className="container mt-5" key={id}>
                        <h5>{ id }</h5>
                        <h5>{ name }</h5>
                        <h5>{ branch }</h5> 
                        <h5>{ message }</h5> 
                    </div>
            )
            })
        }
   
        {/* <h1>{ mydata.id }</h1>
        <h1>{ mydata.name }</h1>
        <h1>{ mydata.message }</h1> */}
     </>
    
    
  )
}

export default GetAxios