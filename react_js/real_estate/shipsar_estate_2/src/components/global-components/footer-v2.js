import React, { Component } from "react";
import footerdata from "../../data/footerdata.json";

class Footer_v1 extends Component {
  render() {
    return (
      <footer className="footer-area style-two">
        <div className="container">
          <div className="subscribe-area">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h2> Get Update </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean
                  fringilla dui nibh, idhendrerit Suspendisse faucibus nulla
                  accumsan.
                </p>
                <div className="rld-single-input">
                  <input type="text" placeholder="Your email Address" />
                  <button className="btn"> Submit Now </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-sm-4">
                <a className="footer-logo" href="https://shipsar.com">
                  <img src={"/assets/img/footer-logo.png"} alt={"imgattr"} />
                </a>
              </div>
              <div className="col-sm-8">
                <div className="footer-social text-sm-right">
                  <span> FOLLOW US </span>
                  <ul className="social-icon">
                    {footerdata.socialicon.map((item, i) => (
                      <li key={i}>
                        <a href={item.url} rel="noreferrer" target="_blank">
                          <i className={item.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">
                    {footerdata.popularserces.title}
                  </h4>
                  <ul>
                    {footerdata.popularserces.links.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}> {item.title} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">{footerdata.Homepress.title}</h4>
                  <ul>
                    {footerdata.Homepress.links.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}> {item.title} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">{footerdata.quicklink.title}</h4>
                  <ul>
                    {footerdata.quicklink.links.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}> {item.title} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <form className="widget widget-subscribe">
                  <div className="rld-single-input">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text" placeholder="Your@email.com" />
                  </div>
                  <button className="btn btn-yellow w-100"> Subscribe </button>
                </form>
              </div>
            </div>
          </div>
          <div className="copy-right text-center">
            © Copyright 2023 by Shipsar Developers.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer_v1;
