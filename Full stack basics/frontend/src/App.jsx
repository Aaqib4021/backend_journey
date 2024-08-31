import { useEffect, useState } from "react"
import axios from "axios"

function App() {
const [jokes ,setjokes] = useState([])
useEffect(()=>{
    console.log("effect");
    axios.get("/api/jokes")
    .then((response)=>{
        setjokes(response.data)
    })
    .catch((error)=>{
        console.error(error)
    })
},[]);
  return (
    <>
      <h1>Hello</h1>
      <p>JOKES:{jokes.length}</p>
        {jokes.map((joke)=>(
            <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
            </div>
        ))}
    </>
  )
}

export default App
