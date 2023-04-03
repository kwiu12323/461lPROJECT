import React, { useState, useEffect } from "react";
import axios from "axios";
import { getActiveElement } from "@testing-library/user-event/dist/utils";


function Login({showValue, callback, callback1}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url:"http://localhost:5000/login",
      data: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      alert(response.data.username)
      alert("hit backend");
      
    }).catch((error) => {
      if (error.response) {
        alert("error")
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers) 
        }
    })
    
    
    // make HTTP request to server to validate user's credentials
  };
  const handleRegister = (event) => {
    
    callback1();

  };

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/signin?userId=userid&password=abc123").then((data) => {
     alert("hello");
    });
  }, []);
  
  if (showValue === false) {
    return (
      <form onSubmit={handleSubmit}> 
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
        <button type="submit">Submit</button>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    );
  }
}

export default Login;
