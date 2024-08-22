import React, { Component } from "react";
import sectiondata from "../../data/sections.json";

class SellHome extends Component {
  render() {
    let imagealt = "image";
    let data = sectiondata.sellhome;

    return (
      <div
        className="sell-home-area rld-1-3-bg pd-top-100 pd-bottom-100"
        style={{
          backgroundImage: "url('/assets/img/bg/6.png')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="shape-image-list-wrap">
                <img
                  className="shadow-img"
                  src={"/assets/img/others/9.png"}
                  alt={"imagealt"}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-title pd-left mb-0">
                <h2 className="title inner-title font-bold">
                  {"Sell your"} <br /> {"Home for More"}
                </h2>
                <p>
                  {" "}
                  {
                    "Partner with a top neighborhood specialist to sell your home. Combined with our high level marketing approach, negotiation skills, technology, transparency, and experience, our concierge service provides results second to none"
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

export default SellHome;
