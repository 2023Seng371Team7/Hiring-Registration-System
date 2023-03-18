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
                    <Button size="medium" {...props.button} sx={{
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
                <span className="salary-heading">{props.salaryHeading}</span>
                <span className="salary">{props.salary}</span>
                <span className="job-type-heading">{props.jobTypeHeading}</span>
                <span className="job-type">{props.jobType}</span>
                <span className="job-description-heading">{props.jobDescriptionHeading}</span>
                <span className="education-experience">
                    {props.educationExperience}
                </span>
            </div>
        </div>
    );
};
export default App;
