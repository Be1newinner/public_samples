import React, { Component } from "react";
import sectiondata from "../../data/sections.json";

class WhyChooseUs extends Component {
  render() {
    let imagealt = "image";
    let PaddingTop = this.props.PaddingTop
      ? this.props.PaddingTop
      : "pd-top-90";
    let PaddingBottom = this.props.PaddingBottom
      ? this.props.PaddingBottom
      : "pd-bottom-100";
    const data = [{}, {}, {}];
    return (
      <div className={"client-area " + PaddingTop + " " + PaddingBottom}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              What Our Customers <br /> Are Saying
            </h2>
          </div>
          <div className="client-review-img">
            <img
              className="clr-img clr-img1"
              src={"/assets/img/client/1.png"}
              alt="client"
            />
            <img
              className="clr-img clr-img2"
              src={"/assets/img/client/1.png"}
              alt="client"
            />
            <img
              className="clr-img clr-img3"
              src={"/assets/img/client/7.png"}
              alt="client"
            />
            <img
              className="clr-img clr-img4"
              src={"/assets/img/client/8.png"}
              alt="client"
            />
            <img
              className="clr-img clr-img5"
              src={"/assets/img/client/9.png"}
              alt="client"
            />
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="client-slider-2 text-center">
                  {data.map((item, i) => (
                    <div key={i} className="item">
                      <div className="single-client-review">
                        <div className="thumb">
                          <img src={"/assets/img/city/6.png"} alt={imagealt} />
                        </div>
                        <div className="review-details">
                          <p> The Content </p> <h4> The Name </h4>
                          <p> Founder </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyChooseUs;
