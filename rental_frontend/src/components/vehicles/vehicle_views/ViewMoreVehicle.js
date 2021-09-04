import React, { Component } from 'react';
import axios from 'axios';

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
            <div className="container mt-5">
                {
                    this.state.vehicle ? <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={this.state.vehicle.imageURL} class="img-fluid rounded-start" alt="..." />
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
                    </div> : <React.Fragment />
                }
            </div>
        );
    }
}

export default ViewMoreVehicle;