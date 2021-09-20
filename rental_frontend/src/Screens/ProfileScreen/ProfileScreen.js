import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateUserProfile } from '../../actions/userActions'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'


const ProfileScreen = () => {

     const [Name, setName] = useState("");
     const [Email, setEmail] = useState("");
     const [pic, setPic] = useState("");
     const [Password, setPassword] = useState("");
     const [ConfirmPassword, setConfirmPassword] = useState("");
     const [Address, setAddress] = useState("");
     const [Phone, setPhone] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading, error, success} = userUpdate;

    const history = useHistory();

    useEffect(() => {
        if(!userInfo){
            history.push("/");
        }
        else{
            setName(userInfo.data.Name)
            setEmail(userInfo.data.Email)
            setPic(userInfo.data.pic)
            setAddress(userInfo.data.Address)
            setPhone(userInfo.data.Phone)

        }
    }, [history, userInfo])

    const submitHandler = (e) =>{
        e.preventDefault();

        if(Password === ConfirmPassword){
        dispatch(updateUserProfile({ Name, Email, Password, pic, Address, Phone } ));
        }
    };


    return (
        <MainScreen title = "Edit Your Profile">
            <div>
              <Row className="profileContainer">
                    <Col md={6}>
                        < Form onSubmit={submitHandler}>
                            {loading && <Loading />}
                            {success && (
                                <Error variant="success">
                                    Updated Successfully
                                </Error>
                            )}
                        <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
                type="Name" 
                value={Name}
                placeholder="Your First and Last Name" 
                onChange={(e) => setName(e.target.value)}
             />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="Email" 
                value={Email}
                placeholder="Email Address" 
                onChange={(e) => setEmail(e.target.value)}
             />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                value={Password} 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
                type="password" 
                value={ConfirmPassword} 
                placeholder="Confirm Password" 
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
                type="Phone" 
                value={Phone} 
                placeholder="Modile Number" 
                onChange={(e) => setPhone(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control 
                type="Address" 
                value={Address} 
                placeholder="Address" 
                onChange={(e) => setAddress(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="pic">
            <Form.Label>Choose Your Profile Picture</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              lable="Upload Your Picture Here"
              custom
              onChange={(e) => setPic(e.target.files[0].name)}
              
              
            />
            
            </Form.Group> <br/>
            <Button  variant="success" type="submit">
                Update
                </Button>
             </Form>

             
            </Col>
                     <Col style = {{
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                    }}>
                       <img src={pic} alt={Name} className="profilePic" /> 
                    </Col>
              </Row>  
            </div> 
        </MainScreen>
    )
}

export default ProfileScreen
