import React from "react";

import { Link, useHistory } from "react-router-dom";

const Navbar = () => {

  let hist =useHistory();
  function submit(val)
  {
    
    let a = document.getElementById('add').value.toUpperCase();

    if(a === "SVNIT123" )
    {
      document.getElementById('active').classList.remove('disabled');

    }

  }

  function adm()
  {
          hist.push('/Admin');
  }

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
              {/* <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/Books">Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/Admin">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/Contact">Contact Us</NavLink>
        </li> */}
            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button  className="btn btn-outline-light" > <NavLink  className="nav-link " style={{color:'white'}} aria-current="page" to="/Admin">Admin Panel</NavLink> </button> */}
               {/* <button
                type="button"
                className="btn btn-outline-light"
                onClick={submit}
              
              >
               <Link to="/Admin">Admin Panel</Link> 
              </button>  */}
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Admin Panel
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a class="dropdown-item" href="#">Password:</a></li>
  
    
    <input type="text" id="add" onChange={submit}  />
    <button  id="active" onClick={adm} className="btn btn-primary disabled " >Submit</button>
    
   
  </ul>
</div>
              
            </form>
           
          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
