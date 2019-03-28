import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {ProductConsumer} from '../Context'

class Modal extends Component {
// state = {
//   modalOpen: false,
// }

// toggle = () => () => {
// //   let modalNumber = 'modal' + nr
//   this.setState({
//     modalOpen: !this.state.modalOpen
//   });
// }

render() {
  return (
    <ProductConsumer>
    {(value) => (
    <MDBContainer>
      {/* <MDBBtn color="info" onClick={()=>value.openModal()}>Center</MDBBtn> */}
      <MDBModal className="no-shadow-modal shadow-none" fade={false} isOpen={value.modalOpen}  centered>
        <MDBModalHeader>
          <div className="mx-auto">
          Wurde in den Warenkorb gelegt
          </div>
        </MDBModalHeader>
        <MDBModalBody>
          <img src={value.modalProduct.img} alt="product" className="mx-auto" style={{display:"block"}} />
        
        </MDBModalBody>
        <h5 className="ml-3">
          {value.modalProduct.title}
        </h5>
        <p className="ml-3">
          Preis: € {value.modalProduct.price}
        </p>
        <MDBModalFooter className="">
        <div className="mr-auto">
          <MDBBtn
            color="blue-grey lighten-2"
            onClick={()=>{
              value.closeModal();
            }}>
              weiter einkaufen
            </MDBBtn>
            <Link to="/cart">
              <MDBBtn
              onClick={()=>{
                value.closeModal();
              }}
              color="mdb-color lighten-4">
              zum warenkorb
          </MDBBtn>
        
          </Link>
         </div>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}
    </ProductConsumer>
    );
  }
}

export default Modal;