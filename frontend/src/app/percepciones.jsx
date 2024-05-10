import React from "react";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Ajustar from "../components/ajustar";


const Percepciones = () => {
  const rows = [
    "IdPercepciones",
    "Nombre",
    "Cantidad",
    "ID_Empleado",
  ];

  const columns = [
    "IdPercepciones",
    "Nombre",
    "Cantidad",
    "ID_Empleado",
  ];

  const api = {
    url: "http://localhost:3000/api/percepciones",
  };
  return (
    <>
    <Ajustar nombre="Percepciones" />
      <Table columns={columns} rows={rows} api={api} />
    <Sidebar/>
    </>
  );
};

export default Percepciones;
