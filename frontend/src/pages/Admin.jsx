import * as React from "react";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
//import "./JobListings.css";
import AdminTable from "./AdminTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import API from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";


const App = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [applicantSearchName, setApplicantSearchName] = useState('');


    const fetchData = () => {

        API.get(
            "api/hradmin"
        ).then((appsListed) => {
            return Promise.resolve(appsListed.data.map((applications) => JSON.parse(applications)))
        })
            .then((usersListed) => {
                setUsers(usersListed)
                setFilteredUsers(usersListed)
                //console.log(jobsListed);
            })

    }

    useEffect(() => {
        fetchData();
    }, []);


    const propsData = {
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Search",
        }
    };

    /*
    function selectJobListing(joblisting){
        setSelectJob(joblisting)
    };
*/


    const handleSearch = () => {
        let userName = applicantSearchName.toLowerCase()

        if (userName === "") {
            setFilteredUsers(users)
        }
        else {
            setFilteredUsers(users.filter(user => (user.username.toLowerCase().includes(userName))))
        }
    }



    return (
        <div className="job-postings">
            <div className="menu-background">
                <span className="job-postings-1">Managers </span>
            </div>
            <div className="flex-container-2">
                <TextField type="search" onChange={(e) => setApplicantSearchName(e.target.value)} className="location" placeholder="Username" sx={{
                    'width': '30%',
                    'flexBasis': '20%',
                    'marginTop': '5px',
                    'marginBottom': '10px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <Button onClick={handleSearch} className="button-instance" size="medium" {...propsData.button} sx={{
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
                }} />
            </div>
            <div className="flex-container">
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 690 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="center">Role</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredUsers.map((user) => (
                                    <AdminTable key={user.username}
                                        className="applicants-table"
                                        {...user}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div >
    );
};
export default App;
