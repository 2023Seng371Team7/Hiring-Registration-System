import * as React from "react";
import "./JobListings.css";
import JobDescription from "./JobDescription";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Job from "./Job";
import API from "../api";

const App = () => {
    /*
    ** api/jobListing is not ready yet. To uncomment the
    ** block code when the endpoint is ready and fixed.
    const jobsData = () => {

        const allJobs = API.get(
            "api/joblisting"
        );

        return allJobs;
    }
    */

    // Mockdata
    // Remove it after api/jobslisting api is fixed.

    const jobsData = [
        {
            id: "1",
            title: "Project Manager",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Westerville, ON",
            salary: "32$ per hour",
            company: "Elmer's Products Inc",
            date_posted: "15 January 2023",
            url: "www.elmers.com"
        },
        {
            id: "2",
            title: "Art Director",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Stuttgart",
            salary: "30$ per hour",
            company: "FlintGroup",
            date_posted: "17 March 2023",
            url: "www.google.com"

        },
        {
            id: "3",
            title: "Software Testing Engineer",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Toronto",
            salary: "36$ per hour",
            company: "Amazon",
            date_posted: "17 March 2023",
            url: "www.amazon.ca"
        },
        {
            id: "4",
            title: "Software Testing Engineer",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Toronto",
            salary: "36$ per hour",
            company: "Amazon",
            date_posted: "18 March 2023",
            url: "www.amazon.ca"
        }
    ];

    const propsData = {
        group6: {
            id: "outlined-size-normal",
            label: "Job Title, Company",
        },
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Find Jobs",
        }
        /*
        post1: {
            company: "Amazon",
            location: "Vancouver, BC",
            title: "Software Testing Engineer",
            salary: "$35 an hour",
        },
        jobDetails1: {
            ...jobsData,
            jobDescriptionHeading: "Job Description",
            button: {
                disableElevation: false,
                variant: "contained",
                children: "Apply",
            },
            jobType: "Part-Time\nRemote",
            jobTypeHeading: "Job Type",
            salaryHeading: "Salary",
        },

        jobDetails: {
            jobDescriptionHeading: "Job Description",
            button: {
                disableElevation: false,
                variant: "contained",
                children: "Apply",
            },
            salary: "$35 an hour",
            jobDescription:
                "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            jobType: "Part-Time\nRemote",
            jobTypeHeading: "Job Type",
            company: "Amazon",
            title: "Software Testing Engineer",
            location: "Vancouver, BC",
            salaryHeading: "Salary",
        },*/
    };

    return (
        <div className="job-postings">
            <div className="menu-background">
                <div className="flex-container-6">
                    <div className="rectangle-6">
                        <span className="job-postings-1">Job Postings</span>
                    </div>
                </div>
                
                <span className="my-applications">My Applications</span>
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
                    {jobsData.map( joblisting => (
                        <Job className="post-1-instance-1" {...joblisting} />
                    ))}
                </div>
                <div className="flex-container-4">
                    <JobDescription
                        className="job-details-instance-1"
                        {...jobsData[0]}
                    />
                </div>
            </div>
        </div >
    );
};
export default App;
