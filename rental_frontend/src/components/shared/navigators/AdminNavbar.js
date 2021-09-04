import React from 'react';
import { useHistory } from "react-router-dom";


const AdminNavbar = () => {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav text-center">
                    <li onClick={() => handleClick("/")} className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    
                    <li onClick={() => handleClick("/admin/vehicles/")} className="nav-item active">
                        <a className="nav-link" href="#">Vehicles</a>
                    </li>
                    <li onClick={() => handleClick("/admin/categories/")} className="nav-item active">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default AdminNavbar;