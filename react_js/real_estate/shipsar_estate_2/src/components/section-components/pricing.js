import React, { Component } from "react";

class Pricing extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = [
      {
        icon: "22.png",
        feature: [
          "Rank booster",
          "Lead capturing buttons",
          "Connect your social media",
          "Display your contact info",
        ],
        name: "STANDARD",
        price: "INR 500 /-",
        btntxt: "Buy Plan",
        url: "https://shipsar.in",
      },
      {
        icon: "22.png",
        feature: [
          "Rank booster",
          "Lead capturing buttons",
          "Connect your social media",
          "Display your contact info",
        ],
        name: "STANDARD",
        price: "INR 500 /-",
        btntxt: "Buy Plan",
        url: "https://shipsar.in",
      },
      {
        icon: "22.png",
        feature: [
          "Rank booster",
          "Lead capturing buttons",
          "Connect your social media",
          "Display your contact info",
        ],
        name: "STANDARD",
        price: "INR 500 /-",
        btntxt: "Buy Plan",
        url: "https://shipsar.in",
      },
      {
        icon: "22.png",
        feature: [
          "Rank booster",
          "Lead capturing buttons",
          "Connect your social media",
          "Display your contact info",
        ],
        name: "STANDARD",
        price: "INR 500 /-",
        btntxt: "Buy Plan",
        url: "https://shipsar.in",
      },
    ];

    return (
      <div className="user-list-area pd-top-90 pd-bottom-70">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title"> {"Pricing"} </h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="single-pricing text-center border border-gray-900	">
                  <div className="thumb double-img">
                    <img
                      src={"/assets/img/icons/" + item.icon}
                      alt={imagealt}
                    />
                  </div>
                  <div className="details">
                    <h4 className="title"> {item.name} </h4>
                    <h3 className="price"> {item.price} </h3>
                    <h6> Every Week </h6>
                    <ul>
                      {item.feature.map((featuresitem, i) => (
                        <li className="text-gray-400" key={i}>
                          {" "}
                          {featuresitem}{" "}
                        </li>
                      ))}
                    </ul>
                    <a className="btn btn-yellow" href={item.url}>
                      {item.btntxt}
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

export default Pricing;
