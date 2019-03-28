import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
// import Product from './components/Product'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'
import Cart from './components/cart/Cart'

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/modal" component={Modal}></Route>
          <Route component={Default}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
