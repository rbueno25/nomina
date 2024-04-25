import React from "react";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    clave: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${value.username} Clave: ${value.clave}`);
  };

  return (
    <>
      <div className="Login">
        <form action="" className="frm">
          <h1 className="titu">Login</h1>

          <div className="input-groupt">
            <div className="input-feild">
              <div className="lala">
                <label htmlFor="">Nombre de Usuario:</label>
                <input
                  onChange={(event) => {
                    setValue({ ...value, username: event.target.value });
                  }}
                  type="text"
                />
              </div>
            </div>
            <div className="input-feild">
              <div className="lala">
                <label htmlFor="">Contraseña: </label>
                <input
                  onChange={(event) => {
                    setValue({ ...value, clave: event.target.value });
                  }}
                  type="password"
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
