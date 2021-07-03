import React from "react";
import Navbar_2 from './Navbar_2';

const Contact = () => {
  return (
    <>
    <Navbar_2 />
      <div className="container my-4">
        <div className="row my-4">
          <div className="col-8 mx-auto my-4">
            <form>
              <div className="mb-3">
                <label htmlFor="BookName" className="form-label">
                  <strong>Email Address</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter email address here"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="BookName" className="form-label">
                  <strong>Admission Number</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter email address here"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <label htmlFor="BookName" className="form-label">
                  <strong>Suggestions</strong>
                </label>

              <div className="form-floating ">
              
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{height: "100px"}}>

                  </textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <div className="text-center">
              <button type="submit" className="btn btn-primary my-4 ">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
