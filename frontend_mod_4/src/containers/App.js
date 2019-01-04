import React, { Component, Fragment } from 'react';
import Navbar from '../components/NavBar';
import Home from './Home.js'
import ProductPage from './ProductPage.js'
import Footer from '../components/Footer.js'
import Catalog from './Catalog'
import About from '../components/About'

import NewArrivals from '../components/NewArrivals'
import HotApperal from '../components/HotApperal'

import {Route,Switch,Redirect} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getProducts} from '../redux/actions'

import '../css/app.css'

class App extends Component {

  componentDidMount(){
    this.props.getProducts()
  }

  findProduct = (props)=> {
    let item = this.props.products.find(p => props.match.params.id == p.id)
    return item ?  <ProductPage product={item} /> : <Redirect to="/" />
  }
  render() {
    return (
      <div className="page-wrapper" style={{backgroundColor: '#f8f8f8'}}>
      <Navbar />
      <Switch>
          <Route  path="/products/:id" render={(props) => this.findProduct(props)} />
          <Route  path="/catalog/Men" render={() =>  <NewArrivals margin={10} name={"Men"}/>} />
          <Route  path="/catalog/Women" render={() => <HotApperal margin={10} name={"Women"}/>} />
          <Route  path="/catalog" component={Catalog} />
          <Route  path="/about" component={About} />
          <Route  path="/" component={Home} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts())
    }
};
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
