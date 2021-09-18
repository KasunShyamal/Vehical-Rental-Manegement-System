import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import styled from 'styled-components';
import { Alert } from '../../services/Alert';
import Validations from '../../validations/categoryvalidation';
//import dummy_image from "../../../assets/images/dummy_image.jpg"

class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            category:""
        }
    }
 
    // Update Categories by fetching from datasbase
    componentDidMount() {
        // request to get vehicle by id
        axios.get(`http://localhost:8092/api/categories/${this.props.match.params.id}`).then(res => {
            let category = res.data;

            // request to get all categories
          
                this.setState({
                    id: category._id,
                    category: category.category,
                   
                });
            }).catch(err => {
                console.log(err);
            });

        
    }


    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }


   

    // Function for update vehicle
    submit = (e) => {



        e.preventDefault();

        console.log(this.state);

        const result = Validations({

            category: this.state.category,
        });
        if (result.status) {
                const formData = new FormData();
                
                formData.set("category", this.state.category);
               
                axios.put(`http://localhost:8092/api/categories/UpdateCategory/${this.props.match.params.id}`, formData).then(res => {
                    Alert("success", "Done!", "Vehicle Updated Successfully.");
                    this.setState({
                        category: "",
                    });

                    this.props.history.push("admin/Categories")

                }).catch(err => {
                    Alert("error", "Something went wrong.", err)
                })
            } else {
                Alert("error", "Form Validation Error!")
            }

      
}
    render() {
        return (
            <CreateContainer>
            <div className="container">
             
                        <div className="col-md-7">
                            <br/>
                                <form onSubmit={(e) => this.submit(e)}>
                                    <br/>
                                    <h3>Edit Category</h3>
                                    <hr classNameName="mb-3" />
                                    
                                        <label htmlFor="authorname">Category Name</label>
                                        <input
                                            className="form-control"
                                            id="category"
                                            value={this.state.category}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                        <br/>
                                    
                                        <button type="submit" className="btn btn-success">Update Categories</button>
                                    
                                </form>
                        </div>
                        </div>
                     
          
                     
                   
                 </CreateContainer>
          
        );
    }
}

export default withRouter(UpdateCategory);
const CreateContainer = styled.div`
input[type=submit] {
    width: 10%;
    background-color: #4CAF50;
    color: white;
    padding: 1px 2px;
    margin: 56px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
    margin-top:67px;
  }


`;