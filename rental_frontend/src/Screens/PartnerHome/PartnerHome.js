import React, { useEffect, useState } from 'react'
import {Button, Card, Badge} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { listAdds } from '../../actions/addActions';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MainScreen from '../../components/MainScreen'

const PartnerHome = () => {
    const dispatch = useDispatch();
    
    const addList = useSelector(state => state.addList);
    const {loading, add, error} = addList;
    const [addsList, setAddsList] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure")) {

        }
    };

    useEffect(() => {
        dispatch(listAdds());
        setTimeout(() => {
            console.log("abcd",addList)
            
        }, 2000);
        
    }, []);

    useEffect(()=>{
        setAddsList(addList && addList.add && addList.add.data ? addList.add.data:[])
    },[addList]);


    return (
        <MainScreen title='Your Advertisements'>
        
        <a href ='/View_de'>
        <Button  variant="primary">
             Add new Advertisement
             </Button>
         </a>
         <hr />
            {error && <Error variant="danger">{error}</Error>}
            {loading && <Loading />}

            {addsList &&  addsList.length > 0 ?

                addsList.reverse().map((adds, index) => {
                    return (
                        <Card style={{ margin: 10 }} key={adds._id}>
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
                                    {adds.Name}
                                </span>
                                <div>
                                    <Button variant="success" className="mx-2"
                                        onClick={() => deleteHandler()}>
                                        Update
                                    </Button>
                                </div>

                            </Card.Header>

                            <Card.Body>
                                <Badge bg="success">
                                    Business Type : {adds.Type}
                                </Badge>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Description: {adds.Description} <br />
                                        Email Address: {adds.Email} <br />
                                        Mobile Number: {adds.ConNumber} <br />
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

export default PartnerHome;
