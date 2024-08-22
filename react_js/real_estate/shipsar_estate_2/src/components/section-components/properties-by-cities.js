import React, { Component } from "react";
// import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";
class PropertiesByCities extends Component {
  render() {
    // let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = {
      sectiontitle: "Section Title",
      intro: [
        {
          title: "Looking for the new home?",
          content:
            "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
          icon: "9.png",
        },
        {
          title: "Want to sell your home??",
          content:
            "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
          icon: "10.png",
        },
      ],
      items: [
        {
          image: "1.png",
          imagealt: "Delhi East Apartment",
          url: "/",
          city: "Delhi",
          content: "12 Properties",
          imgClass: "relative -bottom-4",
          class: "col-lg-2 col-sm-6 mt-auto",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "sc-one",
        },
        {
          image: "2.png",
          imagealt: "Delhi West Apartment",
          url: "/",
          city: "Delhi",
          content: "13 Properties",
          imgClass: "",
          class: "col-lg-2 col-sm-6 mt-auto",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "sc-two",
        },
        {
          image: "3.png",
          imagealt: "Delhi North Apartment",
          url: "/",
          city: "Delhi",
          content: "14 Properties",
          class: "col-lg-5 col-sm-6",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "",
        },
        {
          image: "4.png",
          imagealt: "Delhi South Apartment",
          url: "/",
          city: "Delhi",
          content: "15 Properties",
          class: "col-lg-3 col-sm-6",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "sc-three",
        },
        {
          image: "6.png",
          imagealt: "Delhi East Apartment",
          url: "/",
          city: "Delhi",
          content: "16 Properties",
          class: "col-lg-4 col-sm-6 ",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "",
        },
        {
          image: "7.png",
          imagealt: "Delhi East Apartment",
          url: "/",
          city: "Delhi",
          content: "17 Properties",
          class: "col-lg-4 col-sm-6",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "",
        },
        {
          image: "2.png",
          imagealt: "Delhi East Apartment",
          url: "/",
          city: "Delhi",
          content: "18 Properties",
          class: "col-lg-3 col-sm-6",
          features: [
            { icon: "fa fa-bed", title: "05 Bed" },
            { icon: "fa fa-bath", title: "02 Bath" },
          ],
          sectionclass: "",
        },
      ],
    };

    return (
      <div
        className="city-intro-area pd-bottom-70"
        style={{
          backgroundImage: `/assets/img/bg/2.png`,
        }}
      >
        {/* city area start */}
        <div className="city-area pd-top-92">
          <div className="container">
            <div className="section-title text-center">
              <h2 style={{ fontSize: 40, fontWeight: 600 }}>
                Properties by Cities
              </h2>
            </div>
            <div className="city-filter-area row">
              <div className="city-sizer bg-slate-500" />

              {data?.items?.map((item, i) => (
                <div
                  key={i}
                  className={"rld-city-item " + item.class}
                  style={{ position: "relative" }}
                >
                  <div
                    className={[
                      "single-city " + item.sectionclass + item?.imgClass,
                    ].join(" ")}
                  >
                    <div className="sc-overlay" />
                    <div className="thumb">
                      <img
                        src={"/assets/img/city/" + item?.image}
                        alt={imagealt}
                      />
                    </div>
                    <div className="details">
                      <h5>
                        <Link
                          style={{
                            color: "white",
                          }}
                          to={item.url}
                        >
                          {item.city}
                        </Link>
                      </h5>
                      <p> {item.content} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* city area end */} {/* intro area start */}
        <div className="intro-area pd-top-70">
          <div className="container">
            <div className="row">
              {data?.intro?.map((item, i) => (
                <div key={i} className="col-md col-sm-6-6">
                  <a
                    href={item.url}
                    className={"single-intro-media media " + item.class}
                  >
                    <div className="media-left">
                      <img
                        src={"/assets/img/icons/" + item?.icon}
                        alt={imagealt}
                      />
                    </div>
                    <div className="media-body">
                      <h4> {item.title} </h4> <p> {item.content} </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* intro area start */}
      </div>
    );
  }
}

export default PropertiesByCities;
