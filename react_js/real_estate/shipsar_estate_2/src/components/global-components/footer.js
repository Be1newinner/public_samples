import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer_v1() {
  const footerdata = {
    socialicon: [
      { url: "https://shipsar.in", icon: <FaFacebook size={30} /> },
      { url: "https://shipsar.in", icon: <FaInstagram size={30} /> },
      { url: "https://shipsar.in", icon: <FaTwitter size={30} /> },
      { url: "https://shipsar.in", icon: <FaYoutube size={30} /> },
    ],
    popularserces: [
      { url: "https://shipsar.in", title: "4BHK Flat in delhi" },
      { url: "https://shipsar.in", title: "Independent homes in delhi" },
      { url: "https://shipsar.in", title: "High RIse Apartments" },
      { url: "https://shipsar.in", title: "1RK home for rent" },
      { url: "https://shipsar.in", title: "2BHk homes" },
      { url: "https://shipsar.in", title: "Low Rise Apartments" },
    ],
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-sm-4">
              <a className="footer-logo" href="/">
                <img src={"/assets/img/footer-logo.png"} alt={"Footer logo"} />
              </a>
            </div>
            <div className="col-sm-8">
              <div className="footer-social text-sm-right">
                <ul className="social-icon">
                  {footerdata?.socialicon?.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item?.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom ">
          <div className="row ">
            <div className="col-lg-3 col-sm-6 ">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title text-center">Popular Searches</h4>
                <ul className="">
                  {footerdata?.popularserces?.map((item, i) => (
                    <li className="readeal-top text-center" key={i}>
                      <Link to={item?.url}> {item?.title} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title  text-center">Homepress Markets</h4>
                <ul>
                  {footerdata?.popularserces?.map((item, i) => (
                    <li className="readeal-top text-center" key={i}>
                      <Link to={item?.url}> {item?.title} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title text-center">Quick Links</h4>
                <ul>
                  {footerdata?.popularserces?.map((item, i) => (
                    <li className="readeal-top text-center" key={i}>
                      <Link to={item?.url}> {item?.title} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <form className="widget widget-subscribe" method="GET">
                <div className="rld-single-input">
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="rld-single-input">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your@email.com"
                  />
                </div>
                <button className="btn btn-yellow w-100"> Subscribe </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copy-right text-center">
          <h6 style={{ color: "black" }}>© Copyright Shipsar.in.</h6>
        </div>
      </div>
    </footer>
  );
}
