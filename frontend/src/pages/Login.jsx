import * as React from "react";
import { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import API from "../api";
import myRoutes from "../routes";


const App = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = async (e) => {
        //console.log(email + " " + password)
        let result = await logIn(email, password)
    }
    const logIn = async (email, password) => {
        try {
            let result = await API.get("api/login?username=" + email + "&password=" + password);
            if (result.status === 500) {
                alert("Incorrect password");
            } else {
                var parsed_result = JSON.parse(result.data);
                localStorage.setItem('username', email);
                localStorage.setItem('user_id', parsed_result['user_id']);
                if (result.data.roll === "Admin") {
                    navigate("/applicants/1");
                } 
                else if(result.data.roll == "Manager"){
                    navigate(myRoutes.Admin);
                }
                else {
                    navigate(myRoutes.JobsListed);
                }
            }
        } catch (err) {
            console.error(err);
        }
    };
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
                <span className="sign-in-1">Sign in</span>
                <TextField
                    className="group-15-instance"
                    {...propsData.group15}
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    sx={{
                        "width": "55%",
                        'justify-content': 'center',
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
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    sx={{
                        'width': '55%',
                        'margin': '0px 0px 0.7rem',
                        'justify-content': 'center',
                        "& .MuiInputBase-root": {
                            "borderRadius": "50px",
                            "height": "90%"
                        }
                    }}
                />
                <span className="forgot-password">Forgot Password?</span>
                <Button variant="contained" onClick={(e) => onSubmit(e)} className="button" id="sigin-button" size="medium" sx={{
                    'borderRadius': '50px',
                    'backgroundColor': '#397598',
                    'color': '#d7ecf5',
                    'borderColor': '#397598',
                    ":hover": {
                        bgcolor: "#578DAD",
                        color: "#d7ecf5"
                    }
                }}>Sign In</Button>
            </div>
            <span className="dont-have-an-account">
                Don’t have an account? <Link to="/SignUp" style={{ 'color': '#FE9F70', 'textDecoration': 'None' }}>Join Now</Link>
            </span>
        </div >
    );
};
export default App;
