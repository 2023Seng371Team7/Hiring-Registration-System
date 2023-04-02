import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import API from "../api";
import { useState } from "react";
import { MenuItem } from '@mui/material';

const items = ['Admin', 'Manager', 'User']

export default function BasicTable(props) {
    const [menuDisplay, setMenuDisplay] = useState('');

    const handleSave = () => {
        console.log(menuDisplay + " value " + props.username)
        API.put(
            "api/hradmin",
            {
                username: props.username,
                role: menuDisplay
            }
        ).then((response) => {
            console.log(response);
        })
    }

    return (
        <TableRow
            key={props.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" align="left">
                {props.username}
            </TableCell>
            <TableCell align="center">
                <Select
                    defaultValue={menuDisplay ? menuDisplay : props.role}
                    onChange={(e) => setMenuDisplay(e.target.value)}
                >
                    {items.map((item) =>
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    )}
                </Select>
            </TableCell>
            <TableCell align="right">
                <Button onClick={handleSave} className="button-instance" size="medium" sx={{
                    'borderRadius': '50px',
                    'backgroundColor': '#397598',
                    'color': '#d7ecf5',
                    'borderColor': '#397598',
                    'marginTop': '0.5rem',
                    'alignSelf': 'start',
                    ":hover": {
                        bgcolor: "#578DAD",
                        color: "#d7ecf5"
                    }
                }}>Save</Button>
            </TableCell>
        </TableRow>
    );
}