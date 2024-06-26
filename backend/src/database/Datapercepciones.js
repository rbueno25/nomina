const db = require("mysql");
const config = require("../config");

//Configuracion de la cadena de conexion
 
const conection = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.dbname,
};

const Dbase = db.createConnection(conection);

Dbase.connect((err) => {
  if (err) return console.log("Error connexion in the data of base :", err);
  console.log("connexion is runnig");
});

Dbase.on("error", (err) => {
  console.log("Error en la base de datos", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Error in the CONNECTION LOST");
  } else {
    throw err;
  }
});


//Listar Empleados

const ListarEmpleados = (table) => {
    return new Promise((resolve, reject) => {
      Dbase.query(
        `SELECT Cedula, Nombre, Apellido, SalarioBase FROM ${table}`,
        (err, res) => {
          err ? reject(err) : resolve(res);
        }
      );
    });
  };


  module.exports = {
    ListarEmpleados,
  }
