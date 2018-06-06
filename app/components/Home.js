import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    const style1 = {
background : 'url(images/home/coding_computer.PNG)'
    }
    const style2 = {
      background: 'url(images/home/responsive.PNG)'
    }
    const style3 = {
      background: 'url(images/home/performance.PNG)'
    }
    return (
      
      <div className="mainBody">
        <div className="probootstrap-loader"></div>




  <section className="probootstrap-slider flexslider">
    <ul className="slides">
      <li className="slide1" style={style1} >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="slides-text probootstrap-animate">
                <h2>The Clarity You Need.</h2>
                <p><a href="#" target="_blank" className="btn btn-primary">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="slide2" style={style2}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="slides-text probootstrap-animate">
                <h2>Fully Responsive Designs.</h2>
                <p><a href="https://uicookies.com/" target="_blank" className="btn btn-primary">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="slide3" style={style3}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="slides-text probootstrap-animate">
                <h2>Performance Tuning and Optimizations.</h2>
                <p><a href="https://uicookies.com/" target="_blank" className="btn btn-primary">Get Started</a></p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <section className="probootstrap-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="service left-icon probootstrap-animate">
            <div className="icon">
              <i className="icon-laptop3"></i>
            </div>
            <div className="text">
              <h3 className="heading">Development Strategy</h3>
              <p>We work with you on every aspect of development to ensure your companies story shines through. We don't cut corners and are always transparent in our intent. </p>
              <p><a href="single-page.html">Learn more</a></p>
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="service left-icon probootstrap-animate">
            <div className="icon">
              <i className="icon-presentation"></i>
            </div>
            <div className="text">
              <h3 className="heading">SEO</h3>
                    <p>es | Lavely cn bring disciplined focus on growing visibility in organic (non-paid) search engine results for your business or products. </p>
              <p><a href="single-page.html">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service left-icon probootstrap-animate">
            <div className="icon">
                    <i className="fal fa-space-shuttle"> </i>
            </div>
            <div className="text">
              <h3 className="heading">Performance</h3>
              <p>Performance tuning and optimization can mean many things. We look at where your website is falling behind to give it a comptetive edge. </p>
              <p><a href="single-page.html">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="probootstrap-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 probootstrap-animate" data-animate-effect="fadeInLeft">

          <div className="panel-group probootstrap-panel" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h3 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Development/ Design
                  </a>
                </h3>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                  
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h3 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Code Review
                  </a>
                </h3>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h3 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Web Crawling
                  </a>
                </h3>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-6 probootstrap-animate" data-animate-effect="fadeInRight">

          <figure>
            <div className="probootstrap-video">
                    <a href="https://vimeo.com/181986986" className="popup-vimeo probootstrap-video-play"><i className="icon-play3"></i></a>
              <img src="images/slider_2.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" className="img-responsive img-border" />
            </div>
            <figcaption>A with the CEO and Founder.</figcaption>
          </figure>

        </div>
      </div>
    </div>
  </div>
  
  
  <div className="container">
    <div className="probootstrap-cta probootstrap-animate">
      <h2 className="mb20">Tell your companies' story and improve your web presence.</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p><a href="#" role="button" className="btn btn-primary">Get started</a></p>
    </div>
  </div>


  <section className="probootstrap-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 section-heading probootstrap-animate">
          <h2>Our Projects</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card">
            <div className="probootstrap-card-media">
                    <a href="single-page.html"><img src="images/home/ad-adversting-advertisment-6253.jpg" className="img-responsive img-border" alt="Free HTML5 Template by uicookies.com" /></a>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Some Header</h2>
              <p className="category">Design &amp; Model</p>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="single-page.html">View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card">
            <div className="probootstrap-card-media">
                    <a href="single-page.html"><img src="images/home/antique-desk-device-698554.jpg" className="img-responsive img-border" alt="Free HTML5 Template by uicookies.com" /></a>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Another Project</h2>
              <p className="category">Design</p>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="single-page.html">View details</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 probootstrap-animate">
          <div className="probootstrap-card">
            <div className="probootstrap-card-media">
                    <a href="single-page.html"><img src="images/home/action-blur-bulb-355904.jpg" className="img-responsive img-border" alt="Free HTML5 Template by uicookies.com" /></a>
            </div>
            <div className="probootstrap-card-text">
              <h2 className="probootstrap-card-heading mb0">Last Thing</h2>
              <p className="category">Photography</p>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="single-page.html">View details</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  

  <div className="gototop js-top">
    <a href="#" className="js-gotop"><i className="icon-chevron-thin-up"></i></a>
  </div>

    </div>

      
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
