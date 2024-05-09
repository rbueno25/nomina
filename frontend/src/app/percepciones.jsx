import React from 'react'
import Table from '../components/Table'
import { IoMdPersonAdd } from "react-icons/io";
import '../css/ajustar.css'

const Percepciones = () => {

  const rows = [
     "IdEmpleados",
     "Cedula",
     "Nombre ",
     "Apellido",
     "Correo",
     "Telefono",
     "Direccion",
     "Estado",
     "Pais",
     "FechaNac",
     "FechaInicio",
     "ID_TipoContrato",
     "ID_Cargo",
     "ID_Departamento",
     "SalarioBase",
  ]

  const columns = [
    "IdEmpleados",
    "Cedula",
    "Nombre ",
    "Apellido",
    "Correo",
    "Telefono",
    "Direccion",
    "Estado",
    "Pais",
    "FechaNac",
    "FechaInicio",
    "TipoContrato",
    "Cargo",
    "Departamento",
    "Salario",
 ]

 const api = {
  url: "http://localhost:3000/api/percepciones"
 }
  return (
    <>
      <h1>Percepciones</h1>
      <hr />
      <button className='agregar'><IoMdPersonAdd /> Agregar</button>
    <Table columns={columns} rows={rows} api={api} />
    </>
  )
}

export default Percepciones
