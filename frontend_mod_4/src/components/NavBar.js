import React, { Component} from 'react';
import CartModal from './CartModal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class NavBar extends Component {

  state = {
    showModal: false
  }


  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <div data-collapse="medium" data-animation="default" data-duration="400" className="nav-bar w-nav">
      	<div className="nav-main">
      		<div className="wrapper nav-bar-wrapper"><Link to="/" className="brand w-nav-brand w--current">
      				<div>theStore</div>
      			</Link>
      			<div className="navigation">
      				<nav role="navigation" className="nav-menu w-nav-menu">
      					<Link to="/catalog" className="nav-link w-nav-link">Catalog</Link>
      					<Link to="/catalog/Men" className="nav-link w-nav-link">Men</Link>
      					<Link to="/catalog/Women" className="nav-link w-nav-link">Women</Link>
      					<Link to="/about" className="nav-link w-nav-link">About</Link>
      				</nav>
      				<div className="menu-button w-nav-button">
      					<div className="w-icon-nav-menu"></div>
      				</div>
              <span onClick={this.toggleModal} data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block">
              	<div className="w-inline-block">Cart</div>
                    <img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a15751a768aaf2b_cart-icon.svg" alt="" className="cart-icon"/>
              	<div  className="w-commerce-commercecartopenlinkcount item-count">{this.props.cart.cart_products.map(p => p.quantity).reduce((a,b)=> {return a+b}, 0) }</div>
              </span>
      				{this.state.showModal ?
      				<CartModal closeModal={this.toggleModal} /> : null}
      			</div>
      		</div>
      		<div className="w-nav-overlay" ></div>
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


export default connect(mapStateToProps)(NavBar)
