import React, { Component, Fragment} from 'react';
import manPhoto from '../images/man.png'
import womenPhoto from '../images/women.png'
import NewArrivals from '../components/NewArrivals'
import HotApperal from '../components/HotApperal'

import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <Fragment>
          <div className="section hero-section">
              <a href="#Scroll-Section" data-w-id="2f5f8d00-b1cb-b119-ed1c-f8fcd29601ad" className="scroll-mouse-link w-inline-block">
                  <div className="mouse-icon">
                      <div data-w-id="2f5f8d00-b1cb-b119-ed1c-f8fcd29601af" className="mouse-wheel-icon" ></div>
                  </div>
              </a>
          </div>
          <div id="Scroll-Section" className="section haze">
              <div className="wrapper">
                  <div className="home-categories">
                      <div data-w-id="79f09a57-05ab-ed81-c059-4d50244b2341" className="home-category-card"><img src={manPhoto} sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className="home-category-image-1"/>
                          <div className="home-category-info-1">
                              <h3>MEN</h3><Link to="/catalog" className="button small white w-button">Shop Now</Link>
                          </div>
                      </div>
                      <div data-w-id="b498480a-a03d-afff-8227-912980ab2a0a"  className="home-category-card red"><img src={womenPhoto} sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className="home-category-image-2"/>
                          <div className="home-category-info-2">
                              <h3> WOMEN </h3><Link to="/catalog" className="button small white w-button">Shop Now</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <NewArrivals name={"New Arrivals"} />

          <HotApperal name={"Hot Apperal"}/>

      </Fragment>
    );
  }
}

export default Home;
