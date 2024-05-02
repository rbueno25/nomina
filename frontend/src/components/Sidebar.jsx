import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import '../css/Sidebar.css';

const Sidebar = () => {
  return (

    <div class="sidebar">
    <div class="logo-details">
      <MdSpaceDashboard />
        <span class="logo-name">Corcell</span>
    </div>
    <ul class="nav-links">
        <li>
            <a href="bienvenido.php">
              <GoHomeFill />
                <span class="link-name">Inicio</span>
            </a>
        </li>

        <li>
            <a href="productos.php">
                <i class='bx bxs-basket'></i>
                <span class="link-name">Productos</span>
            </a>
        </li>

        <li>
            <a href="mostrar-proveedor.php">
                <i class='bx bx-package'></i>
                <span class="link-name">Proveedores</span>
            </a>
        </li>

        <li>
            <a href="usuario.php">
                <FaUserAlt />
                <span class="link-name">Usuarios</span>
            </a>
        </li>

        <li>
            <a href="mostrar-compra.php">
                <i class='bx bx-receipt'></i>
                <span class="link-name">Orden de compra</span>
            </a>
        </li>
        
         <li>
            <a href="logout.php" class="salir">
                <i class='bx bx-log-out'></i>
                <span class="link-name">Salir</span>
            </a>
        </li>


    </ul>
</div>
  )
}

export default Sidebar