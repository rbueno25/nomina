const Dbase = require("../../database/Datapercepciones");

const ListarPercepciones = () => {
    return Dbase.ListarPercepciones("percepciones");
}

module.exports = {
    ListarPercepciones,
}