import React, { Component,Button} from 'react';
import CartModal from './CartModal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateQuantity,deleteItemFromCart} from '../redux/actions'

class CartItem extends Component {

  state = {
      id: this.props.cartItem.id,
      quantity: this.props.cartItem.quantity
  }


  updateQuantiy = (e) => {
    this.setState({quantity: e.target.value}, () => {
  this.update()
})

  }

  update = () => {

    this.props.update(this.state.id, this.state.quantity)
  }


  deleteItem = (id) => {
    this.props.remove(id)
  }




  render() {
          let {id,quantity,product} = this.props.cartItem

    return (

      <div className="w-commerce-commercecartitem">
        <img src={product.front_image_url} alt="" className="w-commerce-commercecartitemimage"/>
        <div className="w-commerce-commercecartiteminfo">
          <div className="w-commerce-commercecartproductname">{product.name}</div>
          <div>${product.price}</div><span onClick={() => this.deleteItem(id)} className="w-commerce-commercecartremovelink w-inline-block">
            <div className="cart-remove-link">Remove</div>
          </span>

        </div><input onChange={this.updateQuantiy} type="number" required="" pattern="[0-9]+" className="w-commerce-commercecartquantity input quantity-input" name="quantity" min="0" value={this.state.quantity}/>
      </div>


    );
  }
}


const disptchPropsToState = dispatch => {
  return {
    remove: (id) => dispatch(deleteItemFromCart(id)),
    update: (id,quantity) => dispatch(updateQuantity(id,quantity))
  }
}


export default connect(null,disptchPropsToState)(CartItem)
