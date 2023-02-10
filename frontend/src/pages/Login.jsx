import * as React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const App = () => {
    const propsData = {
        group15: {
            fullWidth: true,
            label: "Username",
        },
        rectangle10: {
            fullWidth: true,
        },
        button: {
            variant: "outlined",
            color: "secondary",
            children: "Sign In",
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
                    type="text"
                    sx={{
                        "width": "55%",
                        "flex-basis": "8%",
                        "margin-top": "7px",
                        "margin-left": "4px",
                        "border-radius": "50px",
                    }}
                />
                <TextField
                    className="rectangle-10-instance"
                    {...propsData.rectangle10}
                    type="text"
                    placeholder="Password"
                    sx={{
                        'width': '55%',
                        'flex-basis': '100%',
                        'margin-top': '7px',
                        'border-radius': '50px',
                    }}
                />
                <span className="forgot-password">Forgot Password?</span>
                <Button className="button" id="sigin-button" sx={{
                    width: '25%',
                    'flex-basis': '8%',
                    'margin-top': '1px',
                    'margin-left': '12px',
                    'border-radius': '50px',
                    'background-color': '#397598',
                    'color': '#d7ecf5',
                }} {...propsData.button}
                />
            </div>
            <span className="dont-have-an-account">
                Don’t have an account? <a style={{ 'color': '#FE9F70', }}>Join Now</a>
            </span>
        </div >
    );
};
export default App;
