import {
    Button,
    FormControl,
    Grid,
  } from "@mui/material";
  import React, { Fragment } from "react";
  
  import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import FactoryIcon from "@mui/icons-material/Factory";
  import Dropdown from "../Dropdown/Dropdown";
  import MemoryIcon from "@mui/icons-material/Memory";
  import datePicker from './DatePickers';
  import "./NewFilter.css";
  
  const Filters = (props) => {
    const [customer, setCustomer] = React.useState("Select Customer");
    const [subarea, setSubArea] = React.useState("Select Sub Area");
    const [location, setLocation] = React.useState("Select Location");
    const [machine, setMachine] = React.useState("Select Machine");
    const [area, setArea] = React.useState("Select Sub Area");
    const [engineer, setEngineer] = React.useState("Select Engineer");
    const [technology, setTechnology] = React.useState("Select Technology");
    const [Frequency, setFrequency] = React.useState("Select Frequency");
  
    const handleCustomerChange = (event) => {
      setCustomer(event.target.value);
    };
  
    const handleSubAreaChange = (event) => {
      setSubArea(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleMachineChange = (event) => {
      setMachine(event.target.value);
    };
    const handleAreaChange = (event) => {
      setArea(event.target.value);
    };
    const handleEngineerChange = (event) => {
      setEngineer(event.target.value);
    };
    const handleTechnologyChange = (event) => {
      setTechnology(event.target.value);
    };
    const handleFrequencyChange = (event) => {
      setFrequency(event.target.value);
    };
    return (
      <Fragment>
          {/* <datePicker name= "Select End Date" /> */}
        <div className="New-Schedule-popUp">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Customer", value: "" },
  
                    { label: "Customer1", value: "Customer 1" },
  
                    { label: "Customer2", value: "Customer 2" },
  
                    { label: "Customer3", value: "Customer 3" },
                  ]}
                  selectData={customer}
                  icon={<FactoryIcon className="iconInSelect" />}
                  onChange={handleCustomerChange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Area", value: "" },
  
                    { label: "Area 1", value: "Area 1" },
  
                    { label: "Area 2", value: "Area 2" },
  
                    { label: "Area 3", value: "Area 3" },
                  ]}
                  selectData={area}
                  icon={<AddLocationAltIcon className="iconInSelect" />}
                  onChange={handleAreaChange}
                />
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Location", value: "" },
  
                    { label: "Location 1", value: "Location 1" },
  
                    { label: "Location 2", value: "Location 2" },
  
                    { label: "Location 3", value: "Location 3" },
                  ]}
                  selectData={location}
                  icon={<LocationOnIcon className="iconInSelect" />}
                  onChange={handleLocationChange}
                />
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Sub Area", value: "" },
  
                    { label: "Sub Area 1", value: "Sub Area 1" },
  
                    { label: "Sub Area 2", value: "Sub Area 2" },
  
                    { label: "Sub Area 3", value: "Sub Area 3" },
                  ]}
                  selectData={subarea}
                  icon={<AddLocationAltIcon className="iconInSelect" />}
                  onChange={handleSubAreaChange}
                />
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Machine", value: "" },
  
                    { label: "Machine 1", value: "Machine 1" },
  
                    { label: "Machine 2", value: "Machine 2" },
  
                    { label: "Machine 3", value: "Machine 3" },
                  ]}
                  selectData={machine}
                  icon={<FactoryIcon className="iconInSelect" />}
                  onChange={handleMachineChange}
                />
              </FormControl>
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Technology", value: "" },
  
                    { label: "Technology 1", value: "Technology 1" },
  
                    { label: "Technology 2", value: "Technology 2" },
  
                    { label: "Technology 3", value: "Technology 3" },
                  ]}
                  selectData={technology}
                  icon={<MemoryIcon className="iconInSelect" />}
                  onChange={handleTechnologyChange}
                />
              </FormControl>
            </Grid>
  
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Engineer", value: "" },
  
                    { label: "Engineer 1", value: "Engineer 1" },
  
                    { label: "Engineer 2", value: "Engineer 2" },
  
                    { label: "Engineer 3", value: "Engineer 3" },
                  ]}
                  selectData={engineer}
                  icon={<FactoryIcon className="iconInSelect" />}
                  onChange={handleEngineerChange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                {/* <datePicker name ="Select Start Date"/> */}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                {/* <datePicker name= "Select End Date" /> */}
                
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <Dropdown
                  options={[
                    { label: "Select Frequency", value: "" },
  
                    { label: "Frequency 1", value: "Frequency 1" },
  
                    { label: "Frequency 2", value: "Frequency 2" },
  
                    { label: "Frequency 3", value: "Frequency 3" },
                  ]}
                  selectData={Frequency}
                  icon={<FactoryIcon className="iconInSelect" />}
                  onChange={handleFrequencyChange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item md={12} xs={12} sx={{paddingTop:'0'}}>
             <Button
              size="small"
              variant="contained"
              style={{
                background: "#004a77",
                fontSize: "14px",
                padding: "10px 24px 10px 24px",
                borderRadius: "100px",
                float:"right"
              }}
            >
              Create
            </Button>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  };
  
  export default Filters;
  