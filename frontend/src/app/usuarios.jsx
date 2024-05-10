import React from "react";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Ajustar from "../components/ajustar";


const Usuarios = () => {
  const rows = [
    "IdUsuario",
    "Nombre",
    "Correo",
    "Clave",
    "ID_Rol",
  ];

  const columns = [
    "IdUsuario",
    "Nombre",
    "Correo",
    "Clave",
    "ID_Rol",
  ];

  const api = {
    url: "http://localhost:3000/api/usuarios",
  };
  return (
    <>
    <Ajustar nombre="Usuarios" />
      <Table columns={columns} rows={rows} api={api} />
    <Sidebar/>
    </>
  );
};

export default Usuarios;