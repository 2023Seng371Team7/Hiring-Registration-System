import * as React from "react";
import { useEffect } from 'react';
import "./JobListings.css";
import JobDescription from "./JobDescription";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Job from "./Job";
import API from "../api";
import { useState } from "react";

const App = () => {
    const [ selectJob, setSelectJob] = useState({}); 
    const [ allJobs, setAllJobs] = useState([]);
    const [ filteredJobs, setFilteredJobs] = useState([]);
    const [ jobTitleCompany, setTitleCompany] = useState('');
    const [ jobLocation, setJobLocation] = useState('');


    /*
    ** api/jobListing is not ready yet. To uncomment the
    ** block code when the endpoint is ready and fixed.
    const jobsData = () => {

        const allJobs = API.get(
            "api/joblisting"
        );
        
        setAllJobs(allJobs);
        setSelectJob(allJobs);

        return allJobs;
    }
    */

    // Mock jobsData.
    // Remove it after api/jobslisting api is fixed.

    const jobsData = [
        {
            id: "1",
            title: "Project Manager",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Westerville, ON",
            salary: "32$ per hour",
            jobType: "OnSite",
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
            jobType: "OnSite",
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
            jobType: "Remote",
            company: "Amazon",
            date_posted: "17 March 2023",
            url: "www.amazon.ca"
        },
        {
            id: "4",
            title: "Software Testing Engineer",
            description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
            location: "Vancouver",
            salary: "36$ per hour",
            jobType: "Remote",
            company: "Amazon",
            date_posted: "18 March 2023",
            url: "www.amazon.ca"
        }
    ];

    const fetchData = () => {

        setFilteredJobs(jobsData);
        setAllJobs(jobsData);
    }

    useEffect(() => {
        fetchData();
      }, []);
    

    const propsData = {
        group6: {
            id: "outlined-size-normal",
            label: "Job Title or Company",
        },
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Find Jobs",
        }
    };

    function selectJobListing(joblisting){
        setSelectJob(joblisting)
    };

    const handleSearch = () => {
        let titleCompany = jobTitleCompany.toLowerCase()
        let location = jobLocation.toLowerCase()

        if(titleCompany === "" && location === ""){
          setFilteredJobs(allJobs)
        }
        else if(location === ""){
        setFilteredJobs(allJobs.filter(jobItem => jobItem.title.toLowerCase().includes(titleCompany) || jobItem.company.toLowerCase().includes(titleCompany)))
        }
        else if(titleCompany === ""){
        setFilteredJobs(allJobs.filter(jobItem => jobItem.location.toLowerCase().includes(location)))
        }
        else {
        setFilteredJobs(allJobs.filter(jobItem => (jobItem.title.toLowerCase().includes(titleCompany) || jobItem.company.toLowerCase().includes(titleCompany)) && jobItem.location.toLowerCase().includes(location)))            
        }
      } 
    

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
                <TextField type="search" onChange={(e)=>setTitleCompany(e.target.value)} className="location" placeholder="Job Title or Company" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <TextField type="search" onChange={(e)=>setJobLocation(e.target.value)} className="location" placeholder="Location" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                <Button onClick={handleSearch} className="button-instance" size="medium" {...propsData.button} sx={{
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
                    {filteredJobs.map( joblisting => (
                        <Button variant="text" onClick={() => selectJobListing(joblisting)}>
                            <Job className="post-1-instance-1" {...joblisting} />
                        </Button>
                    ))}
                </div>
                <div className="flex-container-4">
                    <JobDescription
                        className="job-details-instance-1"
                        {...selectJob}
                    />
                </div>
            </div>
        </div >
    );
};
export default App;
