import React, { Component } from "react";
// import parse from "html-react-parser";

class BuyOrSell extends Component {
  render() {
    let data = [
      {
        icon: "26.png",
        url: "https;//shipsar.in",
        btn_text: "Buying",
      },
      {
        icon: "27.png",
        url: "https;//shipsar.in",
        btn_text: "Selling",
      },
    ];

    return (
      <div className="buy-sell-area pd-bottom-70">
        <div className="container">
          <div className="section-title text-lg-center">
            <h2 className="font-bold"> {"Whether Buying or Selling"} </h2>{" "}
            <p> {"A top agent is here to help save you time."} </p>
          </div>
          <div className="row justify-content-center">
            {data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="single-author style-two text-center">
                  <div className="thumb">
                    <img
                      src={"/assets/img/icons/" + item.icon}
                      alt={"imagealt"}
                      className="ml-auto mr-auto mt-8"
                    />
                  </div>
                  <div className="author-details">
                    <a className="btn btn-yellow" href={item.url}>
                      {item.btn_text}
                    </a>
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

export default BuyOrSell;
