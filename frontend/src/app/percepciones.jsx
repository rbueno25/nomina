import React from 'react'
import Table from '../components/Table'

const Percepciones = () => {

  const rows = [
     " IdEmpleados",
     " Cedula",
     " Nombre ",
     " Apellido",
     " Correo",
     " Telefono",
     " Direccion",
     " Estado",
     " Pais",
     " FechaNac",
     " FechaInicio",
     " ID_TipoContrato",
     " ID_Cargo",
     " ID_Departamento",
  ]

  const columns = [
    " IdEmpleados",
    " Cedula",
    " Nombre ",
    " Apellido",
    " Correo",
    " Telefono",
    " Direccion",
    " Estado",
    " Pais",
    " FechaNac",
    " FechaInicio",
    " ID_TipoContrato",
    " ID_Cargo",
    " ID_Departamento",
 ]

 const api = {
  url: "http://localhost:3000/api/percepciones"
 }
  return (
    <>
    <Table columns={columns} rows={rows} api={api} />
    </>
  )
}

export default Percepciones
