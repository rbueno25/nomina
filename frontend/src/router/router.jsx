import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../app/Dashboard';
import Percepciones from "../app/percepciones";
import Deducciones from "../app/deducciones";
import Agregar from "../components/Agregar";
import Usuarios from "../app/usuarios";
import Empleados from "../app/empleados";
import Login from '../app/Login';

const Path = () => {
    return(
        <Router >
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/percepciones" element={<Percepciones />} />
                <Route path="/deducciones" element={<Deducciones />} />
                <Route path="/empleados" element={<Empleados />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Routes>
        </Router>
    )
}

export default Path