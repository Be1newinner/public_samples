import React, { Component } from "react";
import sectiondata from "data/sections.json";

class OurPartner extends Component {
  render() {
    let data = sectiondata.partner;

    return (
      <div className="client-area pd-top-92 pd-bottom-100">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title"> Our Partner </h2>
          </div>
          <div
            className="client-slider"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {data?.items?.map((item, i) => (
              <div key={i} className="item">
                <div className="thumb">
                  <img src={"/assets/img/client/" + item.image} alt="client" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OurPartner;
