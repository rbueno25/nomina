//Librerias
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookie = require("cookie-parser")
const config =  require("./config")

// modulos del clietnte
const clientes = require("./Module/usuario/router");
const login = require("./Module/usuario/router");
const percepciones = require("./Module/percepciones/router");
const deducciones = require("./Module/deducciones/router");
const empleados = require("./Module/empleado/router");
const usuarios = require("./Module/usuario/router");


const  app = express()

app.set("port", config.app.port)


// middlewares

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    cors({
        origin: "http://localhost:5174",
        credentials: true
    })
)

app.use(cookie())

app.use("/api/clientes", clientes)
app.use("/api/users", login)
app.use("/api/percepciones", percepciones)
app.use("/api/deducciones", deducciones)
app.use("/api/empleados", empleados)
app.use("/api/usuarios", usuarios)


module.exports = app;