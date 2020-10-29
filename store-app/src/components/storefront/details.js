import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { AddCart } from '../../store/cart'
import { ViewAction } from '../../store/details'
function Details(props) {
   
    return (
        <>
            <Card style={{ width: '500px', height: '350px', margin: '20px' }}>
                <Card.Img variant="top" style={{ width: '300px', height: '200px', marginLeft: '100px' }} src="https://learnwoo.com/wp-content/uploads/2016/12/Front-end-Customization-Guide_Install-StoreFront.png" />
                <Card.Header>{props.details.payload.name}</Card.Header>
                <Card.Body>
                    <small>Price : {props.details.payload.price}$</small>
                    <small style={{ float: 'right' }}>inStock : {props.details.payload.inStock}</small>



                </Card.Body>
                <Button onClick={() => props.AddCart(props.details.payload)} variant="primary">Buy</Button>
            </Card>
            <h3>Related Item</h3>
            <Card style={{ display: 'flex', flexDirection: 'row' }}>

                <br />
                {props.products.displayedProducts.map(product => {

                    return <Button style={{ margin: '5px' }} onClick={() => props.ViewAction(product)} >{product.name}</Button>
                })

                }
            </Card>
        </>
    )

}

const mapStateToProps = state => ({
    details: state.details,
    products: state.products

})

const mapDispatchToProps = { AddCart, ViewAction }
export default connect(mapStateToProps, mapDispatchToProps)(Details);