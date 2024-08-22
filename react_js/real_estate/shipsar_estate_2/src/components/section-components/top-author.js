import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
// import parse from "html-react-parser";

class TopAuthor extends Component {
  render() {
    // let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = sectiondata?.topquthor;

    return (
      <div className="author-area pd-top-60 pd-bottom-70">
        <div className="container">
          <div className="section-title">
            <h2 className="title"> Top Author </h2>
          </div>
          <div className="row author-area-wrap">
            {data?.items?.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="single-author text-center">
                  <div className="thumb">
                    <img
                      src={"/assets/img/author/" + item.icon}
                      alt={imagealt}
                    />
                  </div>
                  <div className="author-details">
                    <h5 style={{ fontWeight: 600 }}> {item.compnaname} </h5>
                    <a
                      style={{ fontWeight: 600, color: "grey" }}
                      href={item.url}
                    >
                      View Profile
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

export default TopAuthor;
