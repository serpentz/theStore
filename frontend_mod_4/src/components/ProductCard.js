

import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";




class ProductCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      hovered: false
    }
  }




  onHover = (hovered) => {
   this.setState({hovered})
  }

  showPicture = () => {
      return this.state.hovered ?  this.props.product.back_image_url: this.props.product.front_image_url
  }

  render() {
    var name = "name"
    var price = 333
    if(this.props.product){
    var {id,name,price} = this.props.product
  }
    return (

      <div onMouseEnter={() => this.onHover(true)}  onMouseLeave={() => this.onHover(false)} style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: "preserve-3d"}} className="product-card-wrapper w-dyn-item">
      <Link to={`/products/${id}`} className="product-card w-inline-block">
              <div className="product-card-image-wrapper"><img src={this.showPicture()} alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 14vw" /></div>
              <h6 className="product-card-heading">{name}</h6>
              <div className="product-card-price">${price}</div>
          </Link></div>

    );
  }
}

export default withRouter(ProductCard);
