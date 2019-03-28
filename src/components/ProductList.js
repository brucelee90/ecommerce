import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
// import { MDBRow } from "mdbreact";
import {storeProducts} from '../data'
import {ProductConsumer} from '../Context'
import Button from './Button'

export default class ProductList extends Component {
  state={
    products: storeProducts
  }
  render() {
    
    return (
      <>
          <div className="py-5">
            <div className="container">
              <div className="row justify-content-center">
                <Title/>
                <div className="row justify-content-center">
                  <ProductConsumer>
                    {value=>{
                      return(
                        value.products.map(product => {
                          return <Product key={product.id} product={product}/>
                        })
                      )
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
