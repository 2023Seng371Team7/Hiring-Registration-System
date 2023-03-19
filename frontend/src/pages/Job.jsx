import * as React from "react";
import "./Job.css";
const App = (props) => {
    return (
        <div className="post-3">
            <div className="rectangle-9">
                <span className="title">{props.title}</span>
                <span className="company">{props.company}</span>
                <span className="location">{props.location}</span>
                <span className="salary">{props.salary}</span>
            </div>
        </div>
    );
};
export default App;