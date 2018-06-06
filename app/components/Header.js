import React from 'react';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux'
import {logout} from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this
      .props
      .dispatch(logout());
  }

  render() {

      return(
<div>
    <header role="banner" className="probootstrap-header black">
      <div className="container">
        <a href="index.html" className="probootstrap-logo">es | Lavely<span>.</span></a>

        <a href="#" className="probootstrap-burger-menu visible-xs" ><i>Menu</i></a>
        <div className="mobile-menu-overlay"></div>

        <nav role="navigation" className="probootstrap-nav hidden-xs">
          <ul className="probootstrap-main-nav">
            <li className="active"><a href="/"> Home </a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="probootstrap-right-nav hidden-xs">
            <li><a href="#"><i className="icon-twitter"></i></a></li>
            <li><a href="#"><i className="icon-facebook2"></i></a></li>
            <li><a href="#"><i className="icon-instagram2"></i></a></li>
          </ul>
          <div className="extra-text visible-xs">
            <a href="#" className="probootstrap-burger-menu"><i>Menu</i></a>
            <h5>Address</h5>
            <p>Fredericksburg, Va, 22408</p>
            <h5>Connect</h5>
            <ul className="social-buttons">
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-facebook2"></i></a></li>
              <li><a href="#"><i className="icon-instagram2"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {token: state.auth.token, user: state.auth.user};
};

export default connect(mapStateToProps)(Header);
