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
/*     const active = {
      borderBottomColor: '#3f51b5'
    };
    const rightNav = this.props.token
      ? (
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
              <img src={this.props.user.picture || this.props.user.gravatar}/> {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
              <i className="caret"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/account">My Account</Link>
              </li>
              <li className="divider"></li>
              <li>
                <a
                  href="#"
                  onClick={this
                  .handleLogout
                  .bind(this)}>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      )
      : (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/login" activeStyle={active}>Log in</Link>
          </li>
          <li>
            <Link to="/signup" activeStyle={active}>Sign up</Link>
          </li>
        </ul>
      );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">es | Lavely</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeStyle={active}>Home</IndexLink>
              </li>
              <li>
                <Link to="/services" activeStyle={active}>Services</Link>
              </li>
              <li>
                <Link to="/blog" activeStyle={active}>Blog</Link>
              </li>
              <li>
                <Link to="/contact" activeStyle={active}>Contact</Link>
              </li>
            </ul>
            {rightNav}
          </div>
        </div>
      </nav> */
      return(
<div>
    <header role="banner" className="probootstrap-header black">
      <div className="container">
        <a href="index.html" className="probootstrap-logo">es | Lavely<span>.</span></a>

        <a href="#" className="probootstrap-burger-menu visible-xs" ><i>Menu</i></a>
        <div className="mobile-menu-overlay"></div>

        <nav role="navigation" className="probootstrap-nav hidden-xs">
          <ul className="probootstrap-main-nav">
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <ul className="probootstrap-right-nav hidden-xs">
            <li><a href="#"><i className="icon-twitter"></i></a></li>
            <li><a href="#"><i className="icon-facebook2"></i></a></li>
            <li><a href="#"><i className="icon-instagram2"></i></a></li>
          </ul>
          <div className="extra-text visible-xs">
            <a href="#" className="probootstrap-burger-menu"><i>Menu</i></a>
            <h5>Address</h5>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
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
