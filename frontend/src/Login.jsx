import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="Login">
        <form action="" className='frm'>

            <h1 className='titu'>Login</h1>

            <div className="input-groupt">

                <div className="input-feild">
                    <div className="lala">
                    <label htmlFor="">Nombre de Usuario:</label>
                    <input type="text" />
                    </div>
                </div>
                <div className="input-feild">
                    <div className="lala">
                    <label htmlFor="">Contraseña: </label>
                    <input type="password" />
                    </div>
                </div>

            </div>

            <div className="button">
                    <button>Enviar</button>
                </div>
        </form>
    </div>
    </>
  )
}

export default Login