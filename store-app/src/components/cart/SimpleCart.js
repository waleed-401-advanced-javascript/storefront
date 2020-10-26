import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {RemoveFromCart} from '../../store/cart';
const Cart = props => {
    console.log('Cart props ----> ', props.basket)
    return (
        <>
        <h5>Cart : </h5>
            <div>
                {
                    props.basket.length !== 0 &&(
                        props.basket.map(product => {
                            return <> <li>{product}</li>
                            <Button onClick={()=>props.RemoveFromCart(product)}>X</Button> </>
                        })
                    )
                }
            </div>
        </>
    )
};
const mapStateToProps = state => ({
    basket: state.cart.basket,
})
const mapDispatchToProps = {RemoveFromCart}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);