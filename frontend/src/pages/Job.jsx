import * as React from "react";
import "./Job.css";
const App = (props) => {
    return (
        <div className="post-3">
            <div className="rectangle-9">
                <span className="software-testing-eng">{props.title}</span>
                <span className="amazon">{props.company}</span>
                <span className="vancouver-bc">{props.location}</span>
                <span className="num-35-an-hour">{props.salary}</span>
            </div>
        </div>
    );
};
export default App;