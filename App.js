import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

function App(){

  // const [arr,setArr] = useState(["car"])

// const [arr,setArr] = useState({
//   name :"mudassir",
//   email : "adgavdyugvyfwdkufgyf"
// })

const [count , setNum] = useState(0)

const Increase=()=>{
  setNum (count + 1)

}

const Decrease=()=>{
  setNum (count - 1)
  
  }

  return(
    <div  style={{textAlign: "center"}}>
<div >

      <h1 style={{color: "red",fontWeight: "bold"}}>COUNTER</h1>
     <h1  style={{textAlign: "center" ,fontSize:"100px"} }>{count}</h1>
     <Button style={{width: "70px" , height:"40px",border:"2px solid",margin :"10px",backgroundColor:"	 #d6d6c2"}}  onClick={Increase}>
      <AddIcon/>
       </Button >
     <Button style={{width: "70px" , height:"40px",border:"2px solid",margin :"10px" ,backgroundColor:"	 #d6d6c2"}} onClick={Decrease} >
       <RemoveIcon/>
       </Button>
       </div>

{/* <h1>hello world</h1>
<button onClick={handleClick}>set</button>

  <h3>{arr.name}</h3>
  <h3>{arr.email}</h3> */}

{/* <ul>
  {arr.map((v,i)=>{
return <li >{v}</li>
  })}
</ul> */}

    </div>
  )
}
export default App;