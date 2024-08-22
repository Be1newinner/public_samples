import React, { Component } from "react";

class Process extends Component {
  render() {
    const data = [
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        class: "class",
        content:
          "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        class: "class",
        content:
          "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        class: "class",
        content:
          "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        class: "class",
        content:
          "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        class: "class",
        content:
          "Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur",
      },
    ];
    return (
      <div className="faq-area pd-top-100 pd-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="section-title">
                <h2 className="font-medium text-5xl">
                  Frequently asked questions
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lobortis enim vel leo laoreet, quis sodales purus blandit.
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </div>
              <div className="accordion" id="accordion">
                {/* single accordion */}
                {data.map((item, i) => (
                  <div key={i} className="single-accordion card">
                    <div className="card-header" id={"headingOne" + i}>
                      <h2 className="mb-0">
                        <button
                          className="btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target={"#collapseOne" + i}
                          aria-expanded="true"
                          aria-controls={"collapseOne" + i}
                        >
                          {item.title}
                        </button>
                      </h2>
                    </div>
                    <div
                      id={"collapseOne" + i}
                      className={"collapse " + item.class}
                      aria-labelledby={"headingOne" + i}
                      data-parent="#accordion"
                    >
                      <div className="card-body"> {item.content} </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
              <div className="shape-image-list-wrap">
                <div className="shape-image-list left-top">
                  <img src={"/assets/img/others/6.png"} alt={"imagealt"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
