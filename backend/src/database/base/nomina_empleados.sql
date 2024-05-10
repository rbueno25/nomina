-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: nomina
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `IdEmpleados` int NOT NULL,
  `Cedula` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Nombre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Apellido` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Correo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Telefono` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Direccion` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Estado` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Pais` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `FechaNac` date DEFAULT NULL,
  `FechaInicio` date DEFAULT NULL,
  `ID_TipoContrato` int DEFAULT NULL,
  `ID_Cargo` int DEFAULT NULL,
  `ID_Departamento` int DEFAULT NULL,
  `SalarioBase` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'QRWE12-QYW5','Carlos','Jimenez','cjimenez20@gmail.com','8092190893','Balbastro 770, Buenos Aires','Santo Domingo','Republica Dominicana','2000-05-01','2020-05-12',NULL,1,4,200000),(2,'ODFDF84-HFYFD98','Dylan','Cepeda','dcepeda2108@gmail.com','8296389252','Calle Puentezuelas, 55, Granada, España','Santo Domingo','Republica Dominicana','2007-05-05','2026-05-15',NULL,4,3,150000);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-09 22:14:13
