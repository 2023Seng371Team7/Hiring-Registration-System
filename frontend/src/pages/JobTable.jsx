import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import {useState} from 'react';
import { MenuItem } from '@mui/material';

function createData(date, title, location, applicants) {
  return { date, title, location, applicants};
}

const rows = [
  createData('12-Jan-2023', 'Software Engineer', 'Vancouver, BC', '3'),
  createData('13-Jan-2023', 'Software Tester', 'Vancouver, BC', '2'),
  createData('11-Feb-2023', 'Software Engineer', 'Toronto, ON', '1'),
  createData('12-Feb-2023', 'Software Engineer', 'Toronto, ON', '0'),
  createData('01-Mar-2023', 'Software Tester', 'Toronto, ON', '2'),
];

export default function BasicTable(props) {
  const [menuOpen, setMenuOpen] = useState(rows.map(row => 0));


  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 690 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date Posted</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="center">Applicants</TableCell>
            <TableCell align="center">Job Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.date}</TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="center">{row.applicants}</TableCell>
              <TableCell align="right">
                <Select
                  value = {menuOpen[i] ?? 0}
                  onChange={(event) => {
                    const newMenuOpen = [...menuOpen];
                    newMenuOpen[i] = event.target.value;
                    setMenuOpen(newMenuOpen);
                  }}
                >
                    <MenuItem value={0}>Open</MenuItem>
                    <MenuItem value={1}>Pause</MenuItem>
                    <MenuItem value={2}>Close</MenuItem>
                </Select>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}