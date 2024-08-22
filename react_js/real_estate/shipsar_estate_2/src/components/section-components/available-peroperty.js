import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";

class Property extends Component {
  render() {
    let imagealt = "image";
    let data = sectiondata.property;

    return (
      <div className="property-area pd-top-100 pd-bottom-70">
        <div className="container">
          {/*Property filter Start*/}
          <div className="property-filter-area row custom-gutter">
            <div className="gallery-sizer col-1" /> {/*property item Start*/}
            {data.items.map((item, i) => (
              <div key={i} className={"col-lg-3 col-sm-6"}>
                <div className="single-feature">
                  <img src={"/assets/img/feature/" + item.image} alt="img" />
                  <div className="details">
                    <a href="/" className="feature-logo">
                      <img
                        src={"/assets/img/icons/" + item.icon}
                        alt={imagealt}
                      />
                    </a>
                    <p className="author">
                      <i className="fa fa-user" /> {item.authorname}
                    </p>
                    <Link to={item.url}>
                      {" "}
                      <h6 className="title readeal-top text-dark">
                        {item.title}{" "}
                      </h6>
                    </Link>
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
                        {item.area}
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

export default Property;
