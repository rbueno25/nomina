const Dbase = require("../../database/Dataempleados");

const ListarEmpleados = () => {
    return Dbase.ListarEmpleados("empleados");
}

const AgregarEmpleados = () => {
    return Dbase.AgregarEmpleados("empleados");
}

module.exports = {
    ListarEmpleados,
    AgregarEmpleados
}