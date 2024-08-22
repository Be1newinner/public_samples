import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const menuData = [
    { url: "/", title: "Home", key: 0 },
    { url: "/property", title: "Property", key: 1 },
    { url: "/About", title: "About", key: 2 },
    { url: "/advisor", title: "Advisor", key: 3 },
    { url: "/faq", title: "FAQ", key: 4 },
    { url: "/pricing", title: "Pricing", key: 5 },
    { url: "/news", title: "News", key: 6 },
    { url: "/news-details", title: "News Details", key: 7 },
    { url: "/contact", title: "Contact Us", key: 8 },
  ];

  const [mobileState, setMobileState] = useState(false);

  return (
    <div className="navbar-area">
      {mobileState && (
        <div
          style={{
            background: "rgba(0,0,0,0.8)",
            width: "100vw",
            height: "100vh",
          }}
        >
          <nav
            style={{
              position: "absolute",
              zIndex: 9999999,
              background: "white",
              height: "100vh",
              width: "80%",
              maxWidth: 250,
              marginLeft: "auto",
              right: 0,
            }}
          >
            <div
              style={{
                height: 60,
              }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.1)",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  marginLeft: "auto",
                  marginRight: 10,
                  marginTop: 30,
                }}
                onClick={() => {
                  setMobileState(false);
                }}
              >
                <IoMdClose
                  size={40}
                  style={{
                    padding: 11,
                  }}
                />
              </div>
            </div>
            <div class="w-96 pl-8">
              {menuData?.map((item) => (
                <Link
                  key={item.key}
                  to={item.url}
                  class="text-black hover:bg-orange-100 block w-full cursor-pointer p-2 transition duration-500  focus:bg-orange-400 focus:text-white focus:ring-0 "
                  onClick={() => setMobileState(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-toggle="collapse"
              data-target="#realdeal_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setMobileState(true);
              }}
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo readeal-top">
            <Link to="/">
              <img src={"/assets/img/logo.png"} alt="logo" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <Link className="btn btn-yellow" to="/add-property">
              ADD LISTING
              <span className="right">
                <i className="la la-plus" />
              </span>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="realdeal_main_menu">
            <ul className="navbar-nav menu-open readeal-top">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="/"> Property </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/property"> Property </Link>
                  </li>
                  <li>
                    <Link to="/availavbe-property">Propertys Availavbe</Link>
                  </li>
                  <li>
                    <Link to="/properties-by-city"> Property By City </Link>
                  </li>
                  <li>
                    <Link to="/recent-properties"> Property Recenty </Link>
                  </li>
                  <li>
                    <Link to="/property-details"> Property Details </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/"> Pages </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/About"> About </Link>
                  </li>
                  <li>
                    <Link to="/advisor"> Advisor </Link>
                  </li>
                  <li>
                    <Link to="/search-grid"> Search Grid </Link>
                  </li>
                  <li>
                    <Link to="/faq"> FAQ </Link>
                  </li>
                  <li>
                    <Link to="/pricing"> Pricing </Link>
                  </li>
                  <li>
                    <Link to="/user-list"> User List </Link>
                  </li>
                  <li>
                    <Link to="/error"> 404 </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/"> News </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/news"> News </Link>
                  </li>
                  <li>
                    <Link to="/news-details"> News Details </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact"> Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop readeal-top">
            <Link className="btn btn-yellow" to="/add-property">
              ADD LISTING
              <span className="right">
                <i className="la la-plus" />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
