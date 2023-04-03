import React, { useState } from "react";

function SignUp({showValue, callback}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    // make HTTP request to server to validate user's credentials
  };
  if(showValue === true){
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
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
}
}
export default SignUp;
