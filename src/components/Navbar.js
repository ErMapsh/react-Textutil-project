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

        {/* for deployement
        <a className="navbar-brand nav-link" href="#" style={mycolor}>
          {" "}{props.title}{" "}
        </a> */}


        <Link className="navbar-brand nav-link" to="/" style={mycolor}>
          {" "}
          {props.title}{" "}
        </Link>

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

              {/* for deployment
              <a href="#" className="nav-link active"
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

            {/* {<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">About</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> } */}

            {/* <li className="nav-item">
              <a className="nav-link disabled">{props.about}</a>
            </li> */}
          </ul>

          <div
            className="btn-group mx-3"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger" onClick={props.red} style={{ cursor: "pointer" }}>
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
            <button type="button" className="btn btn-success" onClick={props.green} style={{ cursor: "pointer" }}>
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
              style={{cursor: "pointer"}}
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
