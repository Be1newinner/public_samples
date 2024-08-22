import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
// import parse from "html-react-parser";

class Process extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let data = sectiondata.process;

    return (
      <div className="process-area pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1 order-lg-12 mb-4 mb-lg-0">
              <div className="shape-image-list-wrap">
                <div className="shape-image-list right-top">
                  <img
                    className="shadow-img"
                    src={"/assets/img/others/7.png"}
                    alt={"imagealt"}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center order-lg-1">
              <div className="section-title mb-0">
                <h2 className="title inner-title font-bold">
                  {"Buying Process"} <br /> {"Simplified"}
                </h2>
                <p>
                  {" "}
                  {
                    "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
                  }{" "}
                </p>
                <a className="btn btn-yellow" href={"https://shipsar.in"}>
                  {"Find Out How"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
