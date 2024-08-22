import React, { Component } from "react";
class AboutUs extends Component {
  render() {
    return (
      <div className="about-area pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="shape-image-list-wrap">
                <div className="shape-image-list left-top">
                  <img
                    className="shadow-img"
                    src={"/assets/img/others/7.png"}
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-title pd-left mb-0">
                <h5 className="sub-title"> {"About Us"} </h5>
                <h2 className="title">
                  {"We Are Dynamic Team And Business Agency"}
                </h2>
                <p>
                  {
                    "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
                  }
                </p>
                <a className="btn btn-yellow" href={"https://www.google.com"}>
                  more Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
