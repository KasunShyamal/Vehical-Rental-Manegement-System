import React, { Component } from 'react'
import axios from "axios"

import VehicleSmallView from "./VehicleSmallView"
const isBackgroundRed = true;
class AllVehiclesForUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    };
    
    // Get all packages from datasbase
    componentDidMount() {
        axios.get("http://localhost:8092/api/vehicles/").then(res => {
            this.setState({ vehicles: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        <div
      style={{
        backgroundColor: isBackgroundRed ? 'red' : 'blue',
      }}
    />
        return (
       
            <div className="container">
                <div className="row">
                    <h2 className={"text-secondary text-center mb-5"}>All Vehicles</h2>
                    <React.Fragment>
                   
                        {
                            this.state.vehicles.map(vehicle => {
                                return <VehicleSmallView vehicle={vehicle} count={3} />
                            })
                        }
                    </React.Fragment><br/>
                    <br/>
                </div>
                <br/>
                <br/>
            </div>

        );
    }
}

export default AllVehiclesForUser;