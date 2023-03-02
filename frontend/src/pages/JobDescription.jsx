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
                <div className="flex-container">
                    <span className="software-testing-eng">
                        Software Testing Engineer
                    </span>
                    <Button className="button-instance" {...propsData.button} sx={{
                        'flexBasis': '10%',

                        'borderRadius': '50px',
                        'backgroundColor': '#397598',
                        'color': '#d7ecf5',
                    }} />
                </div>
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
