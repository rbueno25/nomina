const Dbase = require("../../database/Datausuarios")

const login = (data) => {
  return Dbase.login("usuario",data);
};

const ListarUsuarios = () => {
  return Dbase.ListarUsuarios("usuario");
};

module.exports = {
  login,
  ListarUsuarios,
};