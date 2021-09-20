import React, {useState} from "react";
import axios from "axios";

function AddStaff() {

    const [name, setName] = useState("");
    const [DoB, setDoB] = useState("");
    const [NIC, setNIC] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [ID, setID] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [Experience, setExperience] = useState("");
    const [HireDate, setHireDate] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [userType, setuserType] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newStaff = {
            name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType
        }

        axios.post("http://localhost:8092/Staff/add", newStaff)
        .then(()=> {
            alert("Staff member added")
        
        }).catch((err)=> {
            alert(err)
        })
    }

    return(
        <div className = "container">
            <form onSubmit = {sendData}>
                <div className="form-group">
                    <label for="name">Employee Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name"
                    onChange= {(e) =>{
                        setName(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="DoB">DoB</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter DoB"
                    onChange= {(e) =>{
                        setDoB(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="NIC">NIC</label>
                    <input type="nic" className="form-control" id="NIC" placeholder="Enter NIC"
                    onChange= {(e) =>{
                        setNIC(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="Address">Address</label>
                    <input type="text" className="form-control" id="Address" placeholder="Enter Address"
                    onChange= {(e) =>{
                        setAddress(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="name" placeholder="Enter Name"
                    onChange= {(e) =>{
                        setEmail(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="Phone">Phone</label>
                    <input type="phone" className="form-control" id="Phone" placeholder="Enter Phone"
                    onChange= {(e) =>{
                        setPhone(e.target.value);
                    }} />
                </div>       

                <div className="form-group">
                    <label for="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter gender"
                    onChange= {(e) =>{
                        setGender(e.target.value);
                    }} />
                </div>

                
                <div className="form-group">
                    <label for="ID">ID</label>
                    <input type="text" className="form-control" id="ID" placeholder="Enter ID"
                    onChange= {(e) =>{
                        setID(e.target.value);
                    }} />
                </div> 

                <div className="form-group">
                    <label for="JobTitle">JobTitle</label>
                    <input type="text" className="form-control" id="JobTitle" placeholder="Enter JobTitle"
                    onChange= {(e) =>{
                        setJobTitle(e.target.value);
                    }} />
                </div> 

                
                <div className="form-group">
                    <label for="Experience">Experience</label>
                    <input type="text" className="form-control" id="Experience" placeholder="Enter Experience"
                    onChange= {(e) =>{
                        setExperience(e.target.value);
                    }} />
                </div> 

    
                <div className="form-group">
                    <label for="HireDate">HireDate</label>
                    <input type="text" className="form-control" id="HireDate" placeholder="Enter HireDate"
                    onChange= {(e) =>{
                        setHireDate(e.target.value);
                    }} />
                </div> 

                
                <div className="form-group">
                    <label for="UserName">UserName</label>
                    <input type="text" className="form-control" id="UserName" placeholder="Enter UserName"
                    onChange= {(e) =>{
                        setUserName(e.target.value);
                    }} />
                </div>  

  
                <div className="form-group">
                    <label for="Password">Password</label>
                    <input type="password" className="form-control" id="Password" placeholder="Enter Password"
                    onChange= {(e) =>{
                        setPassword(e.target.value);
                    }} />
                </div>   

                <div className="form-group">
                    <label for="userType">userType</label>
                    <input type="userType" className="form-control" id="userType" placeholder="Enter userType"
                    onChange= {(e) =>{
                        setuserType(e.target.value);
                    }} />
                </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
     )
}

export default AddStaff;