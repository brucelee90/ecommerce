import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

export default class Button extends Component {
    
  render() {
    const {plusMinus} = this.props
    
    return (
    <div>
        <MDBBtn
        className="btn-custom justify-content-center"
        color="mdb-color darken-2"
        >{plusMinus}
      </MDBBtn>
    </div>
    )
  }
}
