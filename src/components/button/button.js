import React, { useState } from "react";
import "./button.css";
const Title = () => {
    return (
        <h2 className="Title" align="center"  >My First App</h2>
    )
}
export const Button = () => {
   let [isnormal,SetDanger] = useState(true)
   let ChangeColorFun = () => {
    SetDanger(!isnormal);
   }
    return (<div>
        <h2 className={isnormal ? "color_normal" : "color_danger"}> Color Changing Words</h2>
        <button className="button1" onClick={ChangeColorFun}> Change Color</button>
        </div>
    )
}
export const AddSub = () => {
    const[counter,setcounter]=useState(0)
   let AddSum = () => {
       setcounter((prev)=>{
        console.log(prev+" prev1")
         return prev+1
       })
       setcounter((prev)=>{
        console.log(prev+" prev2")
        return prev+1
      })
    // num++
    // let display = document.querySelector("p");
    // display.innerHTML=num
  
   }
   let Subsum = () => {
    setcounter((prev)=>{
        return prev-1
      })
      setcounter((prev)=>{
       return prev-1
     })
    //    num--
    //    let display = document.querySelector("p");
    // display.innerHTML=num
}

    return (
        <div align="center" className="AddSub">
            <button className="sub" onClick={Subsum}>Sub</button>
            <p className="answer">{counter}</p>
            <button className="Add" onClick={AddSum}>Add</button>
            
        </div>
    )
}
export default Title;