import React from 'react'
import {useState} from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import MainScreen from '../../components/MainScreen'
import './Loginpage.css' 

const Loginpage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loding, setLoding] = useState(false)

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log(email, password);
    }

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
