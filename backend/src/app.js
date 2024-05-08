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

const  app = express()

app.set("port", config.app.port)


// middlewares

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.use(cookie())

app.use("/api/clientes", clientes)
app.use("/api/users", login)
app.use("/api/percepciones", percepciones)

module.exports = app;