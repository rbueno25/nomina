const Dbase = require("../../database/Datadeducciones");

const ListarDeducciones = () => {
    return Dbase.ListarDeducciones("deducciones");
}

module.exports = {
    ListarDeducciones,
}