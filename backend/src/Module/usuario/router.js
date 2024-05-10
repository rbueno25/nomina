const express = require("express");
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

// Vamos con el login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const items = await controlador.login(req.body);
    console.log(items);
    respuesta.handleLogin(req, res, "Success login successful", items);
  } catch (err) {
    console.error(err);
    respuesta.handleLogin(req, res, "Database error", err);
  }
});

router.get("/", async(req, res) => {
  const items = await controlador.ListarUsuarios();
  respuesta.success(req, res, items, 200);
});


module.exports = router;