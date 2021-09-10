import React from 'react'
import {useState} from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import MainScreen from '../../components/MainScreen'
import './Loginpage.css' 
import axios from "axios"

const Loginpage = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loding, setLoding] = useState(false)

    const submitHandler = async (e) =>{
        e.preventDefault()
        
        try {
            const config = {
                headers: {
                   "Content-type":"application/json" 
                }
            }

            setLoding(true)
            let reqBody ={
                Email:email,
                Password:password 
            }
            let  data = await axios.post('http://localhost:8092/api/customer/login',reqBody).
            then(function(response){
                if(response.data.UserType == "customer"){
                    props.history.push('/abc')

                }
                console.log(response, 'abcdefgh');
                return response;
            }); 

            /*const { data } = await axios.post('http://localhost:8092/api/customer/login',
            {
                email,
                password,
            },
            config
            );*/
            
        
            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoding(false)

        }
        catch(error){
            setError(error.response.data.message);
        };
      
    };

    return (
        <MainScreen title='LOGIN'>
        <div className='loginContainer'>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                value={email}
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}
             />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                value={password} 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            
            
                <Button  variant="primary" type="submit">
                Login
                </Button>
                
                <Button  className='btn' variant="primary" type="submit">
                 Staff Login
                </Button>
                
           
        </Form>
            <Row className="py-3">
                <Col>
                New Customer Or Partner? <Link to="/register">Register Here</Link>
                </Col>
            </Row>
        </div>
        </MainScreen>
    )
}

export default Loginpage
