import React from 'react';
import Pdf from "react-to-pdf";
import './Post.css';
import { Link } from "react-router-dom";
const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h6>{props.id}</h6>
        <h6>{props.name}</h6>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div class="form-submit">
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-success">Download PDF</button>}
      </Pdf>
      &nbsp; &nbsp;&nbsp;&nbsp;<Link to={`/post`} className="btn btn-warning">Back to Form</Link>
      </div>
    </>
  );
}

export default PDF;