import React,{useState} from 'react'


const App = () => {
  const[count,setcount]=useState(0)

  const increment=()=>{

    setcount(count+1)

  }


  return (
    <>
    <h1>counter example</h1>
    <h1>{count}</h1>
    <button onClick={increment}>increment</button>
    </>
   
  )
}

export default App