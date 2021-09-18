import React from 'react'
import Swal from "sweetalert2";
import axios from 'axios';
import { useHistory } from "react-router-dom";
const CategorySmallView = (props) => {
     const history = useHistory();
 // Function for redirect
 const handleClick = (path) => {
    history.push(path);
}
    const category = props.category;

    const styles = {
        btnWidth: {
            width: "100%"
        }
    }
 // Function for delete vehicle
 const deleteCategory = () => {
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
            axios.delete(`http://localhost:8092/api/categories/DeleteCategory/${category._id}`)
                .then(res => {
                    Swal.fire(
                        'Done!',
                        'Category deleted successfully!',
                        'success'
                    )
                    props.updateContent();
                }).catch(err => {
                    console.log(err)
                })
        }
    })
}


    return <div className="card p-5 m-3">
        <div className="row align-items-center">
            <div className="col-7">
                <h3 className="text-dark">{category.category}</h3>
            </div>
            <div className="col-5">
            
            <button onClick={() => handleClick(`/UpdateCategory/${category._id}`)} type="button" className={"btn btn-success mb-3 btn-block"} style={styles.btnWidth}>Update</button>
                <button  onClick={deleteCategory}className={"btn btn-danger btn-block"} style={styles.btnWidth}>Delete</button>
            </div>
        </div>
    </div>
}

export default CategorySmallView;