import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mode, setMode] = useState('light');
  const toggleSwitchButton = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      props.showAlert('Light mode enable', 'success');
      document.title = "TextUtils - Light Mode";
      setInterval(() => {
        document.title = "TextUtils - is amaizing";
      }, 2000)
      setInterval(() => {
        document.title = "download TextUtils - its amaizing";
      }, 1500)
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      props.showAlert('Dark mode enable', 'success');
      document.title = "TextUtils - Dark Mode";
    }
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'} mx-3`}>
      <input className="form-check-input" type="checkbox" role="switch" onClick={toggleSwitchButton} id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode === 'light' ? 'Dark' : 'Light'} Mode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultParameters = {
    title: 'this is my app'
}
