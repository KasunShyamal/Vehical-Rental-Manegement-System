import React from 'react';
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';

const VehicleActions = (props) => {
    const history = useHistory();
    const vehicle = props.vehicle;

    // Function for redirect
    const handleClick = (path) => {
        history.push(path);
    }

    // Function for delete vehicle
    const deleteVehicle = () => {
        Swal.fire({
            title: 'Are you want to delete vehicle',
            text: "Note that ths process can not be revert.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/api/vehicles/DeleteVehicle/${vehicle._id}`)
                    .then(res => {
                        Swal.fire(
                            'Done!',
                            'Vehicle deleted successfully!',
                            'success'
                        )
                        props.updateContent();
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
    }


    return (<React.Fragment>
        <tr>
            <th scope="row">{vehicle.vehicleNumber}</th>
            <td>{vehicle.brand}</td>
            <td>{vehicle.price}</td>
            <td>{vehicle.category}</td>
            <td>{vehicle.milages}</td>
            <td>{vehicle.sheetCount}</td>
            <td>{vehicle.condition}</td>
            {
                !props.isGen ? <td>
                    <button onClick={() => handleClick(`/admin/vehicles/UpdateVehicle/${vehicle._id}`)} type="button" class="btn btn-success m-">Update</button>
                    <button onClick={deleteVehicle} type="button" class="btn btn-danger m-1">Delete</button>
                </td> : <React.Fragment />
            }
        </tr>
    </React.Fragment>);
}

export default VehicleActions;