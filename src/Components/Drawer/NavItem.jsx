import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Drawer.css";
const NavItem = (props) => {
  return (
    <Fragment>
      <div className="nav-item">
        <div className="dashboard-icons">
          <img src={props.img} alt="Vector" />
        </div>
        <div className="nav-link">
          <Link to={props.link}>{props.title}</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NavItem;
