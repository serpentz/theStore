
import React, { Component} from 'react';
import ProductCard from './ProductCard'
import {connect} from 'react-redux'
import _ from 'lodash'
import { withRouter } from "react-router";



class NewArrivals extends Component {

  render() {
      let padding = this.props.margin
    return (
      <div className={`section haze ${padding ? "" : "no-padding-top"}`}>
          <div className="wrapper">
              <div className="shop-header">
                  <h3 className="no-margin">{this.props.name}</h3><a href="/catalog" className="link arrow-link"> All Apperal</a>
                  <div className="shop-header-line"/>
              </div>
              <div className="full-width w-dyn-list">
                  <div className="products w-dyn-items">
                      { this.props.newArrivalsArray.map((product, key) => <ProductCard key={key} product={product} /> )}
                  </div>
              </div>
          </div>
      </div>


    );
  }
}


const mapStateToProps = (state) => {
  return {
    newArrivalsArray: state.newArrivalsArray
  }
}



export default withRouter(connect(mapStateToProps)(NewArrivals));
