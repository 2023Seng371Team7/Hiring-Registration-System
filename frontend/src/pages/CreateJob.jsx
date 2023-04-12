import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./JobListings.css";
import API from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const App = () => {
    const { id } = useParams();

    const propsData = {
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Create Job",
        },

    };

    return (
        <div className="job-postings">
            <div className="menu-background">
                <a href="/applicants/1">
                    <div className="flex-container-6">
                        <div className="rectangle-6">
                            <span className="job-postings-1">Applicants | Job ID {id}</span>
                        </div>
                    </div>
                </a>
                <a href="/jobs">
                    <span className="my-applications">Jobs</span>
                </a>
                <div className="flex-container-1">
                    <div className="cat-absolute-container">
                        <span className="lgxwbhjlzydji">L</span>
                    </div>
                </div>
            </div>

            <div className="createJob">
                <label style={{ marginLeft: '17px' }}>Create Job Posting</label>
                <div className="post-body">

                    <div className="left-col">
                        <label>Job ID</label>


                        <TextField placeholder="Required" onChange={(e) => setFirstName(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '100%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px",
                            }
                        }} />
                        <label>Title</label>


                        <TextField placeholder="Required" onChange={(e) => setFirstName(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '100%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px",
                            }
                        }} />
                        <label>Company</label>
                        <TextField placeholder="Required" onChange={(e) => setLastName(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '100%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />
                        <label>Job Type</label>

                        <TextField placeholder="Required" onChange={(e) => setEmailAddress(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '30%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />
                    </div>
                    <div className="right-col">
                        <label>Location</label>
                        <TextField placeholder="Required" onChange={(e) => setPhoneNumber(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '30%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />
                        <label>Salary</label>

                        <TextField placeholder="Required" onChange={(e) => setWorkExperience(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '30%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />

                        <label>Job Description</label>
                        <TextField placeholder="Required" onChange={(e) => setWorkExperience(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '30%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />

                        <label>Job Start Date</label>
                        <TextField placeholder="Required" onChange={(e) => setWorkExperience(e.target.value)} sx={{
                            'width': '100%',
                            'flexBasis': '30%',
                            'marginTop': '5px',
                            "& .MuiInputBase-root": {
                                "borderRadius": "50px"
                            }
                        }} />
                    </div>
                </div>
                <Button size="medium" {...propsData.button} sx={{
                    'borderRadius': '50px',
                    'backgroundColor': '#397598',
                    'color': '#d7ecf5',
                    'borderColor': '#397598',
                    'marginTop': '0.5rem',
                    'marginLeft': '17px',
                    'alignSelf': 'start',
                    ":hover": {
                        bgcolor: "#578DAD",
                        color: "#d7ecf5"
                    }
                }} />
            </div>



        </div>
    );
};
export default App;
