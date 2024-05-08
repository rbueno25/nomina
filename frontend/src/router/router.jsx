import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../app/Dashboard';
import Percepciones from "../app/percepciones";
import Login from '../app/Login';

const Path = () => {
    return(
        <Router >
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/percepciones" element={<Percepciones />} />
            </Routes>
        </Router>
    )
}

export default Path