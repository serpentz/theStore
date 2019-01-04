
import React, { Component} from 'react';



class Footer extends Component {
  render() {
    return (

<div className="section color no-padding-vertical">
    <div className="wrapper text-white">
        <div className="footer">
            <div className="footer-left"><a href="/" className="footer-brand w-nav-brand w--current">
            <div>theStore</div>
            </a></div>
            <div className="footer-nav"><a href="/" className="footer-link w--current">Home</a><a href="/catalog" className="footer-link">Catalog</a><a href="/catalog/Men" className="footer-link">Womens</a><a href="/catalog/Women" className="footer-link">Womens</a><a href="/about" className="footer-link">About</a><a href="/contacts" className="footer-link">Contacts</a></div>
            <div className="footer-social"><a href="https://elasticthemes.com" target="_blank" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a15759eeb8aaf21_twitter-icon-white.svg" alt=""/></a><a href="https://elasticthemes.com" target="_blank" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a1575d04f8aaf22_facebook-icon-white.svg" alt=""/></a><a href="https://elasticthemes.com" target="_blank" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a15753d038aaf1e_instagram-icon-white.svg" alt=""/></a><a href="https://elasticthemes.com" target="_blank" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a1575dcad8aaf20_pinterest-icon-white.svg" alt=""/></a><a href="https://elasticthemes.com" target="_blank" className="footer-social-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5c2a56779a15756fe08aaec0/5c2a56779a15755d7c8aaf27_youtube-icon.svg" alt=""/></a></div>
              <div className="footer-bottom">
                  <div className="footer-bottom-left">
                  <div>Created with love by <a href="https://elasticthemes.com" target="_blank" className="link-white">Elastic Themes</a></div>
                  </div>
              <div className="footer-bottom-right">
              <div>Powered by <a href="https://webflow.com/" target="_blank" className="link-white">Webflow</a></div>
            <div className="footer-bottom-divider"></div><a href="/template/style-guide" className="link-white">Style Guide</a>
            <div className="footer-bottom-divider"></div><a href="/template/licensing" className="link-white">Licensing</a>
            </div>
        </div>
    </div>
</div>
</div>

    );
  }
}

export default Footer;
