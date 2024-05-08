const Dbase = require("../../database/db");

const ListarEmpleados = () => {
    return Dbase.ListarEmpleados("empleados");
}

module.exports = {
    ListarEmpleados,
}