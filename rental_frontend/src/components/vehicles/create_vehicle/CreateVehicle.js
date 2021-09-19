import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import { Alert } from '../../../services/Alert';
import vehicleValidations from '../../../validations/VehicleValidations';
import dummy_image from "../../../assets/images/dummy_image.jpg";
import dummy from "./back1.jpg";
class CreateVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            brand: "",
            price: "",
            vehicleNumber: "",
            milage: "",
            sheets: "",
            condition: "",
            description: "",
            category: "",
            categories: [],
        }
    }

    // Update Categories by fetching from datasbase
    componentDidMount() {
        axios.get("http://localhost:8092/api/categories/").then(res => {
            this.setState({ categories: res.data });
        }).catch(err => {
            console.log(err);
        });
    }


    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    // Handle input feild
    onSelectValueChange = (e) => {
        let val = e.target.value;
        this.setState({ [e.target.id]: (val === "--Select Category--") ? "" : val });
    }

    handleChangeFile = (e) => {
        if (e.target.files.length) {
            const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            };
            this.setState({ image: img });
        }
    };

    // Function for Check Status code
    handleError = (err) => {
        if (err) {
            if (err.response) {
                if (err.response.status === 404) {
                    Alert("error", "Something went wrong!", err.response.data)

                }
            } else {
                Alert("error", "Something went wrong.", err)

            }
        }
    }


    // Function for create vehicle
    submit = (e) => {

        e.preventDefault();

        const result = vehicleValidations({
            brand: this.state.brand,
            vehicleNumber: this.state.vehicleNumber,
            price: this.state.price,
            milage: this.state.milage,
            sheets: this.state.sheets,
            condition: this.state.condition,
            description: this.state.description,
            category: this.state.category,
        });

        if (result.status) {
            if (this.state.image) {
                const formData = new FormData();
                formData.append("photo", this.state.image.raw);
                formData.set("brand", this.state.brand);
                formData.set("vehicleNumber", this.state.vehicleNumber);
                formData.set("price", this.state.price);
                formData.set("milages", this.state.milage);
                formData.set("sheetCount", this.state.sheets);
                formData.set("condition", this.state.condition);
                formData.set("description", this.state.description);
                formData.set("category", this.state.category);

                console.log("formData", this.state);

                axios.post("http://localhost:8092/api/vehicles/AddVehicle", formData).then(res => {
                    Alert("success", "Done!", "Vehicle Created Successfully.");
                    this.setState({
                        image: null,
                        brand: "",
                        vehicleNumber: "",
                        price: "",
                        milage: "",
                        sheets: "",
                        condition: "",
                        description: "",
                        category: "",
                        categories: [],
                    });
                    this.props.history.push("/admin/vehicles")
                }).catch(err => {
                    this.handleError(err);
                })
            } else {
                Alert("error", "Form Validation Error!", "Please upload image.")
            }

        } else {
            Alert("error", "Form Validation Error!", result.error)
        }

    }

    render() {
        return (
            
            <CreateContainer>
            <div  styles={{ backgroundImage:`url(${dummy})`,backgroundRepeat: 'no-repeat',
  width:'250px'  ,height:'1230px'}}>  
            <div className="container">
              <div className="card mb-3 mt-5">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={this.state.image ? this.state.image.preview : dummy_image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <h4 className="card-title text-secondary mt-3">Create Vehicle</h4>
                                <hr class="" />
                                
                                <form onSubmit={(e) => this.submit(e)}>
                                    <div className="mb-3">
                                        <label for="brand" className="form-label">Vehicle Brand</label>
                                        <input
                                            className="form-control"
                                            id="brand"
                                            value={this.state.brand}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="vehicleNumber" className="form-label">Vehicle Number</label>
                                        <input
                                            className="form-control"
                                            id="vehicleNumber"
                                            value={this.state.vehicleNumber}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="price" className="form-label">Rent Price</label>
                                        <input
                                            className="form-control"
                                            id="price"
                                            type="number"
                                            value={this.state.price}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="milage" className="form-label">Milage</label>
                                        <input
                                            className="form-control"
                                            id="milage"
                                            type="number"
                                            value={this.state.milage}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="sheets" className="form-label">Sheet Count</label>
                                        <input
                                            className="form-control"
                                            id="sheets"
                                            type="number"
                                            value={this.state.sheets}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="condition" className="form-label">Condition</label>
                                        <input
                                            className="form-control"
                                            id="condition"
                                            value={this.state.condition}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <input
                                            className="form-control"
                                            id="description"
                                            value={this.state.description}
                                            onChange={(e) => this.onInputValueChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="category" className="form-label">Category</label>
                                        <select
                                            value={this.state.category}
                                            onChange={(e) => this.onSelectValueChange(e)}
                                            class="form-select"
                                            id="category">
                                            <option selected value={"--Select Category--"}>--Select Category--</option>
                                            {this.state.categories && this.state.categories.map(cat => {
                                                return <option key={cat._id} value={cat.category}>{cat.category}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <div className="mb-3">
                                            <label for="formFile" className="form-label">Vehicle Image</label>
                                            <input
                                                accept="image/*"
                                                className="form-control"
                                                type="file"
                                                id="formFile"
                                                onChange={(e) => this.handleChangeFile(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mx-auto">
                                        <button type="submit" className="btn btn-primary">Create Vehicle</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </CreateContainer>
         
        );
    }
}

export default withRouter(CreateVehicle);
const CreateContainer = styled.div`
  img{
   
  }
  h4{
    front-color: black
  }
height:90px;
.nav-link{
color:white !important;
&:hover{
    background-image: linear-gradient(to right top, #3f7f85, #578e9a, #6f9dad, #89acbf, #a2bbd0, #9eb7cb, #99b2c7, #95aec2, #7396a6, #527e89, #34666b, #194f4c);
}
}
.container{
    background:gray;
    margin-top:70px;
    border: 1px solid  gray;
    height:1300px
    width:1300px
   
}
.imag{
    background-image: url(../../../assets/images/dummy_image.jpg);
  }
  hr{
    height: 10px;
    border: 1;
    box-shadow: inset 0 9px 9px -3px rgba(11, 99, 184, 0.8);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    }
`;