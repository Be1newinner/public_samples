import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
// import parse from 'html-react-parser';
import { Link } from "react-router-dom";

class Explore extends Component {
  render() {
    let data = sectiondata.explore;

    return (
      <div className="explore-area pd-top-85">
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{ fontSize: 40, fontWeight: 600 }}>
              Explore the Neighborhoods
            </h2>
          </div>
          <div className="row">
            {data?.items?.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="single-explore">
                  <div className="thumb">
                    <img
                      src={"/assets/img/explore/" + item.image}
                      alt="explore"
                    />
                    <a href="/">
                      <i className="fa fa-paper-plane" />
                    </a>
                  </div>
                  <div className="details">
                    <h4>
                      <Link style={{ color: "black" }} to="/properties-by-city">
                        {item?.city}
                      </Link>
                    </h4>
                    <ul className="list">
                      <li>
                        <img src={"/assets/img/icons/1.png"} alt="icona" />
                        Listings: {item?.lisgintnumber}
                      </li>
                      <li>
                        <i className="fa fa-usd" /> Price: $ {item.price}
                      </li>
                    </ul>
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

export default Explore;
