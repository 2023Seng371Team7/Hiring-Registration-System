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

function createData(date, name, email, education) {
  return { date, name, email, education};
}

const rows = [
  createData('12-Jan-2023', 'Nicholas C', 'nic@email.com', 'Bachelor'),
  createData('13-Jan-2023', 'Sam K', 'sam@email.com', 'Bachelor'),
  createData('11-Feb-2023', 'Peter L', 'pete@email.com', 'Masters'),
  createData('12-Feb-2023', 'Bruce Doe', 'doe@email.com', 'Bachelor'),
  createData('01-Mar-2023', 'Sam L', 'l.sam@email.com', 'Bachelor'),
];

export default function BasicTable(props) {
  const [menuOpen, setMenuOpen] = useState(rows.map(row => 0));


  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 690 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date Applied</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.date}</TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Select
                  value = {menuOpen[i] ?? 0}
                  onChange={(event) => {
                    const newMenuOpen = [...menuOpen];
                    newMenuOpen[i] = event.target.value;
                    setMenuOpen(newMenuOpen);
                  }}
                >
                    <MenuItem value={0}>Pending</MenuItem>
                    <MenuItem value={1}>Hire </MenuItem>
                    <MenuItem value={2}>Reject </MenuItem>
                </Select>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => {
        setMenuOpen(menuOpen.map(val => val == 0 ? 2 : val))
      }} >Reject All Remaining</Button>
    </div>
  </>);
}