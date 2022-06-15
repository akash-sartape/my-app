import { useState } from "react";

const FormCreate = ()=>{
    const[firstname,setfirstname]=useState("")
const[lastname,setlastname]=useState("")
const[age,setage]=useState("")
    const Firstname = (e)=>{
       setfirstname(e.target.value)
    }
    const Lastname = (e)=>{
        setlastname(e.target.value)
    }
    const Age = (e)=>{
        setage(e.target.value)
    }
    const ClearForm = ()=>{
        setfirstname("")
        setlastname("")
        setage("")
    }
  return(
      <div className="Form">
          <label for="firstname" >FirstName:-</label>
          <input className="firstname" placeholder="Enter your first name" onChange={Firstname} value={firstname}></input><br></br><br></br>
          <label for="lastname">Last Name:-</label>
          <input className="lastname" placeholder="Enter your last name" onChange={Lastname} value={lastname}></input><br></br><br></br>
          <label for="age">Age:-</label>
          <input className="age" placeholder="Enter your age" onChange={Age} value={age}></input><br></br><br></br>
          <div>
              <div>Fullname:-{firstname+" "+lastname}</div>
              <div>Age:-{age}</div>
          <button className="clearform" onClick={ClearForm}>Clear Form</button>
          </div>
      </div>
  )
}
export default FormCreate