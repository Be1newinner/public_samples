import React, { Component } from "react";

class UserList extends Component {
  render() {
    let data = [
      {
        url: "https://shipsar.in",
        name: "DLF",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
      {
        url: "https://shipsar.in",
        name: "M3M",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
      {
        url: "https://shipsar.in",
        name: "AIPL",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
      {
        url: "https://shipsar.in",
        name: "Tulip",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
      {
        url: "https://shipsar.in",
        name: "Suncity",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
      {
        url: "https://shipsar.in",
        name: "Emaar",
        content: "Los Angeles, city, United States of America",
        social: [
          { url: "https://shipsar.in", icon: "facebook" },
          { url: "https://shipsar.in", icon: "twitter" },
          { url: "https://shipsar.in", icon: "insta" },
        ],
      },
    ];

    return (
      <div className="user-list-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="single-user-list text-center border ">
                  <div className="thumb">
                    <img
                      src={"/assets/img/icons/l1.png"}
                      className="m-auto pt-4"
                      alt={"imagealt"}
                    />
                  </div>
                  <div className="details">
                    <a href={item.url}>
                      <h4 className="text-dark font-bold">{item.name}</h4>
                    </a>
                    <p>{item.content}</p>
                    <div className="social-list">
                      {item.social.map((socialitem, i) => (
                        <a key={i} href={socialitem.url}>
                          <i className="text-dark">{socialitem.icon}</i>
                        </a>
                      ))}
                    </div>
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

export default UserList;
