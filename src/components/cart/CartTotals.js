import React from 'react'
import {Link} from 'react-router-dom'
import { MDBBtn } from 'mdbreact';

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-1 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <h5>
                        Gesamtpreis Netto: € {cartSubTotal}
                    </h5>
                    <h5>
                        MwSt: € {cartTax}
                    </h5>
                    <h5>
                        Gesamtpreis Brutto: € {cartTotal}
                    </h5>
                    {/* <Link to="/cart"> */}
                        <MDBBtn onClick={clearCart} className="float-right" color="red darken-4">Warenkorb leeren</MDBBtn>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    </>
  )
}
