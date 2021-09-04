import React, { Component } from 'react'
import axios from "axios"

import VehicleSmallView from "./VehicleSmallView"

class AllVehiclesForUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }

    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8080/api/vehicles/").then(res => {
            this.setState({ vehicles: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (

            <div className="container mt-5">
                <div className="row">
                    <h3 className={"text-secondary text-center mb-5"}>All Vehicles</h3>
                    <React.Fragment>
                        {
                            this.state.vehicles.map(vehicle => {
                                return <VehicleSmallView vehicle={vehicle} count={4} />
                            })
                        }
                    </React.Fragment>
                </div>
            </div>

        );
    }
}

export default AllVehiclesForUser;