import React from 'react'

const CategorySmallView = (props) => {

    const category = props.category;

    const styles = {
        btnWidth: {
            width: "100%"
        }
    }

    return <div className="card p-5 m-3">
        <div className="row align-items-center">
            <div className="col-7">
                <h3 className="text-dark">{category.category}</h3>
            </div>
            <div className="col-5">
                <button className={"btn btn-success mb-3 btn-block"} style={styles.btnWidth}>Update</button>
                <button className={"btn btn-danger btn-block"} style={styles.btnWidth}>Delete</button>
            </div>
        </div>
    </div>
}

export default CategorySmallView;