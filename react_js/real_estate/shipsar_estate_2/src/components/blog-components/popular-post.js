import React, { Component } from "react";
import { Link } from "react-router-dom";

class PopularPost extends Component {
  render() {
    let data = [
      {
        url: "/news-details",
        image: "1.png",
        title: "According to Real estate Data",
        date: "December 25, 2019",
      },
      {
        url: "/news-details",
        image: "1.png",
        title: "According to Real estate Data",
        date: "December 25, 2019",
      },
      {
        url: "/news-details",
        image: "1.png",
        title: "According to Real estate Data",
        date: "December 25, 2019",
      },
      {
        url: "/news-details",
        image: "1.png",
        title: "According to Real estate Data",
        date: "December 25, 2019",
      },
    ];

    return (
      <div>
        <div className="popular-post-area">
          <div className="container">
            <div className="post-and-search">
              <div className="news-search-btn">
                <i className="fa fa-search" />
              </div>
              <form className="news-search-box">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </form>
              <h6 className="mb-3 popular-post-title font-semibold">
                Popular Post
              </h6>
              <div className="popular-post-slider flex gap-2">
                {data.map((item, i) => (
                  <div key={i} className="item">
                    <Link to={item.url} className="media single-popular-post">
                      <div className="media-left">
                        <img
                          src={"/assets/img/popular-post/" + item.image}
                          alt={"imagealt"}
                        />
                      </div>
                      <div className="media-body">
                        <h6 className="text-dark"> {item.title} </h6>{" "}
                        <span className="text-dark"> {item.date} </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPost;
