import React, { Component } from 'react'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
  render() {
    return (
        <section>
      <ProductConsumer>
        {value=>{
          const {cart} = value;
          if (cart.length > 0) {
            return(
              <>
              <div className="row" >
                <div className="col-10 mx-auto my-2 text-center">
                  <h2 className="text-capitalize">
                      Ihr Warenkorb
                  </h2>
                </div>
              </div>
              
            <CartColumns/>
            <CartList value={value} />
            <CartTotals value={value} history={this.props.history}/>
            </>
            )
          }else{
            return(
              <>
                <EmptyCart/>
              </>
            )
          }
      }}
      </ProductConsumer>
      </section>
    )
  }
}
