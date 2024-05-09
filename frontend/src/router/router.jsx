import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../app/Dashboard';
import Percepciones from "../app/percepciones";
import Agregar from "../components/Agregar";
import Login from '../app/Login';

const Path = () => {
    return(
        <Router >
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/percepciones" element={<Percepciones />} />
            </Routes>
        </Router>
    )
}

export default Path