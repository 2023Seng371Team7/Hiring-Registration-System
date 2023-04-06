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
    const [ firstName, setFirstName] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ emailAddress, setEmailAddress] = useState('');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ workExperience, setWorkExperience] = useState('');
    const [ state, setState] = useState('');

    const monthMap = ['January', 'Februaury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const fetchData = () => {
        
        API.get(
            "api/joblisting"
        ).then((jobsListed) => {
            return Promise.resolve(jobsListed.data.map( (jobs) => JSON.parse(jobs)))
        })
        .then((jobsListed) => {
            setAllJobs(jobsListed)
            setFilteredJobs(jobsListed);
            setState("Jobs");
            //console.log(jobsListed);
        })        
        
    }

    const sendApplication = () => {

        const date = new Date()
        var body = {
            "applicant_name": firstName + " " + lastName,
            "applicant_email": emailAddress,
            "applicant_experience": workExperience,
            "applicant_phone": phoneNumber,
            "job_id": selectJob.id,
            "applicant_id": "1",
            "applicant_status": "Pending",
            "date_applied": `${date.getDate()} ${monthMap[date.getMonth()]} ${date.getFullYear()}`
        }

        API.post(
            "api/jobApplications",
            body
        ).then(() => {
            // print success message notification
            console.log("Successfully sent body: " + JSON.stringify(body))
            // set state back to "Jobs"
            setState("Jobs")
        })

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

    function setApplyState(){

        if( state==="Jobs"){
            setState("Apply")
        }
        else{
            //Call the API to post the applicant details. 
            sendApplication()
        }
        
    };
    const handleSearch = () => {
        let titleCompany = jobTitleCompany.toLowerCase()
        let location = jobLocation.toLowerCase()

        if(titleCompany === "" && location === ""){
          setFilteredJobs(allJobs)
          console.log(filteredJobs)
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
                <Button size="medium" onClick={setApplyState} variant= "contained"  children= "Apply" sx={{
                        'borderRadius': '50px',
                        'alignSelf' : 'flex-start',
                        'backgroundColor': '#397598',
                        'color': '#d7ecf5',
                        'borderColor': '#397598',
                        'marginTop': '0.5rem',
                        ":hover": {
                            bgcolor: "#578DAD",
                            color: "#d7ecf5",
                          }
                    }} />
            </div>
            <div className="flex-container-3">
                <div className="flex-container-5">
                    {state ==="Jobs" && filteredJobs.map( joblisting => (
                        <Button variant="text" onClick={() => selectJobListing(joblisting)}>
                            <Job className="post-1-instance-1" {...joblisting} />
                        </Button>
                    ))}
                    {state ==="Apply" && 
                    <div className="apply">
                                         
                    <label>First Name</label>

                    <TextField placeholder="Required" onChange={(e)=>setFirstName(e.target.value)} sx={{
                    'width': '100%',
                    'flexBasis': '100%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px",
                    }
                }} />
                <label>Last Name</label>
                <TextField placeholder="Required" onChange={(e)=>setLastName(e.target.value)} sx={{
                    'width': '100%',
                    'flexBasis': '100%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                <label>Email Address</label>                
                <TextField placeholder="Required" onChange={(e)=>setEmailAddress(e.target.value)} sx={{
                    'width': '100%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                <label>Phone</label>      
                <TextField placeholder="Required" onChange={(e)=>setPhoneNumber(e.target.value)} sx={{
                    'width': '100%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                <label>Previous Work Experience</label>      
                <TextField placeholder="Required" onChange={(e)=>setWorkExperience(e.target.value)} sx={{
                    'width': '100%',
                    'flexBasis': '30%',
                    'marginTop': '5px',
                    "& .MuiInputBase-root": {
                        "borderRadius": "50px"
                    }
                }} />
                    </div>

                    }
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
