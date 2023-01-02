import React, { Fragment } from "react";

import NavItem from "./NavItem";
import heartmonitor from "../../Images/HeartMonitor.png";
import reports from "../../Images/AddGraphReport.png";
import engine from "../../Images/Engine.png";
import schedule from "../../Images/Schedule.png";
import settings from "../../Images/settings.png";
import vector from "../../Images/Vector.png";
const Drawer = (props) => {
  return (
    <Fragment>
      <div id="drawer-container">
        <div className="drawer-top-section"> </div>
        <div className="drawer-main-section">
          <ul>
            <li>
              <NavItem
                className="vector"
                img={vector}
                title="Dashboard"
                link="/Dashboard"
              />
            </li>
            <li>
              <NavItem
                id="heartmonitor"
                img={heartmonitor}
                title="System Health"
                link="/SystemHealth"
              />
            </li>
            <li>
              <NavItem
                id="reports"
                img={reports}
                title="Reports"
                link="/Reports"
              />
            </li>
            <li>
              <NavItem
                id="engine"
                img={engine}
                title="Machines"
                link="/Machines"
              />
            </li>
            <li>
              <NavItem
                id="schedule"
                img={schedule}
                title="Schedules"
                link="/Schedule"
              />
            </li>
            <li>
              <NavItem
                id="settings"
                img={settings}
                title="Settings"
                link="/Settings"
              />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Drawer;
