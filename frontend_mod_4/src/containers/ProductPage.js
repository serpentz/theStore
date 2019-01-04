

import React, { Component} from 'react';
import {addItemToCart} from '../redux/actions'
import {connect} from 'react-redux'



class ProductPage extends Component {


  state = {
    quantity: 1
  }

  setQuantity = (e) =>{
    this.setState({quantity: e.target.value})
  }

  handleSubmit = (e,product) => {
    e.preventDefault()
    let cartItem = {quantity: this.state.quantity, product_id:product.id, cart_id: 3}
    this.props.addItemToCart(cartItem)
  }


  render() {
      let {front_image_url,name,price,id} = this.props.product
    return (

      <div className="section " style={{paddingTop: 10}}>
              <div className="wrapper ">
                      <div className="product">
                              <div className="product-info">
                                      <h1>{name}</h1>
                                      <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-price">${price}.00</div>
                                      <div className="full-width">
                                              <form onSubmit={(e) => {this.handleSubmit(e,this.props.product)}}className="w-commerce-commerceaddtocartform add-to-cart">
                                                  <label className="label">Quantity</label>
                                                  <input onChange={this.setQuantity} type="number" min="1" className="w-commerce-commerceaddtocartquantityinput input quantity-input" value={this.state.quantity}/>
                                                  <input type="submit" value="Add To Cart" className="w-commerce-commerceaddtocartbutton button"/>
                                              </form>
                                              <div style={{display:'block'}} className="w-commerce-commerceaddtocartform">
                                                    <label  style={{color: 'green'}} className="label">In stock</label>
                                              </div>

                                      </div>
                              </div>
                              <div className="product-image-wrapper"><img src={front_image_url} alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 76vw, 32vw" className="full-width"/></div>
                              <div className="product-details-wrapper">
                                      <div className="shop-header">
                                              <h5 className="no-margin">Product Details</h5>
                                              <div className="sku">
                                                  <label style={{color: 'black'}} className="label">ID:</label>
                                                  <label style={{color: 'green'}} className="label">00000{id}</label>
                                              </div>
                                              <div className="shop-header-line">

                                              </div>
                                      </div>

                                      </div>
                              </div>
                      </div>
              </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem))
    }
};
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)
