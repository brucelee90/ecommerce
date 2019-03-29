import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
// import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";



export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value=>{
        const {id, company, img, info, price, title, inCart} = value.detailProduct
        
        return (
          <div className="container">
            {/* Titel */}
            <div className="col-10 col-md-6 col-sm-12 mx-auto text-center my-5">
              <h1>Produktinfos</h1>
            </div>
            {/* titel Ende */}
            {/* Produktinfo */}
            {/* Bild */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 col-sm-12 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              {/* Text */}
              <div className="col-10 mx-auto col-md-6 col-sm-12 my-3 text-capitalize">
                <MDBContainer>
                  <MDBCard style={{ marginTop: "1rem" }}>
                    <MDBCardHeader color="mdb-color lighten-1">Model: {title}</MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle>Hersteller: {company}</MDBCardTitle>
                      <MDBCardText tag="div">
                        <h5>
                          Preis: € {price}
                        </h5>
                        <p>
                          {info}
                        </p>
                      </MDBCardText>
                        <MDBBtn href="/" size="sm" color="blue-grey lighten-2">Zurück</MDBBtn>
                        <MDBBtn 
                          onClick={()=>{
                            value.addToCart(id);
                            value.openModal(id)
                          }}
                        disabled={inCart?true:false} 
                        size="sm" 
                        color="mdb-color lighten-4">{inCart?"Bereits Im Warenkorb":"In den Warenkorb legen"}</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
            </div>
          </div>
        )
        }}
      </ProductConsumer>
    )
  }
}
