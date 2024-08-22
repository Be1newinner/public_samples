import React, { Component } from "react";

class Team extends Component {
  render() {
    const data = [
      {
        image: "1.png",
        imagealt: "Delhi East Apartment",
        url: "/",
        city: "Delhi",
        content: "12 Properties",
        class: "col-lg-2 col-sm-6",
        features: [
          { icon: "fa fa-bed", title: "05 Bed" },
          { icon: "fa fa-bath", title: "02 Bath" },
        ],
        sectionclass: "sc-one",
      },
      {
        image: "2.png",
        imagealt: "Delhi East Apartment",
        url: "/",
        city: "Delhi",
        content: "12 Properties",
        class: "col-lg-2 col-sm-6",
        features: [
          { icon: "fa fa-bed", title: "05 Bed" },
          { icon: "fa fa-bath", title: "02 Bath" },
        ],
        sectionclass: "sc-one",
      },
      {
        image: "3.png",
        imagealt: "Delhi East Apartment",
        url: "/",
        city: "Delhi",
        content: "12 Properties",
        class: "col-lg-2 col-sm-6",
        features: [
          { icon: "fa fa-bed", title: "05 Bed" },
          { icon: "fa fa-bath", title: "02 Bath" },
        ],
        sectionclass: "sc-one",
      },
      {
        image: "1.png",
        imagealt: "Delhi East Apartment",
        url: "/",
        city: "Delhi",
        content: "12 Properties",
        class: "col-lg-2 col-sm-6",
        features: [
          { icon: "fa fa-bed", title: "05 Bed" },
          { icon: "fa fa-bath", title: "02 Bath" },
        ],
        sectionclass: "sc-one",
      },
    ];

    return (
      <div className="team-area bg-gray mg-top-70 pd-top-90 pd-bottom-70">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title"> Our Team </h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="single-team">
                  <div className="thumb">
                    <img src={"/assets/img/team/" + item.image} alt="team" />
                  </div>
                  <div className="team-details">
                    <h4> {"Vijay"} </h4> <span> {"Founder"} </span>
                    <ul>
                      {item.features.map((social, i) => (
                        <li key={i}>
                          <a href={social.url}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
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

export default Team;
