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

const list = (table) => {
  return new Promise((resolve, reject) => {
    Dbase.query(
      `SELECT * FROM ${table} WHERE estado = 'activo'`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const list_inactive = (table) => {
  return new Promise((resolve, reject) => {
    Dbase.query(
      `SELECT * FROM ${table} WHERE estado = 'inactivo'`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const reactivated = (table, id) => {
  return new Promise((resolve, reject) => {
    Dbase.query(
      `update ${table} set estado = 'activo' WHERE id_usuario = ${id};`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const search = (table, id) => {
  return new Promise((resolve, reject) => {
    Dbase.query(`SELECT * FROM ${table} WHERE id_usuario = ${id}`, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const add = (table, data) => {
  return new Promise((resolve, reject) => {
    Dbase.query(`INSERT INTO ${table} SET ?;`, [data], (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const update = (table, data, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE ${table} SET ? where id_usuario = ${id};`;
    Dbase.query(sql, [data], (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const delet = (table, id) => {
  return new Promise((resolve, reject) => {
    const sql = `update ${table} set activo = 'inactivo' WHERE id =  ${id};`;
    Dbase.query(sql, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const login = (table, data) => {
  return new Promise((resolve, reject) => {
    Dbase.query(
      `SELECT * FROM ${table} WHERE Nombre = '${data.username}' and Clave = '${data.clave}' `,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

module.exports = {
  search,
  list,
  list_inactive,
  reactivated,
  add,
  delet,
  update,
  login,
};