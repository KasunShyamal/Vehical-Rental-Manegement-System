import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { createAddAction } from '../../actions/addActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Form } from "react-bootstrap";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CreateAdd = ({ history }) => {

  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Email, setEmail] = useState("");
  const [ConNumber, setConNumber] = useState("");
  const [Description, setDescription] = useState("");
  const [Location, setLocation] = useState("");



  const dispatch = useDispatch();

  const createAdd = useSelector((state) => state.createAdd);
  const { loading, error, add } = createAdd;

  console.log(add);

  const resetHandler = () => {
    setName("");
    setType("");
    setEmail("");
    setConNumber("");
    setDescription("");
    setLocation("");

  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Name || !Type || !Email || !ConNumber || !Description || !Location) return;
    dispatch(createAddAction(Name, Type, Email, ConNumber, Location, Description));

    resetHandler();
    history.push("/PartnerHome");
  };

  useEffect(() => {}, []);

    return (
    <MainScreen title='Add new Advertisement'>
          <Card>
        <Card.Header>Create a new Advertisement</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <Error variant="danger">{error}</Error>}
            <Form.Group controlId="Name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={Name}
                placeholder="Enter the Name of the Business"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={Description}
                placeholder="Enter the Description"
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            

            <Form.Group controlId="content">
              <Form.Label>Type of the Business</Form.Label>
              <Form.Control
                type="text"
                value={Type}
                placeholder="Hotel , Service Senter"
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="Email"
                value={Email}
                placeholder="abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="Number"
                value={ConNumber}
                placeholder="Contact Number"
                onChange={(e) => setConNumber(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group controlId="content">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={Location}
                placeholder="Enter your Business's Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          
            <br />
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Add
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        
      </Card>
    </MainScreen>
    )
}

export default CreateAdd
