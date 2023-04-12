import * as React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {useState} from "react";
import API from "../api";
import myRoutes from "../routes";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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

    const handleSignUpClick = async () => {
        try {
            let result = await API.post(
                "api/signup?username=" + username + "&password=" + password
            );
            if (result.status === 200){
                var parsed_result = JSON.parse(result.data);
                localStorage.setItem('user_id', parsed_result['user_id']);
                localStorage.setItem('username', username);
                navigate(myRoutes.JobsListed)
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="sign-in">
            <div className="rectangle-3">
                <span className="sign-in-1">Sign up</span>
                <TextField
                    className="group-15-instance"
                    {...propsData.group15}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <Button 
                variant="contained" 
                className="button" 
                id="sigin-button" 
                size="medium" 
                onClick={handleSignUpClick}
                sx={{
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
