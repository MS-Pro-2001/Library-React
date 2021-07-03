import React from "react";
import Navbar_2 from './Navbar_2';

const Admin = () => {
  return (
    <>
    <Navbar_2  />
      <div className="container my-4">
        <div className="row my-4">
          <div className="col-8 mx-auto my-4">
            <form>
              <div className="mb-3">
                <label htmlFor="BookName" className="form-label">
                  <strong>Name of Book</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter the name of book here"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="BookName" className="form-label">
                  <strong>Name of Author</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter the name of Author here"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="BookName" className="form-label">
                  <strong>Link to download</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter the Link of book here"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
               <div className="text-center my-4">
              <button type="submit" className="btn btn-primary ">
                Add
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
