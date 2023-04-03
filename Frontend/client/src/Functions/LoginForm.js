import React, { useState ,useEffect} from "react";
import axios from "axios";
function LoginForm({ onLogin, callback1  }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // SEND REQUEST TO BACKEND TO VERIFY LOGIN CREDENTIALS
    // right now I assumed that the login is successful if username and password fields are not empty
    if (username && password) {
      onLogin();
    }
  };
  
  const handleRegister = (event) => {
    
    callback1();

  };
  return (
    <form onSubmit={handleSubmit} onRegister={handleRegister}>
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
      <button type="submit" onClick={(event)=>handleSubmit}>Log in</button>
      <button type="register" onClick={(event)=>handleRegister}>Register</button>
    </form>
  );
}

export default LoginForm;
