import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let mycolor = { color: "white" };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark px-3`}
    >
      <div className="container-fluid">
        {/* for deployement */}
        {/* <a className="navbar-brand nav-link" style={mycolor}>
          {" "}{props.title}{" "}
        </a> */}

        <label className="navbar-brand nav-link" style={mycolor}>
          {" "}
          {props.title}{" "}
        </label>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* for deployment */}

              {/* <a href="#" className="nav-link active"
                aria-current="page"
                style={mycolor}
              >Home
              </a> */}

              <Link
                className="nav-link active "
                aria-current="page"
                to="/"
                style={mycolor}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" style={mycolor}>
                About
              </Link>
            </li>
          </ul>

          <div
            className="btn-group mx-3"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.red}
              style={{ cursor: "pointer" }}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={props.yellow}
              style={{ cursor: "pointer" }}
            >
              Yellow
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={props.green}
              style={{ cursor: "pointer" }}
            >
              Green
            </button>
          </div>

          <div
            className={`form-check form-switch text-
            // ${props.mode === "light" ? "dark" : "light"}
            `}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              idname="flexSwitchCheckDefault"
              onClick={props.togglemode}
              style={{ cursor: "pointer" }}
            />
            <label
              className="form-check-label"
              forhtml="flexSwitchCheckDefault"
              style={mycolor}
            >{`Enable ${props.mode} Mode`}</label>
          </div>

          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "This is default title",
  about: "This is default about",
};
