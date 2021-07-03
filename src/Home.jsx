import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  let history = useHistory();
  

  
 
 
  function getdata(val) {
    setData(val.target.value);
  }
  
  
  function login() 
  {
    let a = document.getElementById("floatingInput").value.toUpperCase();
        console.log(a);
    let b = document.getElementById("floatingPassword").value.toUpperCase();
    let f=0;

    for(let i=1 ; i<=9;i++)
    {
      let m =("i19ma"+"00"+ i).toUpperCase();
      if(a === m && b === m)
      {
         f =1;
      }

    }
    for(let i=10 ; i<=54;i++)
    {
      let n = ("i19ma"+"0"+ i).toUpperCase();
      if(a === n && b === n)
      {
         f =1;
      }

    }
    
    
    if (f == 1) {
     
      history.push('/Books');
    } 

    
    else if(f == 0)
    {
     
         
      let t = document.getElementById('check1'); 
     
      t.click();
    }
   
    
  }
  



  return (
    
    <>
      <Navbar />
     
     
      <div className=" App container my-4">
        <h1 className="py-4 fonts">Welcome To AMHD E-Library</h1>
      </div>

      <div className="container-fluid my-4  ">
        <div className="row ">
          <div className="col-md  ltr  ">
            <img
              src="Leftimg.jpg"
              alt="Leftimg"
              className="img-thumbnail"
              style={{ border: "none" }}
            />
          </div>

          {/* ########## Right-Side ############ */}

          <div className="col-md boder rtl ">
            <div className=" size ">
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control "
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Enter Admission Number </label>
              </div>
              <div className="form-floating my-4">
                <input
                  onChange={getdata}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Enter Password</label>
              </div>
              <h6>{data}</h6>

              <div className="d-grid gap-2 col-6 mx-auto  ">
                {/* <NavLink className="nav-link btn btn-primary " aria-current="page" to="/Books" style={{color:'white'}} >Login</NavLink>
                <button onclick={login}  className=" btn btn-primary my-4 px-4 py-2">
                  <Link  style={{color:'white',textDecoration:'none'}}>Login</Link>
                  Login
                </button> */}

                <button
                  onClick={login}
                  type="button"
                  className="btn btn-primary"
                  style={{marginBottom:"10px"}}
                  
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-1" id="check1" style={{display:'none'}}>
  Launch Modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal-1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Alert</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Either fields are empty or invalid password or username
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

    </>
    
  );
 

  
 



};

export default Home;
