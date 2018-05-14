import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="mainBody">
        <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in"></div>
          <div className="intro-heading text-uppercase"></div>
        </div>
      </div>
    </header>
        <Messages messages={this.props.messages}/>

    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">The Core Components of what <b>es | Lavely</b> brings to the table.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-code fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">JavaScript</h4>
            <p className="text-muted">This is the core of what <b>es | Lavely </b> is all about. Together we can extend your websites current functionality or build up
              a new project with the industries top-frameworks (React, Angular, Vue). Code is written with scale and re-usability in mind..</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fab fa-node fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Node.js</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Web Performance</h4>
            <p className="text-muted">Sticking to industry best practices when analyzing database queries, page load times, data processing, we
              can enhance your website's user experience. </p>
            <p className="text-muted">. </p>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
       <div className="row">
        <div className="wrap">
          <div className="tile"> 
            <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
            <div className="text">
              <h1>Lorem ipsum.</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>


          <div className="tile"> 
            <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>
            <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            </div>
          </div>
            
          <div className="tile"> 
              <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>
              <div className="text">
              <h1>Lorem ipsum.</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
            </div>


            
          </div>
        </div>
        <div className="row">
        <div className="wrap">
          <div className="tile"> 
            <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
            <div className="text">
              <h1>Lorem ipsum.</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>


          <div className="tile"> 
            <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>
              <div className="text">
                <h1>Lorem ipsum.</h1>
                <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
          </div>
            
          <div className="tile"> 
              <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>
              <div className="text">
                  <h1>Lorem ipsum.</h1>
                  <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                  <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                  <div className="dots">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
            </div> 
          </div>
        </div>
       </div>
      </section>

      <section id="About">
              <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Team Members</h2>
                  <h3 className="section-subheading text-muted">Small team, big passion.</h3>
                </div>
              </div>
                <div className="row">
                  <div className="card">
                      <img className="card-img" src="https://s3.amazonaws.com/eslavely/me.jpg" alt="Josh Lavely"/>
                      <h1>Josh Lavely</h1>
                      <p className="title">CEO & Founder, <b>es | Lavely</b></p>
                      <p>Father, Husband, Programmer</p>
                      <a href="https://github.com/Azayzel" target="_blank"><i className="fab fa-github"></i></a> 
                      <a href="https://twitter.com/Azayzel_" taregt="_blank"><i className="fab fa-twitter"></i></a> 
                      <a href="#"><i className="fab fa-linkedin"></i></a> 
                      <a href="https://www.facebook.com/EsLavely/" target="_blank"><i className="fab fa-facebook"></i></a> 
                      <p>
                        <button className="card-button"><Link to="/contact">Contact!</Link></button>
                      </p>
                    </div>
                </div>
              </div>
        </section>
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
