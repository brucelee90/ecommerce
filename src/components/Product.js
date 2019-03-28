import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { MDBMask, MDBView } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {ProductConsumer} from '../Context'
import Modal from './Modal'
import PropTypes from 'prop-types'


export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product

    return (
      
  <ProductConsumer>
    {(value) => (
      <div>
        {value.modalOpen?<Modal />:null}
        <MDBCol>
          <MDBCard className="mt-4 z-depth-1" style={{ width: "22rem"}}>
          <MDBView hover zoom>
            <MDBCardImage style={{cursor: "pointer"}} className="img-fluid px-1 py-1" src={img} waves />
            <MDBMask className="flex-center rounded-top" overlay="stylish-strong">
            <Link to="/details">
            <MDBBtn 
              onClick={()=>{
              value.handleDetail(id);
             }}
             color="mdb-color darken-2">Mehr</MDBBtn>
             </Link>
            </MDBMask>
          </MDBView>
            <MDBCardBody>
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText tag="div">
              <h6>
                Unser Preis: <strong>€ {price}</strong>
              </h6>
              </MDBCardText>
              <MDBBtn 
              disabled={inCart?true:false} 
              color="mdb-color darken-3" 
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
               }}
              >
              {inCart?('im warenkorb'):('in den Warenkorb')}
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    )}
  </ProductConsumer>
    )
  }
}

Product.propTypes = {
  product:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}