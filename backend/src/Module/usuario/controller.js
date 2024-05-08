const Dbase = require("../../database/db")

const login = (data) => {
  return Dbase.login("usuario",data);
};

module.exports = {
  login,
};