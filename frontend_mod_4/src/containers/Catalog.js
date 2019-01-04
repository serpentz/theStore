import React, { Component} from 'react';
import ProductCard from '../components/ProductCard.js'
import _ from 'lodash'
import {connect} from 'react-redux'
import { withRouter } from "react-router";

class Catalog extends Component {



  constructor (props) {
    super(props)
    this.state = {
      active: 'all'
    }
  }


  setActive = (e) => {
    let active


    switch (e.currentTarget.innerText.toLowerCase()) {
      case 'men':
          active = 'men'
          this.setState({active})
        break
      case 'women':
          active = 'women'
          this.setState({active})
        break
      default:
        active = 'all'
        this.setState({active})
    }




    this.highlightActive()
  }


  highlightActive = () => {

    switch (this.state.active) {
      case 'men':
          this.menDomEl.className += " w--current"
          this.womenDomEl.className = "shop-category-link"
          this.allDomEl.className = "shop-category-link"
        break
      case 'women':
          this.womenDomEl.className += " w--current"
          this.menDomEl.className = "shop-category-link"
          this.allDomEl.className = "shop-category-link"
        break
      default:
          this.allDomEl.className += " w--current"
          this.menDomEl.className = "shop-category-link"
          this.womenDomEl.className = "shop-category-link"
    }

  }


  render() {

    return (
      <div className="section">
      	<div className="wrapper">
      		<div className="shop-header">
      			<h3 className="no-margin w-hidden-small w-hidden-tiny">All Apperal</h3>
      			<div className="shop-categories-wrapper"><span  onClick={this.setActive} name="all"  ref={node => {this.allDomEl = node}} className="shop-category-link w--current">All</span>
      				<div className="w-dyn-list">
      					<div className="shop-categories w-dyn-items">
      						<div className="w-dyn-item"><span onClick={this.setActive} ref={node => {this.menDomEl = node}} className="shop-category-link">Men</span></div>
      						<div className="w-dyn-item"><span  onClick={this.setActive} ref={node => {this.womenDomEl = node}}className="shop-category-link">Women</span></div>
      					</div>
      				</div>
      			</div>
      			<div className="shop-header-line">
      				<div className="shop-header-color green w-hidden-small w-hidden-tiny"></div>
      			</div>
      		</div>
      		<div className="full-width w-dyn-list">
      			<div className="products w-dyn-items">
              { this.props.products.map((product, key) => <ProductCard key={key} product={product} /> )}

      			</div>
      		</div>
      	</div>
      </div>

    );
  }
}



const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapStateToProps)(Catalog))
