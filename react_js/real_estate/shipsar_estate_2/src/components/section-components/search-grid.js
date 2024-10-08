import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchGrid extends Component {
  render() {
    let data = [
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
      {
        image: "/assets/img/feature/4.png",
        icon: "/assets/img/icons/l3.png",
        authorname: "Vijay Kumar",
        title: "Property 1",
        url: "/property-details",
        newerprice: "INR 3.5 cr",
        olderprice: "INR 3.8 cr",
      },
    ];

    return (
      <div className="search-page-wrap pd-top-100 pd-bottom-70">
        <div className="search-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 sitebar">
                <h6 className="filter-title mb-4">
                  <img
                    className="mr-3"
                    src={"/assets/img/icons/18.png"}
                    alt="img"
                  />
                  Filter
                </h6>
                <form className="widget widget-sidebar-search-wrap">
                  <div className="widget-sidebar-search">
                    <div className="title"> Any Price </div>
                    <div className="widget-sidebar-item-wrap btn-area">
                      <a className="btn btn-yellow" href="#">
                        For Buy
                      </a>
                      <a className="btn btn-yellow float-right" href="#">
                        For Rent
                      </a>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-input left-icon">
                      <input
                        type="text"
                        placeholder="Entry Landmark Location"
                      />
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select">
                      <select className="select single-select">
                        <option value={1}> All Properties </option>
                        <option value={2}> Properties 1 </option>
                        <option value={3}> Properties 2 </option>
                        <option value={3}> Properties 3 </option>
                      </select>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-price-slider-wrap">
                      <div className="title"> Any Price </div>
                      <div className="price">
                        <span> $750 .00 </span>
                        <span className="float-right"> $3500 .00 </span>
                      </div>
                      <div className="rld-price-slider">
                        <div className="ui-slider-handle-price ui-slider-handle" />
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-price-slider-wrap">
                      <div className="title"> Size </div>
                      <div className="price">
                        <span> 600 </span>
                        <span className="float-right"> 6500 sqf </span>
                      </div>
                      <div className="rld-size-slider">
                        <div className="ui-slider-handle-size ui-slider-handle" />
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title d-inline-block float-left mb-0 pt-2">
                        Bedroom
                      </div>
                      <div className="rld-single-select d-inline-block float-right">
                        <select className="select single-select">
                          <option value={1}> 2 - 4 </option>
                          <option value={2}> 3 - 4 </option>
                          <option value={3}> 1 - 3 </option>
                          <option value={3}> 2 - 4 </option>
                        </select>
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title d-inline-block float-left mb-0 pt-2">
                        Bathroom
                      </div>
                      <div className="rld-single-select d-inline-block float-right">
                        <select className="select single-select">
                          <option value={1}> 2 - 4 </option>
                          <option value={2}> 3 - 4 </option>
                          <option value={3}> 1 - 3 </option>
                          <option value={3}> 2 - 4 </option>
                        </select>
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap mb-0">
                      <div className="title d-inline-block float-left mb-0 pt-2">
                        Parking
                      </div>
                      <div className="rld-single-select d-inline-block float-right">
                        <select className="select single-select">
                          <option value={1}> 2 - 4 </option>
                          <option value={2}> 3 - 4 </option>
                          <option value={3}> 1 - 3 </option>
                          <option value={3}> 2 - 4 </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrap text-center">
                    <button className="btn btn-yellow">
                      <span className="left">
                        <i className="fa fa-search" />
                      </span>
                      Find Property
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="row mb-3">
                  <div className="col-md-9 col-sm-8">
                    <h6 className="filter-title mt-3 mb-lg-0">73 Properties</h6>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <div className="rld-single-select">
                      <select className="select single-select">
                        <option value={1}> Tile View </option>
                        <option value={2}> Tile View 1 </option>
                        <option value={3}> Tile View 2 </option>
                        <option value={3}> Tile View 3 </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {data.map((item, i) => (
                    <div key={i} className="col-xl-4 col-sm-6">
                      <div className="single-feature">
                        <div className="thumb">
                          <img src={item.image} alt="img" />
                        </div>

                        <div className="details">
                          <a href="https://shipsar.in" className="feature-logo">
                            <img src={item.icon} alt={"imagealt"} />
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
                            {/* {item.features.map((features, i) => (
                              <li key={i}>
                                <i className={features.icon} /> {features.title}
                              </li>
                            ))} */}
                            <li>
                              <img
                                src={"/assets/img/icons/7.png"}
                                alt={"imagealt"}
                              />
                              {item.area}
                            </li>
                          </ul>
                          <ul className="contact-list">
                            <li>
                              <a className="phone" href="https://shipsar.in">
                                <i className="fa fa-phone" />
                              </a>
                            </li>
                            <li>
                              <a className="message" href="https://shipsar.in">
                                <img
                                  src={"/assets/img/icons/8.png"}
                                  alt="img"
                                />
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
          </div>
        </div>
      </div>
    );
  }
}

export default SearchGrid;
