
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { height, Stack } from "@mui/system";

function Login({showValue, callback, callback1}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const uID = event.target.userName.value
    const password = event.target.password.value
    event.preventDefault();
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/signin?userId=" + uID + "&password=" + password,
    })
    .then((response) => {
      const res =response.data
      console.log(res)
      if(res["result"] != "Failed"){
        callback(uID)
      } else {
        alert("Unable to signin");
      }
      
    }).catch((error) => {
      if (error.response) {
        alert("error")
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  };

  const handleRegister = (event) => {
    const uID = event.target.userName.value
    const password = event.target.password.value
    axios.post("/sign-up", {
        'userId': uID,
        'password': password
      })
      .then((response) => {
        const res =response.data
        if(res["result"] != "Failed"){
          callback1(uID)
        } else {
          alert("Unable to signup");
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/signin?userId=userid&password=abc123").then((data) => {
     alert("hello");
    });
  }, []);
  if(showValue === false){
  return (
    <Stack>
      <label>
        Username:
        <input
          type="text"
          id="userName"
          name="userName"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" onClick={(event) => handleSubmit(event)}>Submit</button>
      <button type = "register" onClick={(event) => handleRegister(event)}>Register</button>
    </Stack>
  );
}
}
export default Login;
