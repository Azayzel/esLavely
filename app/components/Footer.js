import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="probootstrap-footer probootstrap-bg">
        <div className="container">
          <div className="row mb60">
            <div className="col-md-3">
              <div className="probootstrap-footer-widget">
                <h4 className="heading">About es | Lavely.</h4>
                <p>From the start we have always been focused driven. Our passion is building customer experiences, our goal improving your web presence and our mission is to help you to the finish line.</p>
                <p><a href="#">Read more...</a></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="probootstrap-footer-widget probootstrap-link-wrap">
                <h4 className="heading">Quick Links</h4>
                <ul className="stack-link">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Testimonial</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="probootstrap-footer-widget">
                <h4 className="heading">More Links</h4>
                <ul className="stack-link">
                  <li><a href="#">Forms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Pay</a></li>
                  <li><a href="#">Extended Support</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="probootstrap-footer-widget probootstrap-link-wrap">
                <h4 className="heading">Subscribe</h4>
                <p>Stay informed on updates on our Blog and updated pricing models.</p>
                <form action="#">
                  <div className="form-field">
                    <input type="text" className="form-control" placeholder="Enter your email" />
                    <button className="btn btn-subscribe">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-6">
              <div className="probootstrap-footer-widget">
                <p>&copy; 2018 <a href="https://uicookies.com/">es | Lavely</a>.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="probootstrap-footer-widget right">
                <ul className="probootstrap-social">
                  <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-facebook"></i></a></li>
                  <li><a href="#"><i className="icon-instagram2"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
