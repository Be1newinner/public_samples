import React, { Component } from "react";

class Mission extends Component {
  render() {
    const data = [
      {
        icon: "3.png",
        url: "https://shipsar.in",
        title: "Founded",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi",
      },
      {
        icon: "4.png",
        url: "https://shipsar.in",
        title: "Financials",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi",
      },
      {
        icon: "5.png",
        url: "https://shipsar.in",
        title: "Owner and Developers",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi",
      },
    ];

    return (
      <div className="mission-vission-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row justify-content-center">
            {data.map((item, i) => (
              <div
                key={i}
                className={"col-xl-3 col-lg-4 col-sm-6 mb-3 " + item.class}
              >
                <div className="single-intro text-lg-left text-sm-center">
                  <div className="thumb">
                    <img
                      src={"/assets/img/icons/" + item.icon}
                      style={{
                        filter: "brightness(0) invert()",
                      }}
                      alt={""}
                    />
                  </div>
                  <div className="details">
                    <a href={item.url}>
                      <h4 className="title text-dark">{item.title} </h4>
                    </a>
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
