import { useState, useEffect } from "react";
import App from "../App";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorised, setAuthorised] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "ronit" && password === "ronit") {
      setAuthorised(true);
    } else {
      setAuthorised(false);
    }
  };
  return (
    <>
      {!authorised && <form>
        <input
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>}
      {authorised && <App username={username} password={password}/>}
    </>
  );
};
export default Login;
