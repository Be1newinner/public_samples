import React from "react";

function ServiceTwo() {
  const data = [{}, {}, {}];
  const inlineStyle = {
    backgroundImage: "url('/assets/img/bg/5.png')",
  };

  return (
    <div
      className="service-area service-area-about mg-bottom-100 pb-xl-5 pd-0"
      style={inlineStyle}
    >
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title"> Best Service </h5>
          <h2 className="title"> Service We Provide</h2>
          <p>
            WPartner with a top neighborhood specialist to sell your home.
            Combined
            <br /> with our high level marketing approach, negotiation skills,
          </p>
        </div>
        <div className="service-slider-2 row pb-xl-5 pd-0 gap-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="item"
              style={{
                backgroundColor: "rgba(255,255,255, 1)",
                borderRadius: 10,
                width: 400,
                minHeight: 200,
                paddingTop: 20,
                boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.08)",
              }}
            >
              <div className="single-intro text-center">
                <div className="thumb">
                  <img src={"/assets/img/icons/1.png"} alt={"imagealt"} />
                </div>
                <div className="details">
                  <h4 className="title">
                    <a href={"https://www.google.com"}>
                      {" "}
                      Our Marketing Analysis{" "}
                    </a>
                  </h4>
                  <p>
                    The Content 1 is here. <br /> the content is 2 is here.
                  </p>
                  <a className="read-more" href={"https://www.google.com"}>
                    Read More
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

export default ServiceTwo;
