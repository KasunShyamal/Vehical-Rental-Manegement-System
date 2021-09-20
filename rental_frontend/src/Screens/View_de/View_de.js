import React, { useEffect } from 'react'
import { Card, Button, Badge, Accordion,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cusList } from '../../actions/viewDetailsActions'
import MainScreen from '../../components/MainScreen'
import Loading from '../../components/Loading'
import Error from '../../components/Error'


const View_de = () => {
    const  dispatch = useDispatch();

    const customerList = useSelector(state => state.customerList)
    const{loading, cusInfo, error} = customerList;

    const deleteHandler = (id) =>{
        if(window.confirm("Are You Sure")){

        }
    };

    useEffect(() => {
        dispatch(cusList());
    }, [dispatch]);


    return (
       <MainScreen title='View Your Customers'>
           {console.log(cusInfo, "abcd")}
           <Link to = "#">
           <Button>View My Partners</Button>
           </Link><hr />
            {error && <Error variant="danger">{error}</Error>}
           {loading && <Loading/>}


             {cusInfo && cusInfo.length>0 ? 
                cusInfo.map((customer) => (

                <Accordion >
                    <Card style={{margin:10}} key={customer._id}>
                    <Card.Header style={{display: "flex"}}>
                        <span
                        style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18,
                        }}>
                          <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {customer.title}
                    </Accordion.Toggle>
                        </span> 
                        <div>
                            <Button variant="danger" className="mx-2"
                                     onClick={() => deleteHandler()}>
                                 Remove 
                            </Button>
                        </div>
                       
                    </Card.Header>
                    
                    <Card.Body>
                        <Badge bg="success">
                            NIc No : {customer.NIC}
                        </Badge>
                    <blockquote className="blockquote mb-0">
                        <p>
                          Emain Address: {customer.Email} <br />
                          Address: {customer.Address} <br/>
                          Mobile Number: {customer.Phone} <br/>
                          
                        </p>

                    </blockquote>
                    </Card.Body>
                   
                </Card>
                    </Accordion>)): null }

       </MainScreen>
    )
}

export default View_de
