import React from "react";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Ajustar from "../components/ajustar";


const Empleados = () => {
  const rows = [
    "IdEmpleados",
    "Cedula",
    "Nombre",
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
  ];

  const columns = [
    "IdEmpleados",
    "Cedula",
    "Nombre",
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
  ];

  const api = {
    url: "http://localhost:3000/api/empleados",
  };
  return (
    <>
    <Ajustar nombre="Empleados" />
      <Table columns={columns} rows={rows} api={api} />
    <Sidebar/>
    </>
  );
};

export default Empleados;
