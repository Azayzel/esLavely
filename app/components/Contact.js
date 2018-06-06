import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
  }

  render() {
    const style1 = {
      margin: '80px'
    }
    return (
      <div style={style1}>
        <div className="container">
          <div className="">
            <h2 className="mb20">Got Something You Want To Talk About?</h2>
            <p>No need to be too descriptive at this stage. Just briefly explain what you'd like to discuss!.</p>
          </div>
        </div>
        <section className="probootstrap-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <form action="#" method="post" className="probootstrap-form mb60">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" className="form-control" id="fname" name="fname" />
                      </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="lname">Last Name</label>
                          <input type="text" className="form-control" id="lname" name="lname" />
                        </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                      </div>
                        <div className="form-group">
                          <label for="message">Message</label>
                          <textarea cols="30" rows="10" className="form-control" id="message" name="message"></textarea>
                        </div>
                        <div className="form-group">
                          <input type="submit" className="btn btn-primary" id="submit" name="submit" value="Send Message" />
                    </div>
                  </form>
                      </div>
                      <div className="col-md-3 col-md-push-1">
                        <h4>Contact Details</h4>
                        <ul className="with-icon colored">
                          <li><i className="icon-location2"></i> <span>Fredericksburg, Va, 22408</span></li>
                          <li><i className="icon-mail"></i><span>contact@eslavely.com</span></li>
                          <li><i className="icon-phone2"></i><span>+703 862 7672</span></li>
                        </ul>

                        <h4>Feedback</h4>
                        <p>We'd love to hear what you think!</p>
                        <p><a href="#">Learn More</a></p>
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

export default connect(mapStateToProps)(Contact);
