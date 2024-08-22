import React, { Component } from "react";

class SearchMap extends Component {
  render() {
    let imagealt = "image";
    let data = {
      items: [
        {
          image: "5.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "1.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "2.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "3.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "4.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "6.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "5.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "1.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "2.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "3.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "4.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
        {
          image: "6.png",
          icon: "l3.png",
          authorname: "Vijay Kumar",
          url: "https://shipsar.in",
          title: "Jason Landville Apartment",
          newerprice: "INR 4 CR /-",
          olderprice: "INR 3.8 CR /-",
        },
      ],
    };

    return (
      <div className="search-page-area ">
        <div className="search-container">
          {/* search map start */}
          <div className="container pd-bottom-70">
            <div className="search-page-right-side">
              <div className="row">
                <div className="col-sm-8">
                  <div className="section-title">
                    <h4 className="title"> Apartments </h4>
                  </div>
                </div>
              </div>
              <div className="rld-main-search">
                <div className="row">
                  <div className="colx col1">
                    <div className="rld-single-input left-icon">
                      <input
                        type="text"
                        placeholder="Entry Landmark Location"
                      />
                    </div>
                  </div>
                  <div className="colx col2">
                    <div className="rld-single-select">
                      <select className="select single-select">
                        <option value={1}> All Properties </option>
                        <option value={2}> Properties 1 </option>
                        <option value={3}> Properties 2 </option>
                        <option value={3}> Properties 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="colx col3">
                    <div className="rld-single-select">
                      <select className="select single-select">
                        <option value={1}> Room </option>
                        <option value={2}> Room 1 </option>
                        <option value={3}> Room 2 </option>
                        <option value={3}> Room 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="colx col3">
                    <div className="rld-single-select">
                      <select className="select single-select">
                        <option value={1}> Any Price </option>
                        <option value={2}> Price 1 </option>
                        <option value={3}> Price 2 </option>
                        <option value={3}> Price 3 </option>
                      </select>
                    </div>
                  </div>
                  <div className="colx col3">
                    <a className="btn btn-yellow" href="/">
                      SEARCH NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tabs_1">
                  <div className="row justify-content-center">
                    {data.items.map((item, i) => (
                      <div key={i} className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <div className="thumb">
                            <img
                              src={"/assets/img/feature/" + item.image}
                              alt="img"
                            />
                          </div>

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
                            <a href={item.url}>
                              <h6 className="title text-dark">{item.title} </h6>
                            </a>
                            <h6 className="price"> {item.newerprice} </h6>
                            <del>{item.olderprice}</del>
                            <ul className="info-list">
                              {/* {item.features.map((features, i) => (
                                <li key={i}>
                                  <i className={features.icon} />
                                  {features.title}
                                </li>
                              ))} */}
                              <li>
                                <img
                                  src={"/assets/img/icons/7.png"}
                                  alt={imagealt}
                                />
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
                                  <img
                                    src={"/assets/img/icons/8.png"}
                                    alt="img"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="btn btn-yellow"
                                  href="/property-details"
                                >
                                  View Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-pane fade" id="tabs_2">
                  {/* {searchlist.items.map((item, i) => (
                    <div key={i} className="single-feature style-two">
                      <div className="thumb">
                        <img src={publicUrl + item.image} alt="img" />
                      </div>
                      <div className="details">
                        <div className="details-wrap">
                          <a href="/" className="feature-logo">
                            <img src={publicUrl + item.icon} alt={imagealt} />
                          </a>
                          <p className="author">
                            <i className="fa fa-user" /> {item.authorname}
                          </p>
                          <h6 className="title">
                            <a href={item.url}> {item.title} </a>
                          </h6>
                          <h6 className="price"> $350 / mo </h6>
                          <del>$790/mo </del>
                          <ul className="info-list">
                            {item.features.map((features, i) => (
                              <li key={i}>
                                <i className={features.icon} /> {features.title}
                              </li>
                            ))}
                            <li>
                              <img
                                src={publicUrl + "/assets/img/icons/7.png"}
                                alt={imagealt}
                              />
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
                                <img
                                  src={publicUrl + "/assets/img/icons/8.png"}
                                  alt="img"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                className="btn btn-yellow"
                                href="property-details.html"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchMap;
