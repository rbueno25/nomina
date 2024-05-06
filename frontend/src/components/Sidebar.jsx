import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { MdMoneyOff, MdPeopleAlt } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import Table from './Table';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <>
        <div class="sidebar">
        <div class="logo-details">
        <MdSpaceDashboard className='icon'/>
            <span class="logo-name">Corcell</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="bienvenido.php">
                <GoHomeFill className='icon'/>
                    <span class="link-name">Dashboard</span>
                </a>
            </li>

            <li>
                <a href="productos.php">
                <AiFillCreditCard className='icon'/>
                    <span class="link-name">Percepciones</span>
                </a>
            </li>

            <li>
                <a href="mostrar-proveedor.php">
                <MdMoneyOff className='icon'/>
                    <span class="link-name">Deducciones</span>
                </a>
            </li>

            <li>
                <a href="mostrar-compra.php">
                <MdPeopleAlt className='icon'/>
                    <span class="link-name">Empleados</span>
                </a>
            </li>

            <li>
                <a href="usuario.php">
                    <FaUserAlt className='icon'/>
                    <span class="link-name">Usuarios</span>
                </a>
            </li>
            
        </ul>

        <div className="boton">
            <button> <SlLogout className='out'/> Salir</button>
        </div>
    </div>

    <Table columns='lalalalalal' rows='lalalalal'/>
</>
  )
}

export default Sidebar