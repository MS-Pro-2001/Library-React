import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar_2 = (props) => {
  //  const [search, setsearch] = useState(null);



  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img
            src="svnit.png"
            alt="Logo"
            width="50px"
            height="50px"
            style={{ marginRight: "8px" }}
          />
          <a className="navbar-brand" href="#">
            
            AMHD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Books">
                  Books
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Admin">
                  Admin
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Logout
                </NavLink>
              </li>
            </ul>

            {props.search ? (
              <form className="d-flex">
                <input
                  id="filter"
                  className="form-control me-2 filter"
                  type="search"
                  placeholder="Search Books"
                  aria-label="Search"
                  onChange={searchBooks}
                />
              </form>
            ) : ""}

          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar_2;
