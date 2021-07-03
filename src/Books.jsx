import React from "react";
import Navbar_2 from "./Navbar_2";
import "./App.css";

const Books = () => {
  const cards = document.getElementsByClassName("card");

  function searchBooks(e) {

    
    // let title = cardcomponent[i].querySelector(".card-body h6.card-title ");
    console.log(cards);
    

    for (let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".card-body h6.card-title ");
      

      if (
        title.innerText.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
      ) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }

    
  }




  return (
    <>
      <Navbar_2   />
  
      <div className="container my-5">
      
                <input
                  id="filter"
                  className="form-control me-2 filter"
                  type="search"
                  placeholder="Search for a Book here"
                  aria-label="Search"
                  onChange={searchBooks}
                />
              

        
      </div>

      <div className="container-fluid mb-5 ">
        <div className="row ">
          <div className="col-12 mx-auto ">
            <div className="row gy-4">
            <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture1.jpg" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title">Algebra</h6>
                   
                    <a href="http://home.ustc.edu.cn/~liweiyu/documents/Algebra,%20Second%20Edition,%20Michael%20Artin.pdf" target="_blank" className="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture2.png" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title">An Introduction to Linear Algebra</h6>
                   
                    <a href="https://archive.org/details/in.ernet.dli.2015.135792" target="_blank" class="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture3.png" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title"> Modern Algebra</h6>
                   
                    <a href="https://www.pdfdrive.com/advanced-modern-algebra-joseph-j-rotmanpdf-e15131457.html" target="_blank" className="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture1.jpg" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title"> Real Analysis</h6>
                   
                    <a href="https://www.pdfdrive.com/methods-of-real-analysisrichard-r-goldberg-d52359301.html" target="_blank" className="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture3.png" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title">Advanced Modern Algebra</h6>
                   
                    <a href="https://www.pdfdrive.com/advanced-modern-algebra-joseph-j-rotmanpdf-e15131457.html" target="_blank" className="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-10 mx-auto">
                <div className="card">
                  <img src="Capture1.jpg" className="card-img-top" alt="..."  height="350px" />
                  <div className="card-body text-center">
                    <h6 className="card-title">Algebra</h6>
                   
                    <a href="http://home.ustc.edu.cn/~liweiyu/documents/Algebra,%20Second%20Edition,%20Michael%20Artin.pdf" target="_blank" className="btn btn-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
           
            
              
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container get-2">
        <div className="row py-5 ">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4" style="width: 18rem;">
              <img src="Capture.PNG" className="card-img-top" alt="Image"   />

              <div className="card-body center">
                <h4 className="card-title ">Elementary Linear Algebra </h4>
               

                <button className="btn btn-primary " style={{alignSelf:"center"}} >Download</button>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture2.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Algebraic Theory of Number </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Algebraic Theory of Number </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture3.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Boundary Layer Theory </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Partial Differential Equations</h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture2.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Boundary Layer Theory </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture3.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Complex Variables </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture2.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Elementary Linear Algebra </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture3.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Complex Variables </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture2.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Dynamics in One Complex Variable </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture3.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Fractured Porous Media </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="Capture.PNG" className="card-img-top" alt="Image" width="400px" height="200px"  />

              <div className="card-body center">
                <h4 className="card-title ">Analysis of Structure </h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
         
        
        </div>

        { ############################# Second-row #################### 
         <div className="row py-5 ">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">F </h4>
               
                <button className="btn btn-primary  ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">Goat</h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">H</h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">B</h4>
                

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">I</h4>
                
                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="card mb-4">
              <img src="road2.jfif" className="card-img-top" alt="" />

              <div className="card-body center">
                <h4 className="card-title ">J</h4>
               

                <button className="btn btn-primary ">Download</button>
              </div>
            </div>
          </div>
        </div>  
      </div> */}
    </>
  );
};

export default Books;
