import { useState } from "react"

function Forms_personal (){
const[personalData,setPersonalData] = useState([])
const[personalForm,setPersonalForm] = useState({
    firstName:"",
    lastName:"",
    age:0,
    gender:"",
    address:"",
    objective:""
})
const[toggle,setToggle] = useState(false)
const handleCLick = ()=>{
    setToggle(prevToggle => !prevToggle)
}
const handleChange = (e)=>{
    setPersonalForm(prevPersonalForm => {
        return {
            ...prevPersonalForm,
            [e.target.name]:e.target.value
        }
    })
} 

const handleSubmit = (event)=>{
    event.preventDefault()
    setPersonalData(prevPersonalData => {
        return [
            ...prevPersonalData,
            personalForm  ]
    })
}

console.log(personalData)

return(
    
    <>
    <h2>Personal Information</h2>
    <button onClick={handleCLick}>{toggle === false? "Show More": "Hide" }</button>
    {toggle && <div className="input-container">
        <form>
            <div>
                <label> Enter First Name:
                    <input type="text" placeholder="First Name" value={personalForm.firstName} name="firstName" onChange={handleChange}></input>    
                </label>
             </div>
             <div>
                <label> Enter Last Name:
                    <input type="text" placeholder="First Name" value={personalForm.lastName} name="lastName" onChange={handleChange}></input>    
                </label>
             </div>
             <div className="one-whole-grid-row">
                <label> Enter Address:
                    <input type="text" placeholder="Address" value={personalForm.address} name="address" onChange={handleChange}></input>    
                </label>
             </div>
             <div>
                <label> Enter age:
                    <input type="number" placeholder="age" value={personalForm.age} name="age" onChange={handleChange}></input>    
                </label>
             </div>
             <div>
                <label> Enter sex: <br/>
                   <select value={personalForm.gender} name="gender" onChange={handleChange} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                   </select>
                </label>
             </div>
             <div className="textarea">
                <label>Objective:
                    <input type="textarea" value={personalForm.objective} onChange={handleChange}></input>
                </label>
             </div>
             <div className="submit-button">
                 <button type="submit"onClick={handleSubmit}>Commit Change</button>
             </div>
         
        </form>

    </div>}
       
    </>
)}
export default Forms_personal