import * as React from "react";
import "./JobListings.css";
import JobDescription from "./JobDescription";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Job from "./Job";
const App = () => {
    const propsData = {
        group6: {
            id: "outlined-size-normal",
            label: "Job Title, Company",
        },
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Find Jobs",
        },
        post1: {
            amazon: "Amazon",
            vancouverBc: "Vancouver, BC",
            softwareTestingEng: "Software Testing Engineer",
            num35AnHour: "$35 an hour",
        },
        jobDetails: {
            jobDescription: "Job Description",
            button: {
                disableElevation: false,
                variant: "contained",
                children: "Apply",
            },
            num35AnHour: "$35 an hour",
            educationSecondary:
                "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            partTimeRemote: "Part-Time\nRemote",
            jobType: "Job Type",
            amazon: "Amazon",
            softwareTestingEng: "Software Testing Engineer",
            vancouverBc: "Vancouver, BC",
            salary: "Salary",
        },
    };
    return (
        <div className="job-postings">
            <div className="menu-background">
                <a href="/jobsListed">
                    <div className="flex-container-6">
                        <div className="rectangle-6">
                            <span className="job-postings-1">Job Postings</span>
                        </div>
                    </div>
                </a>
                <a href="/myApplications">
                    <span className="my-applications">My Applications</span>
                </a>
                <div className="flex-container-1">
                    <div className="cat-absolute-container">
                        <span className="lgxwbhjlzydji">L</span>
                    </div>
                </div>
            </div>
            <div className="flex-container-2">
                <TextField className="location" placeholder="Job Title, Company" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <TextField className="location" placeholder="Location" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                <Button className="button-instance" size="medium" {...propsData.button} sx={{
                   'borderRadius': '50px',
                    'backgroundColor': '#397598',
                    'color': '#d7ecf5',
                    'borderColor': '#397598',
                    'marginTop': '0.5rem',
                    'alignSelf':'start',
                    ":hover": {
                        bgcolor: "#578DAD",
                        color: "#d7ecf5"
                      }
                }} />
            </div>
            <div className="flex-container-3">
                <div className="flex-container-5">
                    <Job className="post-1-instance-1" {...propsData.post1} />
                    <Job className="post-1-instance-1" {...propsData.post1} />
                    <Job className="post-1-instance-1" {...propsData.post1} />
                </div>
                <div className="flex-container-4">
                    <JobDescription
                        className="job-details-instance-1"
                        {...propsData.jobDetails}
                    />
                </div>
            </div>
        </div >
    );
};
export default App;
