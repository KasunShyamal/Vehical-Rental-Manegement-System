import React, {useState} from "react";
import services from "../../rental_backend/models/services";


function Addservicedetails() {

    const [Dos, setdos] = useState("");
        const [Mileageatservice, setState] = useState("");
            const [PerformedBy, setState] = useState("");
                 const [Note, setState] = useState("");
    

    function sendData(e){
        e.preventDefault();
        
       

        axios.post("http://localhost:8092/services/add", services)
        .then(()=> {
            alert("service details add")
        
        }).catch((err)=> {
            alert(err)
        })
    }

    return(
        <div className = "container">
        <form onSubmit = {sendData}>
    <div className="form-group">
        <label for="dos">Dos</label>
        <input type="text" className="form-control" id="dos" placeholder="Enter dos"
        onChange= {(e) =>{

            setName(e.target.value);

        }} />
    </div>

    <div className="form-group">
        <label for="Mileageatservice">Mileageatservice</label>
        <input type="text" className="form-control" id="km" placeholder="Enter Mileageatservice"
         onChange= {(e) =>{

           
            
        }} />
    </div>

    <div className="form-group">
        <label for="name">perfoemedBy</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name"
        onChange= {(e) =>{

           

        }} />
    </div>    

    <div className="form-group">
        <label for="Note">Note</label>
        <input type="text" className="form-control" id="Note" placeholder="Enter Note"
        onChange= {(e) =>{

           

        }} />
    </div>    

    
    <button type="done" className="btn btn-primary">Done</button>
    </form>
    </div>
    )
}

export default Addservices;
