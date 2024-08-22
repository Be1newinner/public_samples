import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostList extends Component {
  render() {
    let data = [
      {
        image: "1.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
      {
        image: "2.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
      {
        image: "3.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
      {
        image: "4.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
      {
        image: "5.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
      {
        image: "6.jpg",
        url: "/news-details",
        title:
          "Major U.S. Metros Added 682 Million Feet of Office Space Over Last Decade",
        authorimage: "9.png",
        author: "By Agent",
        date: "17 hours ago",
        content:
          "According to real estate data provider Yardi Matrix, regionally across the U.S., the areas of growth were relatively distinct. Urban areas in the Pacific.",
      },
    ];

    return (
      <div>
        <div className="property-news-area pd-top-100 pd-bottom-70">
          <div className="container">
            <div className="row">
              {data.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="single-news">
                    <div className="thumb">
                      <img
                        src={"/assets/img/news/" + item.image}
                        alt={"imagealt"}
                      />
                    </div>
                    <div className="details">
                      <Link to={item.url}>
                        <h4 className="text-dark font-medium">{item.title} </h4>
                      </Link>
                      <p> {item.content} </p>
                      <div className="author">
                        <img
                          src={"/assets/img/news/" + item.authorimage}
                          alt={"imagealt"}
                        />
                        <span> By {item.author} </span>
                        <span className="date"> {item.date} </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
