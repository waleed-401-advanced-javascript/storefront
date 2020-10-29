import React from 'react';
// import superagent from 'superagent';
import Product from '../storefront/Products';
import Categories from '../storefront/Categories';
import { Route, Switch } from 'react-router-dom';
import Detalis from '../storefront/details';
import Cart from '../storefront/cart';
import '../../style.scss'

function Main(props) {

    // let items = this.state.items.map((item, i)=> <li key={i} >{item.name}</li>)

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Categories />
                    <Product />
                </Route>
                <Route exact path="/product">
                    <Detalis />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
               
            </Switch>
        </main>
    )
}


export default Main;