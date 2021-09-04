import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios"
import ReactToPrint from 'react-to-print';

import VehicleActions from './VehicleActions';

class AllVehiclesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            filterdVehicles: [],
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8092/api/vehicles/").then(res => {
            this.setState({
                vehicles: res.data,
                filterdVehicles: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all packages from datasbase
    componentDidMount() {
        this.updateContent();
    }

    // Function for search vehicles
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdVehicles = [];

        this.state.vehicles.forEach(vehicle => {
            if (vehicle.vehicleNumber.toLowerCase().includes(searchTag) || vehicle.brand.toLowerCase().includes(searchTag)) {
                filterdVehicles.push(vehicle)
            }
        })

        this.setState({
            filterdVehicles,
            searchTag
        });

    }

    getRedirectButton = () => {
        return <button type="button" onClick={() => { this.props.history.push("/admin/vehicles/CreateVehicle") }} class="btn btn-outline-primary m-2">Create Vehicle</button>
    }


    render() {
        return (

            <div className="container-fluid mt-5">
                <div className="row">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </div>
                    </nav>

                    {
                        this.state.isGen ? <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <ReactToPrint

                                    documentTitle={"All Packages"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" class="btn btn-primary">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-danger m-2">Cancel</button>
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-secondary">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                        <h3 className={"text-secondary text-center mb-5"}>All Vehicles</h3>
                        <div class="table-responsive">
                            <table class="table table-hover text-center">
                                <thead className={"table-dark"}>
                                    <tr>
                                        <th scope="col">Vehicle Number</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Milages</th>
                                        <th scope="col">Sheets</th>
                                        <th scope="col">Condition</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdVehicles.map(vehicle => {
                                                return <VehicleActions key={vehicle._id} vehicle={vehicle} isGen={this.state.isGen} updateContent={this.updateContent} />
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default withRouter(AllVehiclesContainer);