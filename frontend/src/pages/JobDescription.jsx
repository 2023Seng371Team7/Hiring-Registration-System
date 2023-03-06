import * as React from "react";
import "./JobDescription.css";
import Button from "@mui/material/Button";
const App = () => {
    const propsData = {
        button: {
            disableElevation: true,
            variant: "contained",
            children: "Apply",
        }
    }
    return (
        <div className="job-details">
            <div className="rectangle-5">
                    <span className="software-testing-eng">
                        Software Testing Engineer
                    </span>
                    <Button size="medium" {...propsData.button} sx={{
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
                <span className="vancouver-bc">Vancouver, BC</span>
                <span className="amazon">Amazon</span>
                <span className="salary">Salary</span>
                <span className="num-35-an-hour">$35 an hour</span>
                <span className="job-type">Job Type</span>
                <span className="part-time-remote">Part-Time Remote</span>
                <span className="job-description">Job Description</span>
                <span className="education-secondary">
                    Education: Secondary (high) school graduation certificate Experience:
                    Will train or equivalent experience
                </span>
            </div>
        </div>
    );
};
export default App;
