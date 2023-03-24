import * as React from "react";
import { useEffect } from 'react';
import "./JobApply.css";
import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Job from "./Job";
import API from "../api";
import { useState } from "react";

const App = () => {

    const selectJob = {
        id: "1",
        title: "Project Manager",
        description: "Education: Secondary \n      (high) school graduation certificate\nExperience: Will train or equivalent \n      experience",
        location: "Westerville, ON",
        salary: "32$ per hour",
        jobType: "OnSite",
        company: "Elmer's Products Inc",
        date_posted: "15 January 2023",
        url: "www.elmers.com"
    };


    return (
        <div className="job-apply">
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

            <div className="flex-container-3">
                <div className="flex-container-4">
                    <ApplicationForm/>
                </div>
            </div>

        </div>
    );
}
export default App;