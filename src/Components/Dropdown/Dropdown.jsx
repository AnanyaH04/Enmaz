import React, { Fragment } from "react";
import './Dropdown.css'
function Dropdown({ options, onChange,label,value,icon }) {
    return (
      <Fragment>
        <div className="inputWithIcon">
            {label}
          <div>{icon}</div> 
         
          <select className="selectElement" value={value} onChange={onChange}>
           {options.map((option) => (

      <option value={option.value}>{option.label}</option>

    ))}
  </select>  
        </div>
      </Fragment>
    );
  }
  export default Dropdown;
  
