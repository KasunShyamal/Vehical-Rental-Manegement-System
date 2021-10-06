import axios from "axios";
import React,{Component, Components} from "react";


// 


export default class servicepage extends Component{
  constructor(props){
    super(props);

    this.state={
      service:[]

    };
  
  }
  componentDidMount(){
    this.retrieveservice();
  }
  retrieveservice(){
    axios.get("http://localhost:8092/service/").then(res =>{
      if(res.data.success){
        this.setState({
          service:res.data.existingService
        });
        console.log(this.state.service)
      }
    });
  }
  onDelete = (id) =>{

    axios.delete(`http://localhost:8092/service/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrieveservice();
    })
  }

filterData(service, searchkey){
  
  const result = service.filter((service) => service.vehicleNo.includes(searchkey));

  
  
  this.setState({service: result });
}

 handleTextSearch = (e) => {
  const searchkey= e.currentTarget.value;

  axios.get("http://localhost:8092/service/").then((res) => {
      if(res.data.success){

        this.filterData(res.data.existingService, searchkey)
      }
    });


}

 

  render(){
    return(
      <div className="bgim">
       <div className="container">
         <div className="row">
           <div className="col-lg-9 mt-2 mb-2">
             <h1 className="S1">Service details</h1>
           </div>
           <div>
        
      </div>
           
           <div className="col-lg-3 mt-2 mb-2">
             <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchQuery"
             onChange={this.handleTextSearch}>

             </input>
           </div>
          
       </div>
       



  
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">VehicleNO</th>
              <th scope="col">Date of Service</th>
              <th scope="col">Mileage at service(KM)</th>
              <th scope="col">Performed By</th>
              <th scope="col">Note</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.service.map((service) =>
            <tr>
              <td>{service.vehicleNo}</td>
              <td>{service.dos}</td>
              <td>{service.Mileageatservice}</td>
              <td>{service.PerformedBy}</td>
              <td>{service.Note}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${service._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#"  onClick={() =>this.onDelete(service._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;delete
                </a>
              </td>
            </tr>
           )}
          </tbody>
        </table>
        <button className="btn btn-primary"><a href="/nav" style={{textDecoration:'none' ,color:"black"}}>ADD SERVICE DETAILS</a></button>
            
         
        </div>
        </div>
    )
  }
}