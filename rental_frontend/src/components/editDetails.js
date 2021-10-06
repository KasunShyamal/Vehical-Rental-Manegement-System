import axios from "axios";
import React, {Component} from "react";

export default class editDetails extends Component{
    
    constructor(props){
        super(props);
        this.state={
            vehicleNo:"",
            dos:"",
            Mileageatservice:"",
            PerformedBy:"",
            Note:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const{vehicleNo,dos,Mileageatservice,PerformedBy,Note} = this.state;
   
        const data={
            vehicleNo:vehicleNo,
            dos:dos,
            Mileageatservice:Mileageatservice,
            PerformedBy:PerformedBy,
            Note: Note,
        }
        console.log(data)

        axios.put(`http://localhost:8092/service/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("update successfully")
                this.setState(
                    {
                        vehicleNo:"",
                        dos:"",
                        Mileageatservice:"",
                        PerformedBy:"",
                        Note:""

                    }
                )
            }
        })
    }



    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8092/service/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    vehicleNo : res.data.service.vehicleNo,
                    dos : res.data.service.dos,
                    Mileageatservice : res.data.service.Mileageatservice,
                    PerformedBy : res.data.service.PerformedBy,
                    Note : res.data.service.Note
                });
                console.log(this.state.service);
            }
        });
    }
    
    render(){
        return(
            <div className="bgim">
            <header>
           <div class="overlay">
       <h1 className="S1">Vehicle Service AND Maintain</h1>
       <h3 className="S1">UPDATE VEHICLE DETAILS</h3>
           <br/>
       
               </div>
       </header>
       <form >
         
         <div class="container">
           <label for="Vehiclenumber" class="form-label">VehicleNO</label>
           <input type="text"
            className="form-control" 
            
          value={this.state.vehicleNo}
                onChange={this.handleInputChange}
        
       />
          
         </div>
         <div className="container">
           <label for="Dos" className="form-label">Date</label>
           <input type="date"
            className="form-control" 
            id="Dos" 
            value={this.state.dos}
            onChange={this.handleInputChange}
        />
           
         </div>
       
         <div class="container">
           <label for="MIleageatservice" class="form-label">Mileageatservice</label>
           <input type="text"
            class="form-control" 
            id="MIleageatservice"
             placeholder="xxxxKM" 
             value={this.state.Mileageatservice}
             onChange={this.handleInputChange}
       />
         </div>
       
         <div class="container">
           <label for="Performedby" class="form-label">PerformedBy</label>
           <input type="text" 
           class="form-control"
            id="Performedby"
            placeholder="performeddby"
             value={this.state.PerformedBy}
            onChange={this.handleInputChange}/>
         </div>
       
         <div class="container">
         <p>Note </p>
                 <textarea value={this.state.Note}
                          onChange={this.handleInputChange} ></textarea>
         </div>
       
         <div class="container">
         <button className="btn btn-primary" 
         type="submit"
          onClick={this.onSubmit}>
         <i className="far fa-check-squre"></i>
         &nbsp; UPDATE

        </button>      
           </div>
       </form>
       
          
            
           </div>
        );
    }
}