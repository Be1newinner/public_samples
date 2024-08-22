import React, { Component } from "react";
// import parse from "html-react-parser";

class Professional extends Component {
  render() {
    let imagealt = "image";

    return (
      <div className="Professisonal-area pd-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1 order-lg-12 mb-4 mb-lg-0">
              <div className="shape-image-list-wrap">
                <img
                  className="shadow-img"
                  src={"/assets/img/others/8.png"}
                  alt={imagealt}
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center order-lg-1">
              <div className="section-title mb-0">
                <h2 className="title inner-title font-bold">
                  {"Top Local"} <br /> {"Professisonals"}
                </h2>
                <p>
                  {
                    "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
                  }
                </p>
                <a className="btn btn-yellow pt-2" href={"https://shipsar.in"}>
                  {"Connect Now"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
