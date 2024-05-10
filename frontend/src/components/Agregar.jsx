import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/agregar.css'

const Agregar = () => {


  const [value, setValue] = useState({
    id: "",
    cedula: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    estado: "",
    pais: "",
    fechanac: "",
    fechaini: "",
    cargo: "",
    departamento: "",
    salario: "",
  });

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/empleados", value)
      .then((data) => {
        console.log(data);
        navigate("/table");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="lala">

     <div className="container">
        
        <div className="title"><h1>Agregar Empleado</h1></div>
        
        <form className='formulario' onSubmit={handlerSubmit}>

            <div className="form-group">
              <span>ID: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Cedula: </span>
              <input type="text" className='la'/>
            </div>

            
            <div className="form-group">
                <span>Nombre: </span>
                <input  type="text" className='la'/>
            </div>
            
            
            <div className="form-group">
              <span>Apellido: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Correo: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Telefono: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Direccion: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Estado: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Pais: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Fecha Nacimiento: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Fecha Inicio: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Cargo: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Departamento: </span>
              <input type="text" className='la'/>
            </div>

            <div className="form-group">
              <span>Salario: </span>
              <input type="text" className='la'/>
            </div>
            
            <div className="elboton">
              <input type="submit" className='la'/>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Agregar