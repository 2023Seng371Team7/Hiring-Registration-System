import * as React from "react";
import "./JobDescription.css";
import Button from "@mui/material/Button";
const App = (props) => {

    return (
        <div className="job-details">
            <div className="rectangle-5">
                    <span className="title">
                       {props.title}
                    </span>
                    <Button size="medium" disableElevation="false" variant= "contained" children= "Apply" sx={{
                        'borderRadius': '50px',
                        'alignSelf' : 'flex-start',
                        'backgroundColor': '#397598',
                        'color': '#d7ecf5',
                        'borderColor': '#397598',
                        'marginTop': '0.5rem',
                        ":hover": {
                            bgcolor: "#578DAD",
                            color: "#d7ecf5"
                          }
                    }} />
                <span className="location">{props.location}</span>
                <span className="company">{props.company}</span>
                <span className="date-posted">{props.date_posted}</span>
                <span className="salary-heading">Salary</span>
                <span className="salary">{props.salary}</span>
                <span className="job-type-heading">Job Type</span>
                <span className="job-type">{props.jobType}</span>
                <span className="job-description-heading">Job Description</span>
                <span className="job-description">
                    {props.description}
                </span>
                <span className="url">{props.url}</span>
            </div>
        </div>
    );
};
export default App;
