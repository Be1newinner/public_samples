import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";

class RecentProperties extends Component {
  render() {
    let imagealt = "image";
    let data = sectiondata.recentproperties;

    return (
      <div className="properties-area pd-top-92">
        <div className="container ">
          <div className="section-title">
            <h2
              style={{
                color: "black",
                fontSize: 40,
                fontWeight: 600,
              }}
            >
              Recent Properties for Sold
            </h2>
            <Link className="btn-view-all" to={"/"}>
              View All
            </Link>
          </div>
          <div
            className="row flex-wrap"
            style={{
              justifyContent: "space-between",
            }}
          >
            {data?.items?.map((item, i) => (
              <div key={i} className="ml-auto mr-auto recent-child">
                <div className="single-feature">
                  <div className="thumb">
                    <img src={"/assets/img/feature/" + item?.image} alt="img" />
                  </div>
                  <div className="details">
                    <a href="/" className="feature-logo">
                      <img
                        src={"/assets/img/icons/" + item?.icon}
                        alt={imagealt}
                      />
                    </a>
                    <p className="author">
                      <i className="fa fa-user" /> {item.authorname}
                    </p>
                    <h6 className="title  readeal-top">
                      <Link
                        style={{
                          fontSize: 18,
                          color: "black",
                        }}
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                    </h6>
                    <h6 className="price"> {item.newerprice} </h6>
                    <del>{item.olderprice}</del>
                    <ul className="info-list">
                      {item.features.map((features, i) => (
                        <li key={i}>
                          <i className={features.icon} /> {features.title}
                        </li>
                      ))}
                      <li>
                        <img src={"/assets/img/icons/7.png"} alt={imagealt} />
                        1898 sq.
                      </li>
                    </ul>
                    <ul className="contact-list">
                      <li>
                        <a className="phone" href="/">
                          <i className="fa fa-phone" />
                        </a>
                      </li>
                      <li>
                        <a className="message" href="/">
                          <img src={"/assets/img/icons/8.png"} alt="img" />
                        </a>
                      </li>
                      <li className="readeal-top">
                        <Link className="btn btn-yellow" to={item.url}>
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentProperties;
