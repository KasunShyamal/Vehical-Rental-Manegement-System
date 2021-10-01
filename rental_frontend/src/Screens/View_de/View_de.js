import React, { useEffect, useState } from 'react'
import { Card, Button, Badge, Accordion, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cusList } from '../../actions/viewDetailsActions'
import MainScreen from '../../components/MainScreen'
import Loading from '../../components/Loading'
import Error from '../../components/Error'


const View_de = () => {
    const dispatch = useDispatch();

    const customerList = useSelector(state => state.customerList)
    const { loading, cusInfo, error } = customerList;
    const [custList, setCusList] = useState([])

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure")) {

        }
    };

    useEffect(() => {
        dispatch(cusList());
        setTimeout(() => {
            console.log("abcd",customerList)
            
        }, 2000);
        
    }, []);

    useEffect(()=>{
        setCusList(customerList && customerList.cusInfo && customerList.cusInfo.data ? customerList.cusInfo.data:[])
    },[customerList]);


    return (
        <MainScreen title='View Your Customers'>
            <Link to="#">
                <Button>View My Partners</Button>
            </Link><hr />
            {error && <Error variant="danger">{error}</Error>}
            {loading && <Loading />}

            {custList &&  custList.length > 0 ?

                custList.reverse().map((customer, index) => {
                    return (
                        <Card style={{ margin: 10 }} key={customer._id}>
                            <Card.Header style={{ display: "flex" }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18,
                                    }}>
                                    {customer.Name}
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
                                        Email Address: {customer.Email} <br />
                                        Address: {customer.Address} <br />
                                        Mobile Number: {customer.Phone} <br />
                                    </p>

                                </blockquote>
                            </Card.Body>
                        </Card>
                    )
                })
                : null
                }

        </MainScreen>
    )
}

export default View_de
