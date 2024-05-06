import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../app/Dashboard';
import Login from '../app/Login';

const Path = () => {
    return(
        <Router >
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default Path