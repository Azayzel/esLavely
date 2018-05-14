import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
       
       <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">What We Offer</h2>
            <h3 className="section-subheading text-muted">These areas of expertise are available to you to grow your business.</h3>
          </div>
        </div>
       <div className="row">
        <div className="wrap">
          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/javascript.png'/>
            <div className="text">
              <h1>JavaScript</h1>
              <h2 className="animate-text">Mobile, Web, Desktop.</h2>
              <p className="animate-text">With almost a decade of JavaScript experience, we can propel your company with modern techniques and best practices. </p>
            </div>
          </div>


          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/node.png'/>
            <div className="text">
            <h1>Node.js Development.</h1>
            <h2 className="animate-text">REST Endpoints, Web-Crawlers, JWT and more.</h2>
            <p className="animate-text">Node brings the power of JavaScript to your desktops and servers. Having built numerous web-crawlers and REST Endpoints, we can bring powerful technology to your doorstep (or url). </p>
            </div>
          </div>
            
          <div className="tile"> 
              <img src='https://s3.amazonaws.com/eslavely/webdesign.jpg'/>
              <div className="text">
              <h1>Web Design UI/UX.</h1>
              <h2 className="animate-text">Clean, Usable and Elegant Designs.</h2>
              <p className="animate-text">Gripping your customers with jaw-dropping design has never been easier with <b>es | Lavely </b> on your side.  </p>
            </div>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="wrap">
          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/c_sharp.png'/>
            <div className="text">
              <h1>C# Development (Web / Desktop)</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            </div>
          </div>


          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/windows_services.png'/>
              <div className="text">
                <h1>Windows Service Development</h1>
                <h2 className="animate-text">Powerful, Reliable and Resource Trivial.</h2>
                <p className="animate-text">Wether it be a service to monitor Crypto, Database Health, Log Files, or anything you can dream up; together, we can make it happen. </p>
            </div>
          </div>
            
          <div className="tile"> 
              <img src='https://s3.amazonaws.com/eslavely/powershell.jpg'/>
              <div className="text">
                  <h1>Powershell Scripting</h1>
                  <h2 className="animate-text">Runspaces, Jobs, and Modules.</h2>
                  <p className="animate-text">Sometimes you just need a script to get things done. Maybe you need a module of common functions? We're here to help! </p>
              </div>
            </div> 
          </div>
        </div>

     <div className="row">
        <div className="wrap">
          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/exchange.jpg'/>
            <div className="text">
              <h1>MS Exchange</h1>
              <h2 className="animate-text">Databases, DAGs, OWA and OA.</h2>
              <p className="animate-text">With nearly a decade of Microsoft Exchange experience, we can optimize your mailbox enviroment and provide tools to monitor and auto-correct when things go awry. </p>
              <p className="animate-text">A DAG automation tool is in the works, stay tuned!. </p>
            </div>
          </div>


          <div className="tile"> 
            <img src='https://s3.amazonaws.com/eslavely/active_directory.jpg'/>
              <div className="text">
                <h1>MS Active Directory</h1>
                <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            </div>
          </div>
            
          <div className="tile"> 
              <img src='https://s3.amazonaws.com/eslavely/seo.png'/>
              <div className="text">
                  <h1>Search Engine Optimization (SEO)</h1>
                  <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                  <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              </div>
            </div> 
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

export default connect(mapStateToProps)(Services);
