import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Comments from "./comments";
class NewsDetails extends Component {
  render() {
    let imagealt = "image";
    let data = {
      author: "Vijay Kumar",
      date: "17 hours ago",
      title:
        "Major U.S. Metros Added 682 Million Feet of Office Space Ov Last Decade      ",
    };

    return (
      <div>
        <div className="news-details-area">
          <div className="container">
            <div className="news-details-author-social">
              <div className="row">
                <div className="col-sm-6 mb-4 mg-sm-0">
                  <div className="author">
                    <img src={"/assets/img/news/15.png"} alt="news" />
                    <p> By {data.author} </p> <p> {data.date} </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <ul className="social-icon style-two text-sm-right">
                    {/* {data.social.map((item, i) => (
                      <li key={i}>
                        <a
                          className={item.class}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={item.icon} />
                        </a>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pd-top-70">
              <div className="col-lg-8">
                <div className="news-details-wrap">
                  <h3 className="title1 font-medium text-4xl">{data.title} </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                    lobortis enim vel leo laoreet, quis sodales purus
                    blandit.Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.Quisque blandit
                    justo et erat aliquam, vitae suscipit neque sagittis.Nullam
                    auctor, nisi eu imperdiet vehicula, arcu purus efficitur
                    tellus, nonporttitor velit mi eget magna.Suspendisse a nisi
                    nulla.Nulla luctus porttitor orci, a fermentum diam vehicula
                    sed.Nullam luctus, enim cursus ultricies porta, elit massa
                    pretium lacus, a accumsan odio libero sed dui.Donec vel
                    condimentum metus.
                  </p>
                  <img
                    className="news-details-thumb"
                    src={"/assets/img/news/12.png"}
                    alt="img"
                  />
                  <h5 className="title2">
                    Iron ore is Asia’ s first truly global commodity.It is also
                    a strategic commodity for China as the country continues to
                    build its second - and third - tier cities.China 's
                    internationalization is important in driving a substantial
                    level of interest from physical as well as financial
                    participants.”
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                    lobortis enim vel leo laoreet, quis sodales purus
                    blandit.Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.Quisque blandit
                    justo et erat aliquam, vitae suscipit neque sagittis.Nullam
                    auctor,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                    lobortis enim vel leo laoreet, quis sodales purus
                    blandit.Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.Quisque blandit
                    justo et erat aliquam, vitae suscipit neque sagittis.Nullam
                    auctor, nisi eu imperdiet vehicula, arcu purus efficitur
                    tellus, nonporttitor velit mi eget magna.Suspendisse a nisi
                    nulla.Nulla luctus porttitor orci, a fermentum diam vehicula
                    sed.Nullam luctus, enim cursus ultricies porta, elit massa
                    pretium lacus, a accumsan odio libero sed dui.Donec vel
                    condimentum metus.
                  </p>
                  <div className="row news-details-thumb">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <img src={"/assets/img/news/13.png"} alt={"imagealt"} />
                    </div>
                    <div className="col-sm-6">
                      <img src={"/assets/img/news/14.png"} alt={"imagealt"} />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                    lobortis enim vel leo laoreet, quis sodales purus
                    blandit.Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.Quisque blandit
                    justo et erat aliquam, vitae suscipit neque sagittis.Nullam
                    auctor,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                    lobortis enim vel leo laoreet, quis sodales purus
                    blandit.Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.Quisque blandit
                    justo et erat aliquam, vitae suscipit neque sagittis.Nullam
                    auctor, nisi eu imperdiet vehicula, arcu purus efficitur
                    tellus, nonporttitor velit mi eget magna.Suspendisse a nisi
                    nulla.Nulla luctus porttitor orci, a fermentum diam vehicula
                    sed.Nullam luctus, enim cursus ultricies porta, elit massa
                    pretium lacus, a accumsan odio libero sed dui.Donec vel
                    condimentum metus.
                  </p>
                </div>
                <Comments />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsDetails;
