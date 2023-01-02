import { Fragment } from "react";
import "./App.css";
import Drawer from "./Components/Drawer/Drawer";
import Filters from "./Components/Filters/Filters.jsx";
import ScheduleList from "./Components/ScheduleList/ScheduleList.jsx";
function App() {
  return (
    <Fragment>
      <Drawer />
      <section id="schedule-global">
        <div className="schedule-global-header">
          <h1>Schedule</h1>
          <h3 className="global">Global</h3>
        </div>
        <Filters />
        <ScheduleList />
      </section>
    </Fragment>
  );
}

export default App;
