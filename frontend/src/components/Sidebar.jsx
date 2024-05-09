import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { MdMoneyOff, MdPeopleAlt } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
        <div className="logo-details">
        <MdSpaceDashboard className='icon'/>
            <span className="logo-name">Corcell</span>
        </div>
        <ul className="nav-links">
            <li>
                <a href="bienvenido.php">
                <GoHomeFill className='icon'/>
                    <span className="link-name">Dashboard</span>
                </a>
            </li>

            <li>
                <Link to={"/percepciones"}>
                <AiFillCreditCard className='icon'/>
                    <span className="link-name">Percepciones</span>
                </Link>
            </li>

            <li>
                <Link to={"/deducciones"}>
                <MdMoneyOff className='icon'/>
                    <span className="link-name">Deducciones</span>
                </Link>
            </li>

            <li>
                <a href="mostrar-compra.php">
                <MdPeopleAlt className='icon'/>
                    <span className="link-name">Empleados</span>
                </a>
            </li>

            <li>
                <a href="usuario.php">
                    <FaUserAlt className='icon'/>
                    <span className="link-name">Usuarios</span>
                </a>
            </li>
            
        </ul>

        <div className="boton">
            <button> <SlLogout className='out'/> Salir</button>
        </div>
    </div>

</>
  )
}

export default Sidebar