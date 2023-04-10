import * as React from "react";
import { useEffect } from 'react';
import { redirect, useNavigate } from "react-router-dom";
import "./JobListings.css";
import JobDescription from "./JobDescription";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Menu, MenuItem, Dialog, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import Job from "./Job";
import API from "../api";
import { useState } from "react";
import myRoutes from "../routes";

const App = () => {
    const navigate = useNavigate();
    const [ selectJob, setSelectJob] = useState({}); 
    const [ allJobs, setAllJobs] = useState([]);
    const [ filteredJobs, setFilteredJobs] = useState([]);
    const [ jobTitleCompany, setTitleCompany] = useState('');
    const [ jobLocation, setJobLocation] = useState('');
    const [ deleteAccountDialogOpen, setDeleteAccountDialogOpen] = useState(false);
    const [ anchorEl, setAnchorEl] = useState(null);
    const [ state, setState] = useState('');
    const [ firstName, setFirstName] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ emailAddress, setEmailAddress] = useState('');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ workExperience, setWorkExperience] = useState('');
    
    const userMenuOpen = Boolean(anchorEl);
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
    };
    
    const handleUserMenuClose = () => {
        setAnchorEl(null);
      };

    const handleUserMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleUserMenuItemClick = () => {
        // Open Dialog with Confirmation Message "Do you want to delete your Profile?"
        setDeleteAccountDialogOpen(!deleteAccountDialogOpen);
    };

    const handleProfileDeletion = async () => {
        // Send API request to delete
        let result = await API.delete(
            "api/managerupdate?username=" + localStorage.getItem("username"));
        
        if(result.status === 200){
            // Then redirect to Login page.
            setDeleteAccountDialogOpen(false);
            navigate(myRoutes.LogIn);
        }
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
                        <span ><Button className="lgxwbhjlzydji" onClick={handleUserMenuClick}>L</Button></span>
                        <Menu
                        anchorEl={anchorEl}
                        id="user-menu"
                        open={userMenuOpen}
                        onClose={handleUserMenuClose}
                        onClick={handleUserMenuClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem
                            onClick={handleUserMenuItemClick}
                            sx={{
                                bgcolor: 'error.main'
                            }}>
                            Delete My Profile
                            </MenuItem>
                        </Menu>
                        <Dialog
                            open={deleteAccountDialogOpen}
                            onClose={handleUserMenuItemClick}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to permanently delete your account? 
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleProfileDeletion}>I Agree</Button>
                            <Button onClick={handleUserMenuItemClick} autoFocus>Cancel</Button>
                        </DialogActions>
                    </Dialog>
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
