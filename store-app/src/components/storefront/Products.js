import React from 'react'
import {useEffect} from 'react'
import { connect } from 'react-redux'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AddCart} from '../../store/cart';
import {getProducts} from '../../store/products';
import { Link } from 'react-router-dom';
import { ViewAction } from '../../store/details';
const useStyles = makeStyles({
  root: {
    maxWidth: 140,
    max: 100
  },
  media: {
    height: 140,
    maxWidth: 100
  },
});
const Products = props => {
  const classes = useStyles();
  //const [list]
  useEffect(() => {
    props.getProducts();
  }, [])
  return (
    <section className="products">
      {console.log('props------> ', props.products.products)}
      {props.products.displayedProducts.map(product => {
        return <Card>
          <h3> {product.name}</h3>
          {/* <p>{product.description}</p>*/} <span>{product.price}</span>
          <CardMedia 
            className={classes.media}
            image="https://learnwoo.com/wp-content/uploads/2016/12/Front-end-Customization-Guide_Install-StoreFront.png"
            title="none"
          />
          <Button style={{ backgroundColor: "green" }} onClick={() => props.AddCart(product)}>Add to Cart</Button>
          <Button onClick={() => props.ViewAction(product)} ><Link style={{ textDecoration: "none", color: 'black' }} to={`/product`} activeClassName="list-class">Product Details</Link></Button>
        </Card>


      })}
    </section>
  )
}
const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = { AddCart, getProducts, ViewAction }
export default connect(mapStateToProps, mapDispatchToProps)(Products);