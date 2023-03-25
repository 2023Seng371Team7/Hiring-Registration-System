import * as React from "react";
import { useEffect } from 'react';
//import "./JobListings.css";
import ApplicantTable from "./ApplicantTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import API from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const App = () => {
    const { id } = useParams();
    const [ selectJob, setSelectJob] = useState({}); 
    const [ applicants, setApplicants] = useState([]);
    const [ filteredApplicants, setFilteredApplicants] = useState([]);
    const [ applicantSearchName, setApplicantSearchName] = useState('');
    const [ applicantSearchEmail, setApplicantSearchEmail] = useState('');

    const fetchData = () => {
        
        API.get(
            "api/applications?id=" + {id}
        ).then((appsListed) => {
            return Promise.resolve(appsListed.data.map( (applications) => JSON.parse(applications)))
        })
        .then((appsListed) => {
            setApplicants(appsListed)
            setFilteredApplicants(appsListed)
            //console.log(jobsListed);
        })        
        
    }

    /*useEffect(() => {
        fetchData();
      }, [id]);*/
    

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
                <TextField type="search" onChange={(e)=>setApplicantSearchName(e.target.value)} className="location" placeholder="Job Title or Company" sx={{
                    'width': '30%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <TextField type="search" onChange={(e)=>setApplicantSearchEmail(e.target.value)} className="location" placeholder="Location" sx={{
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
            <div className="flex-container">
                <div>
                    <ApplicantTable 
                        className="applicants-table"
                        {...filteredApplicants}
                    />
                </div>
            </div>
        </div >
    );
};
export default App;
