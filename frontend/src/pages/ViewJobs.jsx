import * as React from "react";
import { useEffect } from 'react';
//import "./JobListings.css";
import JobTable from "./JobTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import API from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const App = () => {
    const { id } = useParams();
    const [ filteredJobs, setFilteredJobs] = useState([]);
    const [ jobSearchName, setJobSearchName] = useState('');
    const [ jobSearchLocation, setJobSearchLocation] = useState('');

    const fetchData = () => {
            
        API.get(
          "api/joblisting"
      ).then((jobsListed) => {
          return Promise.resolve(jobsListed.data.map( (jobs) => JSON.parse(jobs)))
      })
      .then((jobsListed) => {
          setAllJobs(jobsListed)
          setFilteredJobs(jobsListed);
      }) 
        
    }

    /*useEffect(() => {
        fetchData();
      }, [id]);*/
    

    const propsData = {
        button: {
            disableElevation: false,
            variant: "contained",
            children: "Search",
        },
        button2: {
          disableElevation: false,
          variant: "contained",
          children: "Create Job",
      }
    };
    
    /*
    function selectJobListing(joblisting){
        setSelectJob(joblisting)
    };

    
    **
    const handleSearch = () => {
        let titleCompany = jobTitleCompany.toLowerCase()
        let location = jobLocation.toLowerCase()

        if(titleCompany === "" && location === ""){
            setFilteredApplicants(allJobs)
            console.log(filteredJobs)
        }
        else if(location === ""){
            setFilteredApplicants(allJobs.filter(jobItem => jobItem.title.toLowerCase().includes(titleCompany) || jobItem.company.toLowerCase().includes(titleCompany)))
        }
        else if(titleCompany === ""){
            setFilteredApplicants(allJobs.filter(jobItem => jobItem.location.toLowerCase().includes(location)))
        }
        else {
            setFilteredApplicants(allJobs.filter(jobItem => (jobItem.title.toLowerCase().includes(titleCompany) || jobItem.company.toLowerCase().includes(titleCompany)) && jobItem.location.toLowerCase().includes(location)))            
        }
      } 
      */
    

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
            <div className="flex-container-2">
                <TextField type="search" onChange={(e)=>setJobSearchName(e.target.value)} className="location" placeholder="Job Title" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <TextField type="search" onChange={(e)=>setJobSearchLocation(e.target.value)} className="location" placeholder="Location" sx={{
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
                <Button className="button-instance" size="medium" {...propsData.button2} sx={{
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
            <div className="flex-container">
                <div>
                    <JobTable 
                        className="applicants-table"
                        {...filteredJobs}
                    />
                </div>
            </div>
        </div >
    );
};
export default App;
