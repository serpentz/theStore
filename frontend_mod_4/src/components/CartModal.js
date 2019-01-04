



import React, { Component} from 'react';
import CartItem from './CartItem'
import {connect} from 'react-redux'




class CartModal extends Component {

  calcSubtotal = () => {
    let cal = this.props.cart.cart_products.map(c => {return{product_id:c.product_id,quantity:c.quantity}})
    let sub = 0
    cal.forEach((cal) => {
        sub += this.props.cart.products.find(p => p.id == cal.product_id).price * cal.quantity
    })
    return (sub).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  getCart = () => {
    let {products, cart_products} =  this.props.cart
    let items = cart_products.map(c => {return{id: c.id, product_id:c.product_id,quantity:c.quantity}})

    let arr = []
  items.forEach((itemI) =>{
      let foundItem = arr.find(arrItem => arrItem.product.id == itemI.product_id)
      let product = this.props.cart.products.find(p => p.id == itemI.product_id)
      if(!foundItem){
        return arr.push({id:itemI.id,product, quantity: itemI.quantity})
      }else{
        foundItem.quantity += itemI.quantity
        return foundItem
      }

    })

    return arr
  }

  render() {
    return (

      <div data-node-type="commerce-cart-container-wrapper" style={{opacity: 1, transition: "opacity 300ms ease 0s"}} class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal">
      	<div data-node-type="commerce-cart-container" class="w-commerce-commercecartcontainer cart-container" style={{transform: "scale(1)", transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0'}}>
      		<div class="w-commerce-commercecartheader cart-header">
      			<h4 class="w-commerce-commercecartheading">Your Cart</h4>
              <span onClick={this.props.closeModal} data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink w-inline-block"><svg width="16px" height="16px" viewBox="0 0 16 16">
        					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        						<g fill-rule="nonzero" fill="#333333">
        							<polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
        						</g>
        					</g>
        				</svg>
              </span>
      		</div>
      		<div class="w-commerce-commercecartformwrapper">
      			<form data-node-type="commerce-cart-form" class="w-commerce-commercecartform">
      				<div class="w-commerce-commercecartlist cart-list">

                {this.getCart().map(cartItem => <CartItem cartItem={cartItem}/> )}

      				</div>
      				<div class="w-commerce-commercecartfooter cart-footer">
      					<div class="w-commerce-commercecartlineitem">
      						<div>Subtotal</div>
      						<div  class="w-commerce-commercecartordervalue">{this.calcSubtotal()}</div>
      					</div>
      					<div><a href="/checkout" value="Continue to Checkout"  class="w-commerce-commercecartcheckoutbutton button">Continue to Checkout</a></div>
      				</div>
      			</form>

      		</div>
      	</div>
      </div>



    );
  }
}



const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps)(CartModal)
