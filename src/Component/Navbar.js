import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'



function Navbar() {
  let location = useLocation();
  useEffect(()=>{
 setTimeout(()=>{
  const element = document.getElementById("navbarSupportedContent");
  if(element.classList.contains('show')){
    element.classList.remove('show');
  }
 },700)
  },[location])
 
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand " to="/"><strong style={{marginRight:"15px"}}>Dev
      <i className="fa-regular fa-newspaper fa-sm"></i>
      News</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Business"?"active":""}`} to="/Business">Business</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Entertainment"?"active":""}`} to="/Entertainment">Entertainment</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Health"?"active":""}`} to="/Health">Health</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Science"?"active":""}`}to="/Science">Science</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Sports"?"active":""}`} to="/Sports">Sports</Link>
    </li>
    <li className="nav-item">
      <Link className={`nav-link ${location.pathname==="/Technology"?"active":""}`} to="/Technology">Technology</Link>
    </li>
    </ul>
   
</div>
</div>
</nav>

  </div>
  )
}

export default Navbar