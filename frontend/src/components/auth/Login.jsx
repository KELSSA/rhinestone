import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { credentialContext } from "../../App";
import { AiFillEye } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import "../../styles/login.css";
import log from "../../images/log.png";

import "../../styles/responsive.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState("");
  const { credentialState, setCredentials } = useContext(credentialContext);
  const [passwordShown, setPasswordShown] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleErrors = async (response) => {
    if (!response.ok) {
      const { message } = await response.json();
      console.log(" message:", message);
      throw Error(message);
    }

    return response.json();
  };

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(handleErrors)
      .then((data) => {
        const decoded = jwt_decode(data.token);
        setCredentials({
          email: decoded.email,
          firstname: decoded.firstname,
          lastname: decoded.lastname,
          schoolCode: decoded.schoolCode,
          rank: decoded.rank,
        });

        history.push({ pathname: "/dashboard", state: { rank: data.rank } });
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  const history = useHistory();

  return (
    <div className="body Register Login">
      <div className="container">
        <div className="leftRow">
          <div className="upper">
            <p className="company">
              COMP<span className="guru">ANY</span>
            </p>
            <Link to="/login" className="active">
              <li>Login</li>
            </Link>
            <Link to="/">
              <li>Register</li>
            </Link>
          </div>

          <div className="para">
            <p className=" sign">SIGN IN</p>
            <p className="rhine">Sign in to Rhinestone</p>
          </div>

          <form className="form" onSubmit={login}>
            <label>
              <input
                type=" email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i onClick={tooglePasswordVisibility}>
                <AiFillEye className="eye" />
              </i>
              <div>
                <p
                  style={{
                    color: "red",
                    marginLeft: "6em",
                    marginTop: "-1.2em",
                  }}
                >
                  {isError}
                </p>
              </div>
            </label>

            <label>
              <button type="submit">Sign in</button>
            </label>
          </form>
        </div>

        <div className="sideRow">
          <img src={log} alt=" log" className="log" />
        </div>
      </div>
    </div>
  );
}

export default Register;
