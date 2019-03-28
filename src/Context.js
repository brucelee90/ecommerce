import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state={
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    amountItems: 0,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  };

  getCartAmount(){
    const amount = this.state.cart.length

    this.setState(()=>{
      return {amountItems: amount}
    }, ()=>{console.log(this.state.amountItems);})
    
    
  }

  componentDidMount(){
    this.setProducts()
  }

  setProducts = () =>{
    let tempProducts = []
    storeProducts.forEach(item =>{
      const singleItem = {...item}
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(()=>{
      return {products: tempProducts}
    })
  }

  getItem = id =>{
    const product = this.state.products.find(item => item.id === id)
    return product
  }

  handleDetail = id =>{    
    const product = this.getItem(id)    
    this.setState(()=>{
      return { detailProduct: product }
    }
  )
  }

  // Artikel zu WArenkorb hinzufügen
  addToCart = (id) =>{
    
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true;
    product.count = 1;
    const price = product.price
    product.total = price
    this.setState(()=>{
      return{
        products: tempProducts,
        cart:[...this.state.cart, product]
      }
    }, ()=>{
      this.addTotals()
      this.getCartAmount()
    }
  )
  }

  // Modal öffnen
    openModal = id => {
      const product = this.getItem(id)
      this.setState(()=>{
        return {
          modalProduct:product, 
          modalOpen:true
        }
      }, ()=>console.log(this.state.modalOpen)
      )
    }
    closeModal = () => {
      this.setState(()=>{
        return{modalOpen: false}
      })
    }

  // Methoden für Warenkorb
  increment = (id) => {
    // Artikel aus dem Warenkorb 
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id == id)

    // Index des gewählten Artikels ermitteln
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    // Zähler hochzählen
    product.count = product.count + 1
    product.total = product.count * product.price

    /*
    Methode addTotals muss immer aufgerufen werden, 
    nach dem state aktualisert wurde. Darum Funktion in Callback-Funktion schreiben
    */
    this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
  }

  decrement = (id) => {
        // Artikel aus dem Warenkorb 
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id == id)
    
        // Index des gewählten Artikels ermitteln
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        // Zähler runterzählen
        product.count = product.count - 1

        // Weniger als 0 Artikel kann es nicht geben
        
        
        if (product.count === 0) {
          this.removeItem(id)
        }else{
          product.total = product.count = product.price
          this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
        }
  }

  removeItem = id => {
    const tempCart = this.state.cart.filter(item => id != item.id)
    
    // alle Artikel im Warenkorb ermitteln
    const tempProducts = [...this.state.products]
    // Index des entfernten Artikels ermitteln
    const index = tempProducts.indexOf(this.getItem(id))
    // Objekt des entfernten Artikels speichern
    let removedProduct = tempProducts[index]
    // Alle Werte von entferntem Artikel zurücksetzen
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0    

    this.setState(()=>{
      return{
        cart: [...tempCart],
        products: [...tempProducts]
      }
    },()=>{
      this.addTotals()
      this.getCartAmount()
    })
  }

  // Warenkorb leeren
  clearCart = () => {
    this.setState(()=>{
      return{
        cart: []
      }
    }, ()=>{
      this.setProducts()
      this.addTotals()
    })
  }

  // Gesamtbeträge berechnen
  addTotals = () =>{
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.19
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax*1.0
    this.setState(()=>{
      return{
        cartSubTotal: subTotal.toFixed(2),
        cartTax: tax.toFixed(2),
        cartTotal: total.toFixed(2)
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}