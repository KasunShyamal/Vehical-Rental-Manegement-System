import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import { Alert } from '../../../services/Alert';
import vehicleValidations from '../../../validations/VehicleValidations';
//import dummy_image from "../../../assets/images/dummy_image.jpg"

class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            category: "",
    
        }
    }

    // Update Categories by fetching from datasbase
    componentDidMount() {
        // request to get vehicle by id
        axios.get(`http://localhost:8092/api/categories/${this.props.match.params.id}`).then(res => {
            let category = res.data;

            // request to get all categories

                this.setState({
                    id:category._id,
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

        const result = vehicleValidations({

            category: this.state.category,
        });

        if (result.status) {
           
                const formData = new FormData();
                
                formData.set("category", this.state.category);

                axios.put(`http://localhost:8092/api/categories/UpdateCategory/${this.state.id}`, formData).then(res => {
                    Alert("success", "Done!", "Vehicle Updated Successfully.");
                    this.setState({
                        

                        category: "",
                    
                    });

                    this.props.history.push("/admin/category")

                }).catch(err => {
                    Alert("error", "Something went wrong.", err)
                })
           
        } else {
            Alert("error", "Form Validation Error!", result.error)
        }

    }

    render() {
        return (
            <div className="container">
                <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <h4 className="card-title text-secondary mt-3">Update Vehicle</h4>
                                <hr classNameName="mb-3" />
                                <form onSubmit={(e) => this.submit(e)}>
                                    
                                   
                                     
                                    <div className="mb-3">
                                        <label for="category" className="form-label">Category</label>
                                        <input
                                            className="form-control"
                                            id="category"
                                            value={this.state.category}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <button type="submit" className="btn btn-success">Update Vehicle</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateCategory);