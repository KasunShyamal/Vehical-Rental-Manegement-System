import React, {useState , useEffect} from "react";
import axios from "axios";
import '../CSS/AddStaff.css';
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import './Background.css';
import {Button} from "reactstrap";


function AllStaff() {

	const [staffs, setStaffs] = useState([]);

//delete member by ID
const deletemember = id => {
	axios.delete(`http://localhost:8092/Staff/delete/${id}`)
	.then(res => alert(res.data))
	setStaffs(staffs.filter(elem => elem._id !== id))
}


useEffect(()=>{
        function getStaffs() {
            axios.get("http://localhost:8092/Staff/").then((res)=> {
            console.log(res)     
            setStaffs(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }
        getStaffs();
    }, [setStaffs])

  console.log("check",setStaffs);


  
  


    return(
		<div className="backgroundImage">
		<><><>
			<Heading />
		</>
		</>
		
		<div>
			<div className="container">
				<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Job Title</th>
								<th scope="col">ID</th>
								<th scope="col">Phone No.</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
								{staffs.map(staffs => <tr>
								<td>{staffs.name}</td>
								<td>{staffs.JobTitle}</td>
								<td>{staffs.ID}</td>
								<td>{staffs.Phone}</td>
								<td>
								
										<Link color="warning" className="btn btn-warning mr-1" to={`update/${staffs._id}`}> <i className="fas fa-edit"></i>&nbsp;View</Link>&nbsp;&nbsp;
										<Button onClick ={() => deletemember(staffs._id)} color="danger"> <i className="fas fa-trash-alt"></i>&nbsp;Delete</Button>&nbsp;&nbsp;
										<Link color="green" className="btn btn-success" to={`/post`}>Genarate Report</Link>
									
								</td>		
							</tr>
							)}
						</tbody>
					</table>
			</div>
 
	</div>
				
				</>
</div>        

		
		)
	}
export default AllStaff;