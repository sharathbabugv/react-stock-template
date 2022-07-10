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
import { insertSessionStorage, insertUserData } from "../services/useService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/actions";

const Registration = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [firstName, setFirstName] = useState("Sharath");
  const [lastName, setLastName] = useState("Babu");

  const [emailId, setEmailId] = useState("gvbabu@xyz.in");
  const [phoneNumber, setPhoneNumber] = useState("9738671822");

  const [birthDate, setBirthDate] = useState("");
  const [panNumber, setPanNumber] = useState("abc");

  const [password, setPassword] = useState("test");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      emailId.trim() === "" ||
      phoneNumber.trim() === "" ||
      birthDate.trim() === "" ||
      panNumber.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please enter all the required fields!");
    } else {
      if (emailId.endsWith("@xyz.com") || emailId.endsWith("@xyz.in")) {
        if (phoneNumber.trim().length === 10) {
          const response = insertUserData({
            name: firstName + " " + lastName,
            password: password,
            email: emailId,
            contactNumber: phoneNumber,
            panNumber: panNumber,
            dob: birthDate,
          });
          if (response.status === 200) {
            insertSessionStorage(response.jwt);
            dispatch(userLoggedIn());
            navigate("/dashboard");
          } else {
            alert(response.payload);
          }
        } else {
          alert("Please enter valid phone number!");
        }
      } else {
        alert("Please enter valid email ID!");
      }
    }
  };

  return (
    <Stack
      spacing={4}
      className="registration-stack"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar src="/broken-image.jpg" />
      <h2>Sign Up</h2>
      <h6>Welcome to smart investment</h6>
      <Stack spacing={2} direction="row">
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          id="emailId"
          type="email"
          label="Email ID"
          variant="outlined"
          value={emailId}
          required
          onChange={(e) => setEmailId(e.target.value)}
        />

        <TextField
          id="phoneNumber"
          label="Phone Number"
          value={phoneNumber}
          type="number"
          variant="outlined"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 10);
          }}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          id="date"
          label="Birthdate"
          variant="outlined"
          type="date"
          defaultValue={birthDate}
          required
          sx={{ width: 200 }}
          onChange={(e) => setBirthDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="panNumber"
          label="PAN Number"
          value={panNumber}
          variant="outlined"
          required
          onChange={(e) => setPanNumber(e.target.value)}
        />
      </Stack>

      <Stack>
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
      </Stack>

      <Button
        variant="contained"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Sign Up
      </Button>
      <div>
        Already Registered? <Link to="/login">Login</Link>
      </div>
    </Stack>
  );
};

export default Registration;
