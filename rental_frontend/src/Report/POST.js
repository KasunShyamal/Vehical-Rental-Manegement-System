import React, { Component } from 'react';
import PDF from './PDF';
import './Post.css';

class Post extends Component {
    state = {
        id: '',
        name: '',
        title: '',
        content: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content || !this.state.id || !this.state.name){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Report</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('id')} name="id" type="text" placeholder="ID" className="form-control" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('name')} name="name" type="text" placeholder="Name" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Title" className="form-control" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Write reason of generate report" rows="9"></textarea>
                                                </div>
                                                <div className="form-submit1">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btnlg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} id={this.state.id} name={this.state.name}  />
                    )
                }
            </>
        );
    }
}

export default Post;
