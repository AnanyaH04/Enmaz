import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ScheduleList.css";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 700,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

function createData(
  customerName,
  location,
  area,
  subArea,
  machine,
  assigned_to
) {
  return {
    customerName,
    location,
    area,
    subArea,
    machine,
    assigned_to,
  };
}

//To change the row data change the below values as needed based on the response received from the backend
const rows = [
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
  createData(
    "Customer 1",
    "Location 1",
    "Sub area 1",
    "Sub area 1",
    "Machine 12",
    " "
  ),
];

export default function CustomizedTables() {
  return (
    <>
      <div className="scheduleList">
        <h4 className="schedule-text">Schedule List</h4>
        <div className="scheduleListContainer">
          <div className="tablehead">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#E8F1FF" }}>
                  <TableRow>
                    <StyledTableCell sx={{ fontWeight: "600" }}>
                      Customer
                    </StyledTableCell>
                    <StyledTableCell align="right">Location</StyledTableCell>
                    <StyledTableCell align="right">Area</StyledTableCell>
                    <StyledTableCell align="right">Sub Area</StyledTableCell>
                    <StyledTableCell align="right">Machines</StyledTableCell>
                    <StyledTableCell align="right">Assigned To</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.customerName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.location}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.area}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.subArea}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.machine}
                      </StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>

                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          className="schedule-list-button"
                        >
                          Edit
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}
