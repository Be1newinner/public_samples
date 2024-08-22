import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";

class Featured extends Component {
  render() {
    let imagealt = "image";
    let data = sectiondata.featuredproperties;
    let Customclass = this.props.Customclass
      ? this.props.Customclass
      : "pd-top-60";

    return (
      <div className={"featured-area  " + Customclass}>
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{ fontSize: 40, fontWeight: 600 }}>
              Featured Properties
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="single-leading-feature">
                <div className="slf-overlay" />
                <div className="thumb">
                  <img
                    src={"/assets/img/feature/1.png"}
                    alt="Gurgaon Real Estate"
                  />
                </div>
                <div className="details">
                  <h4 className="title readeal-top">
                    <Link
                      style={{
                        color: "white",
                        fontSize: 24,
                      }}
                      to="/property-details"
                    >
                      Jason Landville Apartment
                    </Link>
                  </h4>
                  <h5 className="price"> INR 35K/mo </h5>
                  <span> 4 Bed, 3 Beth, Flats. Area 1448-2537 sqft </span>
                </div>
              </div>
            </div>
            {data?.items?.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-feature">
                  <div className="thumb">
                    <img
                      src={"/assets/img/feature/" + item?.image}
                      alt={imagealt}
                    />
                  </div>
                  <div className="details">
                    <a href="/" className="feature-logo">
                      <img
                        src={"/assets/img/icons/" + item?.icon}
                        alt={imagealt}
                      />
                    </a>
                    <p className="author">
                      <i className="fa fa-user" /> {item?.authorname}
                    </p>
                    <h6 className="readeal-top">
                      <Link
                        style={{ color: "black", fontWeight: "bold" }}
                        to={item?.url}
                      >
                        {item?.title}
                      </Link>
                    </h6>
                    <h6 className="price"> {item?.newerprice} </h6>
                    <del>{item?.olderprice}</del>
                    <ul className="info-list">
                      {item?.features.map((features, i) => (
                        <li key={i}>
                          <i className={features.icon} /> {features.title}
                        </li>
                      ))}
                      <li>
                        <img src={"/assets/img/icons/7.png"} alt="img" />
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
                        <a href="/">
                          <img src={"/assets/img/icons/8.png"} alt="img" />
                        </a>
                      </li>
                      <li>
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

export default Featured;
