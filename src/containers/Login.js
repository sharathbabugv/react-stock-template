import {
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, insertSessionStorage } from "../services/useService";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    if (emailId.trim() === "" || password.trim() === "") {
      alert("Please enter all the required fields!");
    } else {
      if (emailId.endsWith("@xyz.com") || emailId.endsWith("@xyz.in")) {
        const data = {
          'email': emailId,
          'password' : password
        }
        const response = getUserData(data);
        if(response.status === 200){
          insertSessionStorage(response.jwt);
          dispatch(userLoggedIn());
          navigate("/dashboard");
        }else{
          alert(response.payload);
        }
      } else {
        alert("Please enter valid email ID!");
      }
    }
  };

  return (
      <Stack
      className="login-stack"
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar src="/broken-image.jpg" />
        <h2>Login</h2>
        <h6>Welcome to smart investment</h6>

        <TextField
          id="emailId"
          label="Email ID"
          variant="outlined"
          value={emailId}
          required
          onChange={(e) => setEmailId(e.target.value)}
        />

        <TextField
          id="password"
          type={showPassword ? "text" : "Password"}
          label="Password"
          value={password}
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </Button>

        <div>
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </Stack>
  );
};
export default Login;
