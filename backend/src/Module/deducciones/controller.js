const Dbase = require("../../database/Datapercepciones");

const ListarEmpleados = () => {
    return Dbase.ListarEmpleados("empleados");
}

module.exports = {
    ListarEmpleados,
}