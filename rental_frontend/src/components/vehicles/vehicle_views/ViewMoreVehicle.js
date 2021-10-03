import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
class ViewMoreVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: null
        }
    }


    // Get all vehicle by id
    componentDidMount() {
        axios.get(`http://localhost:8092/api/vehicles/${this.props.match.params.id}`).then(res => {
            this.setState({ vehicle: res.data });
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
            <CreateContainer>
            <div className="container mt-5">
                {
                    this.state.vehicle ? <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={this.state.vehicle.imageURL} class="img-fluid rounded-start" alt="..." style={{width:"100%"}} />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body px-5">
                                    <h3 class="card-title">{this.state.vehicle.brand}</h3>
                                    <hr />

                                    <h6 class="text-dark">Vehicle Number</h6>
                                    <h6 class="text-secondary">{this.state.vehicle.vehicleNumber}</h6>

                                    <h6 class="text-dark">Number of Sheets</h6>
                                    <h6 class="text-secondary">{this.state.vehicle.sheetCount}</h6>

                                    <h6 class="text-dark">Condition</h6>
                                    <h6 class="text-secondary">{this.state.vehicle.condition}</h6>

                                    <h6 class="text-dark">Description</h6>
                                    <h6 class="text-secondary">{this.state.vehicle.description}</h6>

                                    <h3 class="text-danger text-end">RS: {this.state.vehicle.price} /-</h3>

                                    <div className="row mt-5">
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary">Rent</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> : <React.Fragment />//return multiple elements
                }
            </div>
            </CreateContainer>
        );
    }
}

export default ViewMoreVehicle;

const CreateContainer = styled.div`

  h4{
    front-color: black
  }

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