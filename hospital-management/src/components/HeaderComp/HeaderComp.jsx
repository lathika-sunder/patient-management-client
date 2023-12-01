import React from "react";
import "./HeaderComp.css";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="heading">Hospital Management System</div>
        <div className="navbar">
          <Link to='/'><div className="nav-content"> Home</div></Link>
          <Link to='/add'><div className="nav-content">Add Patient</div></Link>
          <Link to='/edit'><div className="nav-content">Update Patient</div></Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComp;
