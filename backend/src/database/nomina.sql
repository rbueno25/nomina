-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2024 a las 15:31:00
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nomina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `IdCargo` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Id_Departamento` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`IdCargo`, `Nombre`, `Descripcion`, `Id_Departamento`) VALUES
(1, 'Director de RRHH', ' profesional encargado de buscar, seleccionar y contratar a las personas más aptas y preparadas para cubrir los puestos de trabajo que se ofrecen en su empresa.', 1),
(2, 'Gerente Informática.', 'es responsable de la estrategia, las operaciones y las iniciativas asociadas de Tecnología de la Información (TI) para desarrollar y apoyar el Plan Estratégico de la compañía.', 4),
(3, 'Gerente Transformación Digital', 'DescripcionCargo3', 4),
(4, 'Contador', 'DescripcionCargo4', 3),
(5, 'Técnico de selección', 'Se encarga de seleccionar y entrevistar candidatos para cubrir un determinado puesto de trabajo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deducciones`
--

CREATE TABLE `deducciones` (
  `IdDeducciones` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Cantidad` decimal(10,2) DEFAULT NULL,
  `ID_Empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `Id_Departamento` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`Id_Departamento`, `Nombre`, `Descripcion`) VALUES
(1, 'Rec. Humanos', 'Recursos Humanos es el departamento de una empresa que se encarga de encontrar, seleccionar, reclutar y capacitar a las personas que solicitan un empleo, así como administrar las prestaciones o beneficios que se les otorgan.'),
(2, 'Administracion', 'Coordinar y dirigir los procesos que permitan asegurar el adecuado funcionamiento operativo de la institución. '),
(3, 'Contabilidad', 'Preparar informes contables para las autoridades competentes y especialmente para la Dirección General de Contabilidad Gubernamental.'),
(4, 'TI', ' gestionar la infraestructura informática de una empresa y mantenerla en funcionamiento. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuentos`
--

CREATE TABLE `descuentos` (
  `IdDescuentos` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Cantidad` decimal(10,2) DEFAULT NULL,
  `ID_Empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `IdEmpleados` int(11) NOT NULL,
  `Cedula` varchar(100) DEFAULT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `Telefono` varchar(255) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Estado` varchar(255) DEFAULT NULL,
  `Pais` varchar(255) DEFAULT NULL,
  `FechaNac` date DEFAULT NULL,
  `FechaInicio` date DEFAULT NULL,
  `ID_TipoContrato` int(11) DEFAULT NULL,
  `ID_Cargo` int(11) DEFAULT NULL,
  `ID_Departamento` int(11) DEFAULT NULL,
  `SalarioBase` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`IdEmpleados`, `Cedula`, `Nombre`, `Apellido`, `Correo`, `Telefono`, `Direccion`, `Estado`, `Pais`, `FechaNac`, `FechaInicio`, `ID_TipoContrato`, `ID_Cargo`, `ID_Departamento`, `SalarioBase`) VALUES
(1, 'QRWE12-QYW5', 'Carlos', 'Jimenez', 'cjimenez20@gmail.com', '8092190893', 'Balbastro 770, Buenos Aires', 'Santo Domingo', 'Republica Dominicana', '2000-05-01', '2020-05-12', NULL, 1, 4, 200000),
(2, 'ODFDF84-HFYFD98', 'Dylan', 'Cepeda', 'dcepeda2108@gmail.com', '8296389252', 'Calle Puentezuelas, 55, Granada, España', 'Santo Domingo', 'Republica Dominicana', '2007-05-05', '2026-05-15', NULL, 4, 3, 150000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nomina`
--

CREATE TABLE `nomina` (
  `IdNomina` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `TotalPercepciones` decimal(10,2) DEFAULT NULL,
  `TotalDeducciones` decimal(10,2) DEFAULT NULL,
  `ID_Empleado` int(11) DEFAULT NULL,
  `ID_TipoNomina` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `percepciones`
--

CREATE TABLE `percepciones` (
  `IdPercepciones` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Cantidad` decimal(10,2) DEFAULT NULL,
  `ID_Empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `IdPermisos` int(11) NOT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `ID_Rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registroactividad`
--

CREATE TABLE `registroactividad` (
  `IdRegistro` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `HorasTrabajadas` int(11) DEFAULT NULL,
  `HorasExtras` int(11) DEFAULT NULL,
  `Ausencias` int(11) DEFAULT NULL,
  `ID_Empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `ID_Rol` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`ID_Rol`, `Nombre`) VALUES
(1, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipocontrato`
--

CREATE TABLE `tipocontrato` (
  `IdTipocontrato` int(11) NOT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiponomina`
--

CREATE TABLE `tiponomina` (
  `IdTiponomina` int(11) NOT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Frecuencia` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `Clave` varchar(255) DEFAULT NULL,
  `ID_Rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `Nombre`, `Correo`, `Contraseña`, `ID_Rol`) VALUES
(1, 'Admin', 'admin1935@gmail.com', '1935', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`IdCargo`),
  ADD KEY `Id_Departamento` (`Id_Departamento`);

--
-- Indices de la tabla `deducciones`
--
ALTER TABLE `deducciones`
  ADD PRIMARY KEY (`IdDeducciones`),
  ADD KEY `ID_Empleado` (`ID_Empleado`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`Id_Departamento`);

--
-- Indices de la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD PRIMARY KEY (`IdDescuentos`),
  ADD KEY `ID_Empleado` (`ID_Empleado`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`IdEmpleados`),
  ADD KEY `ID_TipoContrato` (`ID_TipoContrato`),
  ADD KEY `ID_Cargo` (`ID_Cargo`),
  ADD KEY `ID_Departamento` (`ID_Departamento`);

--
-- Indices de la tabla `nomina`
--
ALTER TABLE `nomina`
  ADD PRIMARY KEY (`IdNomina`),
  ADD KEY `ID_Empleado` (`ID_Empleado`),
  ADD KEY `ID_TipoNomina` (`ID_TipoNomina`);

--
-- Indices de la tabla `percepciones`
--
ALTER TABLE `percepciones`
  ADD PRIMARY KEY (`IdPercepciones`),
  ADD KEY `ID_Empleado` (`ID_Empleado`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`IdPermisos`),
  ADD KEY `ID_Rol` (`ID_Rol`);

--
-- Indices de la tabla `registroactividad`
--
ALTER TABLE `registroactividad`
  ADD PRIMARY KEY (`IdRegistro`),
  ADD KEY `ID_Empleado` (`ID_Empleado`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID_Rol`);

--
-- Indices de la tabla `tipocontrato`
--
ALTER TABLE `tipocontrato`
  ADD PRIMARY KEY (`IdTipocontrato`);

--
-- Indices de la tabla `tiponomina`
--
ALTER TABLE `tiponomina`
  ADD PRIMARY KEY (`IdTiponomina`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD KEY `ID_Rol` (`ID_Rol`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD CONSTRAINT `cargo_ibfk_1` FOREIGN KEY (`Id_Departamento`) REFERENCES `departamento` (`Id_Departamento`);

--
-- Filtros para la tabla `deducciones`
--
ALTER TABLE `deducciones`
  ADD CONSTRAINT `deducciones_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `empleados` (`IdEmpleados`);

--
-- Filtros para la tabla `descuentos`
--
ALTER TABLE `descuentos`
  ADD CONSTRAINT `descuentos_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `empleados` (`IdEmpleados`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`ID_TipoContrato`) REFERENCES `tipocontrato` (`IdTipocontrato`),
  ADD CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`ID_Cargo`) REFERENCES `cargo` (`IdCargo`),
  ADD CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`ID_Departamento`) REFERENCES `departamento` (`Id_Departamento`);

--
-- Filtros para la tabla `nomina`
--
ALTER TABLE `nomina`
  ADD CONSTRAINT `nomina_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `empleados` (`IdEmpleados`),
  ADD CONSTRAINT `nomina_ibfk_2` FOREIGN KEY (`ID_TipoNomina`) REFERENCES `tiponomina` (`IdTiponomina`);

--
-- Filtros para la tabla `percepciones`
--
ALTER TABLE `percepciones`
  ADD CONSTRAINT `percepciones_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `empleados` (`IdEmpleados`);

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`ID_Rol`) REFERENCES `roles` (`ID_Rol`);

--
-- Filtros para la tabla `registroactividad`
--
ALTER TABLE `registroactividad`
  ADD CONSTRAINT `registroactividad_ibfk_1` FOREIGN KEY (`ID_Empleado`) REFERENCES `empleados` (`IdEmpleados`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`ID_Rol`) REFERENCES `roles` (`ID_Rol`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`ID_Rol`) REFERENCES `roles` (`ID_Rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
