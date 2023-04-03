
import React, { useState } from "react";

function Login({showValue, callback}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    // make HTTP request to server to validate user's credentials
  };
  if(showValue === false){
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" onClick={(event) => handleSubmit}>Submit</button>
      <button type = "register">register</button>
    </form>
  );
}
}
export default Login;
