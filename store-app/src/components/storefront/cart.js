/* eslint-disable no-lone-blocks */
import React from 'react'
import { connect } from 'react-redux'
import { Delete } from '../../store/cart'
import { Button, Card, Form, Table } from 'react-bootstrap'
import '../../style.scss'

const Cart = props => {
    console.log('Cart props ----> ', props.basket)
    let total = 0;
    return (
        <>

            <div className='cart-div'>
                {

                    <Card className='cart'>
                        <h1>Order Summary : </h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="2"> Product </th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.basket.length !== 0 && (
                                    Object.values(props.basket).map(product => {
                                        total = total + product.price;
                                        return <tr>
                                            <td colSpan="2">{product.name}</td>
                                            <td colSpan="2">{product.price}</td>

                                        </tr>
                                    }))}
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td colSpan="2">{Math.abs(total)}</td>

                                </tr>
                            </tbody>

                        </Table>
                    </Card>


                }
            </div>
            <div className='cart-div'>
                <Card className='cart'>
                    <Card.Header>Billing Information</Card.Header>
                    <Form className='cart'>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label  >Credit Card</Form.Label>
                                <Form.Control  type="Number"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label  >Exp Data</Form.Label>
                                <Form.Control style={{placeContent:'yy - mm -yy'}} type="date"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label  >CCV</Form.Label>
                                <Form.Control  type="Number"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                          
                        </Form.Row>

                        <Button  style={{marginLeft:'250px'}} variant="primary" > PLACE YOUR ORDER</Button>
                        </Form>
                </Card>
            </div>

        </>
    )


};



const mapStateToProps = state => ({
                basket: state.cart.basket,
})

const mapDispatchToProps = { Delete}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);