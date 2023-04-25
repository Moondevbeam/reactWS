import React from "react";
import Navigation from "../components/navigation/Navigation";
import Resume from '../components/Images/RESUME.jpg'
import pdf from '../components/Images/RESUME.pdf'

const Stack = () => {
    return(
      <div className="phone">
        <Navigation></Navigation>
{/* //start card */}
<div className="dib br3 shadow-5 card out phone" style={{width:"18rem"}}>
  <img src={Resume} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Do you want to hire me? Check out my Resume</p>
    <div className="tc">
    <button type="button" class="btn btn-warning"><a className="qbz black" href={pdf} download={pdf}>Download</a></button>
    </div>
    </div>
      </div>
{/* // end card */}
{/* //start card */}
<div className=" dib br3 shadow-5 card out phone" style={{width:"18rem", marginTop:10}}>
  <img src={Resume} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Do you want to hire me? Check out my Resume</p>
    <div className="tc">
    <button type="button" class="btn btn-warning"><a className="qbz black" href={pdf} download={pdf}>Download</a></button>
    </div>
    </div>
      </div>
{/* // end card */}
      </div>
    )
}

export default Stack;