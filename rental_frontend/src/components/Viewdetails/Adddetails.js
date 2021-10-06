import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './home.css'


function Adddetails(){

  const [vehicleNo, setVehicleNO] = useState("");
  const [dos, setDos] = useState("");
  const [Mileageatservice, setMileageatservice] = useState("");
  const [PerformedBy, setPerformedby] = useState("");
  const [Note, setNote] = useState("");

  function sendData(e){
    e.preventDefault();

    const newadddetails ={
      vehicleNo,
      dos,
      Mileageatservice,
      PerformedBy,
      Note
    }

    axios.post("http://localhost:8092/service/add",newadddetails).then(()=>{
      alert("details add")
    }).catch((err)=>{
      alert(err)
    })
  }

   


return(
   <div className="bgim">
     <header>
	<div class="overlay">
<h1 className="S1">Vehicle Service AND Maintain</h1>
<h3 className="S1">Reasons for Choosing US</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
	<br/>

		</div>
</header>
<form onSubmit={sendData}>
  
  <div class="container">
    <label for="Vehiclenumber" class="form-label">VehicleNO</label>
    <input type="text" className="form-control" id="Vehiclenumber"  placeholder="CAG-xxxx" onChange={(e) => 
setVehicleNO(e.target.value)
} 
/>
   
  </div>
  <div className="container">
    <label for="Dos" className="form-label">Date</label>
    <input type="date" className="form-control" id="Dos" required onChange={(e) => 
   setDos(e.target.value)
} />
   
  </div>

  <div class="container">
    <label for="MIleageatservice" class="form-label">Mileageatservice</label>
    <input type="text" class="form-control" id="MIleageatservice" placeholder="xxxxKM" onChange={(e) => 
   setMileageatservice(e.target.value)
} />
  </div>

  <div class="container">
    <label for="Performedby" class="form-label">PerformedBy</label>
    <input type="text" class="form-control" id="Performedby"placeholder="perforedby" onChange={(e) => 
   setPerformedby(e.target.value)}/>
  </div>

  <div class="container">
  <p>Note </p>
          <textarea onChange={(e) => 
   setNote(e.target.value)} ></textarea>
  </div>

  <div class="container">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

   
     
    </div>


)
}


export default Adddetails ;
