import React, { Component } from 'react';
import axios from "axios";
import { Alert } from '../../services/Alert';

import CategorySmallView from './CategorySmallView';
import styled from 'styled-components';
class CategoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            category: ""
        }
    }

    // Update Categories by fetching from datasbase
    updateCategories = () => {
        axios.get("http://localhost:8092/api/categories/").then(res => {
            this.setState({ categories: res.data });
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.updateCategories();
    }

    // Handle input feild
    onInputValueChange = (e) => {
        this.setState({ category: e.target.value });
    }

    // Add category
    createCategory = () => {
        axios.post("http://localhost:8092/api/categories/AddCategory", { category: this.state.category }).then(res => {
            this.setState({ category: "" });
            this.updateCategories();
            Alert("success", "Done!", "Category Created Successfully.");
        }).catch(err => {
            Alert("error", "Something went wrong.", err);
        });
    }

//component to return multiple elements.
// Fragments let you group a list of children without adding extra nodes to the DOM.
    render() {
        
        return <React.Fragment>
         <CreateContainer>
            <div className="container">
                <div className="card p-5 mt-5">
                    <div className={"row"}>
                        <div className="col-xs-12 col-sm-7">
                            
                            <h3 className={"text-secondary text-center"}>Create Category</h3>
                            <div class="mb-3">
                          
                                <label for="category" className="form-label">Category</label>
                                <input
                                    className="form-control"
                                    id="category"
                                    value={this.state.category}
                                    onChange={(e) => this.onInputValueChange(e)}
                                />
                            </div>
                            <button onClick={this.createCategory} className={"btn btn-primary"}>Create</button>
                        </div>
                        <div className={"col-xs-21 col-sm-5"}>
                            <h3 className={"text-secondary text-center"}>All Categories</h3>
                            {
                                (this.state.categories) ? <React.Fragment>
                                    {
                                        this.state.categories.map(cat => {
                                            return <CategorySmallView key={cat.category} category={cat} />
                                        })
                                    }
                                </React.Fragment> : <React.Fragment />
                            }
                        </div>
                    </div>
                </div>
              
            </div>
            </CreateContainer>
        </React.Fragment>
    }
}

export default CategoriesContainer;
const CreateContainer = styled.div`

.container{
    background:#f9fcfc;
    margin-top:30px;
    border: 1px solid  gray
}
.container{
    background:gray;
    margin-top:70px;
    border: 1px solid  gray;
    height:1300px
    width:1300px
   
}
.col-xs-12 col-sm-7{
    background:gray;
    margin-top:70px;
    border: 1px solid  gray;
}
#root{
    background-color:gray; 
}
`;
