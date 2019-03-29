import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon,MDBDropdown,MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from "mdbreact";
import logo from '../logo.png'
import {ProductConsumer} from '../Context'

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <section>

    
<ProductConsumer>
    {value=>{
      const {amountItems} = value;
      return(
        <MDBNavbar color="mdb-color darken-2" dark expand="md">
          {/* <MDBNavbarBrand icon="shopping-cart"> */}
            <MDBNavLink to="/"><img src={logo} alt="store" style={{width: "2rem", color:"white"}}/></MDBNavLink>
          {/* </MDBNavbarBrand > */}
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Shop</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Neue Smartphones</MDBDropdownItem>
                  <MDBDropdownItem active href="/">Gebrauchte Smartphones</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
              {/* <MDBNavItem active>
                <MDBNavLink to="/">Shop</MDBNavLink>
              </MDBNavItem> */}
              <MDBNavItem>
                <MDBNavLink to="#!">Imprint</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="border border-light rounded mb-0">
                <MDBNavLink to="/cart">Warenkorb
                  <MDBIcon className="ml-2" icon="shopping-cart" style={{position:'relative'}}>
                  {amountItems > 0 && 
                    <div
                      
                      color="primary"
                      style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                      fontSize:'.7rem',
                      fontWeight:'500',
                      border:'1px solid black',
                      color:'black',
                      background:'#d0d6e2', 
                      position:'absolute', 
                      transform: 'translate(5px, -23px)',
                      width:'15px',
                      height:'15px',
                      textAlign:'center',
                      verticalAlign:'middle',
                      borderRadius:'50%'}}>
                      {amountItems}
                    </div>
                    }
                  </MDBIcon>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      )
    }}
    </ProductConsumer>
    </section>
    );
  }
}

export default Navbar;