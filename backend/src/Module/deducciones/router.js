const express = require("express");
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

router.get("/", async(req, res) => {
   const items = await controlador.ListarEmpleados();
   respuesta.success(req, res, items, 200);
});

module.exports = router;
