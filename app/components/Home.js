import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bannerBox">
          <img className="img-responsive banner" src="images/facebook_cover_photo_2.png" />
        </div>
        <Messages messages={this.props.messages}/>
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

      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
