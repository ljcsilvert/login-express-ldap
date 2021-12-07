CREATE DATABASE IF NOT EXISTS `dummy_db`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */
/*!80016 DEFAULT ENCRYPTION='N' */;
USE `dummy_db`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: dummy_db
-- ------------------------------------------------------
-- Server version	8.0.25
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
-- Table structure for table `role`
--
DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL AUTO_INCREMENT,
  `name_role` varchar(500) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `role`
--
LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO
  `role`
VALUES
  (1, 'su'),(2, 'dev'),(3, 'manager'),(4, 'trader');
  /*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;
--
  -- Table structure for table `role_user`
  --
  DROP TABLE IF EXISTS `role_user`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_user` (
    `id_role` int NOT NULL,
    `id_user` int NOT NULL,
    PRIMARY KEY (`id_role`, `id_user`),
    KEY `role_user_user0_FK` (`id_user`),
    CONSTRAINT `role_user_role_FK` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
    CONSTRAINT `role_user_user0_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;
--
  -- Dumping data for table `role_user`
  --
  LOCK TABLES `role_user` WRITE;
  /*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO
  `role_user`
VALUES
  (1, 1),(2, 1),(3, 2),(4, 2);
  /*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;
--
  -- Table structure for table `team`
  --
  DROP TABLE IF EXISTS `team`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
    `id_team` int NOT NULL AUTO_INCREMENT,
    `name_team` varchar(200) NOT NULL,
    PRIMARY KEY (`id_team`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;
--
  -- Dumping data for table `team`
  --
  LOCK TABLES `team` WRITE;
  /*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO
  `team`
VALUES
  (1, 'Abba'),(2, 'Baba');
  /*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
--
  -- Table structure for table `user`
  --
  DROP TABLE IF EXISTS `user`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
    `id_user` int NOT NULL AUTO_INCREMENT,
    `pseudo_user` varchar(100) NOT NULL,
    `email_user` varchar(300) NOT NULL,
    `name_user` varchar(300) NOT NULL,
    `image_path_user` varchar(1000) NOT NULL,
    `id_team` int NOT NULL,
    PRIMARY KEY (`id_user`),
    KEY `user_team_FK` (`id_team`),
    CONSTRAINT `user_team_FK` FOREIGN KEY (`id_team`) REFERENCES `team` (`id_team`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;
--
  -- Dumping data for table `user`
  --
  LOCK TABLES `user` WRITE;
  /*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO
  `user`
VALUES
  (
    1,
    'mathew123',
    'mathew@dummy.com',
    'Mathew Miller',
    './assets/mathew_miller.png',
    1
  ),(
    2,
    'barbara456',
    'barbara@dummy.com',
    'Barbara Johnson',
    './assets/barbara_johnson.png',
    2
  );
  /*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
  /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
  /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
  /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
  /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
  /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
-- Dump completed on 2021-12-06 17:11:11