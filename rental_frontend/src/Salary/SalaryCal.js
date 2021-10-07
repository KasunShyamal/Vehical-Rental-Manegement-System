import { useState } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

function SalaryCal() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <h1>Salary Slip</h1>
        <br/><br/>
        <label for="name"><b>Name</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  placeholder="Name"
        />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <label for="ID"><b>ID</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"  placeholder="ID"
        />
          <br/><br/> <br/><br/>
      <div className="number-inputs">
        <label for="name"><b>Basic Salary</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
          <br/><br/>
        <label for="name"><b>OT salary</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

          <br/><br/>
      <label for="salary"><b>Total Salary</b></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
      <button onClick={calculateTotal} className="btn btn-success">calculate</button>
        <br/> <br/>
      <h3>{total}</h3>
    </div>
  );
}

export default SalaryCal;