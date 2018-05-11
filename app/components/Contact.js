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
    return (
      <div className="container">
       <Messages messages={this.props.messages}/>
       <div className="wrap-contact100">
        <div className="contact100-form-title" >
          <span className="contact100-form-title-1">
            Contact Me Now
          </span>

          <span className="contact100-form-title-2">
            Feel free to send me a message and get the conversation started. You deserve an online presence that will work for YOU!
          </span>
        </div>

        <form className="contact100-form validate-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="wrap-input100 validate-input" data-validate="Name is required">
            <span className="label-input100">Full Name:</span>
            <input className="input100" placeholder="Enter full name" type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)} autoFocus />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <span className="label-input100">Email:</span>
            <input className="input100" placeholder="Enter email addess" type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Message is required">
            <span className="label-input100">Message:</span>
            <textarea className="input100" placeholder="What you would like to discuss..." name="message" id="message" rows="7" className="form-control" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn">
              <span>
                Submit
                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
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

export default connect(mapStateToProps)(Contact);
