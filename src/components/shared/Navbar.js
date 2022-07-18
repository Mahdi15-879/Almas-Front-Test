import React from "react";

// Styles
import "./Navbar.css";

// SVG
import magnifier from "../../assets/Magnifier.svg";
import location from "../../assets/Location.svg";
import profile from "../../assets/Profile.svg";
import logo from "../../assets/Logo.svg";
import line from "../../assets/Line.svg";
import plus from "../../assets/Plus.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="Navbar__col-1">
          <span className="Navbar__location">
            <h3>اصفهان</h3>
            <figure>
              <img src={location} alt="Location" />
            </figure>
          </span>

          <span className="Navbar__profile">
            <button>
              علیرضا شفیعی
              <figure>
                <img src={profile} alt="Profile" />
              </figure>
            </button>
          </span>

          <span className="Navbar__services">
            <button>
              ایجاد خدمت
              <figure>
                <img src={plus} alt="Plus" />
              </figure>
            </button>
          </span>
        </div>

        <div className="Navbar__col-2-cnr">
          <div className="Navbar__col-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <input placeholder="چه خدمتی از ما ساخته است؟" />
              <button type="submit">
                <figure>
                  <img src={magnifier} alt="Magnifier" />
                </figure>
              </button>
              <figure className="Line">
                <img src={line} alt="Line" />
              </figure>
            </form>
          </div>

          <div className="Navbar__col-3">
            <figure>
              <img src={logo} alt="Logo" />
            </figure>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
