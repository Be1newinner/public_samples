import React, { Component } from "react";

class Mission extends Component {
  render() {
    let data = [
      {
        number: "01",
        title: "Our Mission",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi.",
      },
      {
        number: "02",
        title: "Our Approach",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi.",
      },
      {
        number: "03",
        title: "Our Philosphy",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi.",
      },
    ];

    return (
      <div className="mission-vission-area pd-top-80 pd-bottom-70">
        <div className="container">
          <div className="row justify-content-center">
            {data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="single-intro text-lg-left text-center">
                  <div className="text"> {item.number} </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="/"> {item.title} </a>
                    </h4>
                    <p> {item.content} </p>
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

export default Mission;
