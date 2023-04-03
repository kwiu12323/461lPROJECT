import React, { useState, useEffect } from "react";
import axios from "axios";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
function Login({ showValue, callback }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = {
    button: 1,
  };

  const handleSubmit = (event) => {
    const uID = event.target.userName.value;
    const password = event.target.password.value;
    event.preventDefault();
    if (state.button === 1) {
      axios({
        method: "GET",
        url:
          "http://127.0.0.1:5000/signin?userId=" +
          uID +
          "&password=" +
          password,
      })
        .then((response) => {
          const res = response.data;
          console.log(res);
          if (res["result"] != "Failed") {
            callback(uID);
          } else {
            alert("Unable to signin");
          }
        })
        .catch((error) => {
          if (error.response) {
            alert("error");
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    } else {
      axios
      .post("/signup", {
        userId: uID,
        password: password,
      })
      .then((response) => {
        const res = response.data;
        if (res["result"] != "Failed") {
          callback(uID);
        } else {
          alert("Unable to signup");
        }
      })
      .catch((err) => {
        alert("Unable to signup try with valid fields");
        console.log(err);
      });
    }
  };


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
        <button type="submit" onClick={() => (state.button = 1)}>
          Submit
        </button>
        <button type="register" onClick={() => (state.button = 2)}>
          Register
        </button>
      </form>
    );
  }
}
export default Login;
