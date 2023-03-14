import * as React from "react";
import "./JobListings.css";
import JobDescription from "./JobDescription";
import Button from "@mui/material/Button";
import Job from "./Job";
import API from "../api"; // import the API object

const MyApplication = () => {
    const [applications, setApplications] = React.useState([]);
    const [selected, setSelected] = React.useState(-1);
    const [relevantJobPostings, setRelevantJobPostings] = React.useState([]);
  
    React.useEffect(() => {
      API.get(`/api/applications?username="${localStorage.getItem('username')}"`).then((response) => {
        setApplications(response.data.data ?? []);
      }).catch((error) => {
        console.log(error);
      });
    }, []);
  
    const handleShowRelevantPostings = () => {
      if (applications.length > 0) {
        API.get(`/api/relevantpostings?username="${localStorage.getItem('username')}"`).then((response) => {
          setRelevantJobPostings(response.data.data ?? []);
        }).catch((error) => {
          console.log(error);
        });
      }
    };

  return (
    <div className="job-postings">
      <div className="menu-background">
        <a href="/jobsListed">
          <span className="job-postings-1">Job Postings</span>
        </a>
        <a href="/myApplications">
          <div className="flex-container-6">
            <div className="rectangle-6">
              <span className="my-applications">My Applications</span>
            </div>
          </div>
        </a>
        <div className="flex-container-1">
          <div className="cat-absolute-container">
            <span className="lgxwbhjlzydji">L</span>
          </div>
        </div>
      </div>
      <div className="vertical-padding" style={{
        padding: "1rem 0"
      }}>
        <div className="flex-container-2">
          <Button
            className="button-instance"
            size="medium"
            onClick={handleShowRelevantPostings}
            disable={applications.length === 0}
            sx={{
              borderRadius: "50px",
              backgroundColor: "#397598",
              color: "#d7ecf5",
              borderColor: "#397598",
              marginTop: "0.5rem",
              alignSelf: "start",
              ":hover": {
                bgcolor: "#578DAD",
                color: "#d7ecf5",
              },
            }}
          >
            Show me relevant postings
          </Button>
        </div>
      </div>
      <div className="flex-container-3">
        <div className="flex-container-5">
            {applications.map((app, key) => <div onClick={() => setSelected(key)}><Job {...app} /></div>)}
            {relevantJobPostings.map((app, key) => <div onClick={() => setSelected(key + applications.length)}><Job {...app} /></div>)}
            <div className="flex-container-4">
                <JobDescription className="job-details-instance-1" {...([...applications, ...relevantJobPostings][selected])} />
            </div>
        </div>
      </div>
    </div>)
};
    

export default MyApplication;
