import * as React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


const App = () => {
    const propsData = {
        group15: {
            fullWidth: true,
            label: "Username",
        },
        rectangle10: {
            fullWidth: true,
            label: "Password",
        },
    };
    return (
        <div className="sign-in">
            <div className="rectangle-3">
                <span className="sign-in-1">Sign up</span>
                <TextField
                    className="group-15-instance"
                    {...propsData.group15}
                    placeholder="Username"
                    type="text"
                    sx={{
                        "width": "55%",
                        'justify-content':'center',
                        "margin": "7px 0px 1.1rem",
                        "& .MuiInputBase-root": {
                            "borderRadius": "50px",
                            "height": "90%"
                        }
                    }}
                />
                <TextField
                    className="group-15-instance"
                    {...propsData.rectangle10}
                    type="text"
                    placeholder="Password"
                    sx={{
                        'width': '55%',
                        'margin': '0px 0px 0.7rem',
                        'justify-content':'center',
                        "& .MuiInputBase-root": {
                            "borderRadius": "50px",
                            "height": "90%"
                        }
                    }}
                />
                <span className="forgot-password">Forgot Password?</span>
                <Button variant="contained" className="button" id="sigin-button" size="medium" sx={{
                    'borderRadius': '50px',
                    'backgroundColor': '#397598',
                    'color': '#d7ecf5',
                    'borderColor': '#397598',
                    ":hover": {
                        bgcolor: "#578DAD",
                        color: "#d7ecf5"
                      }
                }}>Create</Button>
            </div>
            <span className="dont-have-an-account">
                Already have an account? <Link to="/" style={{ 'color': '#FE9F70', 'textDecoration': 'None'}}>Sign in</Link>
            </span>
        </div >
    );
};
export default App;
