import React from 'react'
import Table from '../components/Table'
import Sidebar from '../components/Sidebar'
import Ajustar from '../components/ajustar'

const Deducciones = () => {

  const rows = [
    "IdDeducciones",
    "Nombre",
    "Cantidad",
    "ID_Empleado",
  ]

  const columns = [
    "IdDeducciones",
    "Nombre",
    "Cantidad",
    "ID_Empleado",
 ]

 const api = {
  url: "http://localhost:3000/api/deducciones"
 }
  return (
    <>
    <Sidebar/>
      <Ajustar nombre="Deducciones" />
    <Table columns={columns} rows={rows} api={api} />
    </>
  )
}

export default Deducciones
