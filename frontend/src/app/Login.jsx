import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    clave: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${value.username} Clave: ${value.clave}`);

    axios
    .post("http://localhost:3000/api/users/login", value)
    .then((res) => {
      if (value.clave != "" && value.user != "") {
        console.log(res.data);
        if (res.data.status === "Success login successful") {
          navigate("/home");
        } else {
          alert("Contraseña o usuario incorrectos");
          navigate("/login");
          
        }
      } else {
        alert("rellene todos los campos");
      }
    })
    .catch((err) => console.log(err));

  };

  return (
    <>
      <div className="Login">
        <form action="" className="frm">
          <h1 className="titu">Login</h1>

          <div className="input-groupt">
            <div className="input-feild">
              <div className="ok">
                <label htmlFor="">Nombre de Usuario:</label>
                <input
                  onChange={(event) => {
                    setValue({ ...value, username: event.target.value });
                  }}
                  type="text"
                  className="input"
                />
              </div>
            </div>
            <div className="input-feild">
              <div className="ok">
                <label htmlFor="">Contraseña: </label>
                <input
                  onChange={(event) => {
                    setValue({ ...value, clave: event.target.value });
                  }}
                  type="password"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="button">
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
