import React from 'react'
import { useHistory } from "react-router-dom";

const PackageSmallView = (props) => {

    const vehicle = props.vehicle;
    const count = props.count;

    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (

        <div className={`col-xs-12 col-sm-6 col-md-${count}`}>
            <div class="card">
                <img src={vehicle.imageURL} class="card-img-top" alt={vehicle.brand} />
                <div class="card-body">
                    <h5 class="card-title text-center">{vehicle.brand}</h5>
                    <h6 class="card-title">Sheet Count: {vehicle.sheetCount}</h6>
                    <p class="card-text">{vehicle.condition}</p>
                    <h4 class="card-text text-end text-danger mt-3 mb-3">RS: {vehicle.price}/-</h4>
                    <div class="card-footer">
                        <div class="row text-center">
                            <div className="col-6">
                                <button onClick={() => handleClick(`/vehicles/${vehicle._id}`)} type="button" class="btn btn-outline-primary">View</button>
                            </div>
                            <div className="col-6">
                                <button onClick={() => handleClick(`/vehicles/${vehicle._id}`)} type="button" class="btn btn-outline-success">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageSmallView;