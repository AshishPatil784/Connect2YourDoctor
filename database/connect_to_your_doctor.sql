-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: connect_to_your_doctor
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `appointment_type` varchar(45) NOT NULL DEFAULT 'walk-in',
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  `status` varchar(45) DEFAULT 'scheduled',
  `cancelled_by` varchar(45) DEFAULT NULL,
  `remark_id` int DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `app_fk_doctor_id_idx` (`doctor_id`),
  KEY `app_fk_patient_id_idx` (`patient_id`),
  KEY `app_fk_remark_id_idx` (`remark_id`),
  CONSTRAINT `app_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `app_fk_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `app_fk_remark_id` FOREIGN KEY (`remark_id`) REFERENCES `remark` (`remark_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,'2022-04-11','10:30:00','walk-in',1,1,'cancelled','Patient',NULL),(2,'2022-04-10','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),(3,'2022-04-13','12:00:00','walk-in',1,1,'cancelled','Doctor',NULL),(4,'2022-04-16','10:00:00','walk-in',1,1,'scheduled',NULL,NULL),(5,'2022-04-16','10:30:00','walk-in',1,2,'cancelled','Patient',NULL);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_name` varchar(45) NOT NULL,
  `city_id` int DEFAULT NULL,
  PRIMARY KEY (`area_id`),
  KEY `fk_city_id_idx` (`city_id`),
  CONSTRAINT `fk_city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Hadapsar',1),(2,'Viman Nagar',1),(3,'Baner',1),(4,'Kothrud',1),(5,'Karve Nagar',1),(6,'Vikas Nagar',2),(7,'Powai Naka',2),(8,'Chikli',3),(9,'Gandhi Nagar',3),(10,'Sabarmati RiverFront',4),(11,'Ashram Road',4),(12,'Lakshmi Nagar',5),(13,'Ambika Nagar',5),(14,'Charminar',6),(15,'Amalwadi',7),(16,'Bangaluru South',8),(17,'9th Cross Road',9);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(45) NOT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_state_id_idx` (`state_id`),
  CONSTRAINT `fk_state_id` FOREIGN KEY (`state_id`) REFERENCES `state` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Pune',1),(2,'Satara',1),(3,'Buldhana',1),(4,'Ahmedabad',3),(5,'Surat',3),(6,'Hyderabad',2),(7,'Nizamabad',2),(8,'Bangalore',4),(9,'Mysore',4);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `graduation` varchar(45) NOT NULL,
  `post_graduation` varchar(45) DEFAULT NULL,
  `speciality` varchar(45) NOT NULL,
  `fees` int NOT NULL,
  `area_id` int DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `mobile_number_UNIQUE` (`mobile_number`),
  KEY `doctor_fk_area_id_idx` (`area_id`),
  KEY `doctor_fk_login_id_idx` (`login_id`),
  CONSTRAINT `doctor_fk_area_id` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `doctor_fk_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='doctor_id	first_name last_name mobile_number gender graduation post_graduation fees dob area_id(fk) login_id(fk)\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Mayuresh','Lathkar','7350943266','Male','1997-09-14','MBBS','MD','Orthopedic',500,1,3),(2,'Vishal','Chavan','8237345698','Male','1995-12-12','MBBS','MD','Cardiologists',1000,2,6),(3,'Akash','Auti','7878984432','Male','1995-10-10','MBBS','MD','Gynecologist',600,1,7),(4,'Akash','Alure','8698867332','Male','1996-09-03','MBBS','MD','Pediatrician',400,2,8),(5,'Ankit','Sharma','9987652345','Male','1995-03-01','BDS','','Dentist',300,1,9),(6,'Rahul','Mahajan','7845903216','Male','1996-04-04','MBBS','','Physician',400,1,10),(7,'Ankita','Mishra','9296784432','Female','1995-06-14','MBBS','MS','Gynecologist',500,1,11),(8,'Niraj','Shinde','7878652432','Male','1992-03-03','MBBS','','Physician',600,1,12);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_achievements`
--

DROP TABLE IF EXISTS `doctor_achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_achievements` (
  `achievement_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `achievement` varchar(45) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`achievement_id`),
  KEY `ach_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `ach_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_achievements`
--

LOCK TABLES `doctor_achievements` WRITE;
/*!40000 ALTER TABLE `doctor_achievements` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor_achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_specialization`
--

DROP TABLE IF EXISTS `doctor_specialization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_specialization` (
  `specialization_id` int NOT NULL AUTO_INCREMENT,
  `specializationcol_name` varchar(45) NOT NULL,
  `doctor_id` int DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`specialization_id`),
  KEY `spec_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `spec_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='spec_id(pk) Spec_name doctor_id(fk) comment date\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_specialization`
--

LOCK TABLES `doctor_specialization` WRITE;
/*!40000 ALTER TABLE `doctor_specialization` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor_specialization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_timetable`
--

DROP TABLE IF EXISTS `doctor_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_timetable` (
  `doctor_timetable_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `weekday` varchar(45) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `slot_duration` int DEFAULT '30',
  `break_time` time DEFAULT '14:00:00',
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`doctor_timetable_id`),
  KEY `timetable_fk_doctor_id_idx` (`doctor_id`),
  CONSTRAINT `timetable_fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='doctor_timetable						\ndtt_id	dictor_id(fk)	weekday	start_time	 end_time	slot_dur	break_time\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_timetable`
--

LOCK TABLES `doctor_timetable` WRITE;
/*!40000 ALTER TABLE `doctor_timetable` DISABLE KEYS */;
INSERT INTO `doctor_timetable` VALUES (1,1,'Monday','12:00:00','18:00:00',60,'14:00:00','available'),(2,1,'Tuesday','10:00:00','18:00:00',30,'14:00:00','not available'),(3,1,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(4,1,'Thursday','10:00:00','14:00:00',30,'14:00:00','available'),(5,1,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(6,1,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(7,1,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(8,2,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(9,2,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(10,2,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(11,2,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(12,2,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(13,2,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(14,2,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(15,3,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(16,3,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(17,3,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(18,3,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(19,3,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(20,3,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(21,3,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(22,4,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(23,4,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(24,4,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(25,4,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(26,4,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(27,4,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(28,4,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(29,5,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(30,5,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(31,5,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(32,5,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(33,5,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(34,5,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(35,5,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(36,6,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(37,6,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(38,6,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(39,6,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(40,6,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(41,6,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(42,6,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(43,7,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(44,7,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(45,7,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(46,7,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(47,7,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(48,7,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(49,7,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available'),(50,8,'Monday','10:00:00','18:00:00',30,'14:00:00','available'),(51,8,'Tuesday','10:00:00','18:00:00',30,'14:00:00','available'),(52,8,'Wednesday','10:00:00','18:00:00',30,'14:00:00','available'),(53,8,'Thursday','10:00:00','18:00:00',30,'14:00:00','available'),(54,8,'Friday','10:00:00','18:00:00',30,'14:00:00','available'),(55,8,'Saturday','10:00:00','18:00:00',30,'14:00:00','available'),(56,8,'Sunday','10:00:00','18:00:00',30,'14:00:00','not available');
/*!40000 ALTER TABLE `doctor_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `status` varchar(10) DEFAULT 'active',
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'narwade.niraj.44@gmail.com','niraj@123','Admin','active'),(2,'vikas.dandge07@gmail.com','vikas@123','Patient','active'),(3,'lathkarmayuresh14@gmail.com','mayuresh@123','Doctor','active'),(4,'connecttoyourdoctor@gmail.com','connect@123','Admin','active'),(5,'mrunalzanzane5@gmail.com','mrunal@1234','Patient','active'),(6,'vishal.chavan123@gmail.com','vishal@123','Doctor','active'),(7,'akashauti123@gmail.com','akash@123','Doctor','active'),(8,'akashalure123@gmail.com','akash@123','Doctor','active'),(9,'ankitsharma123@gmail.com','ankit@123','Doctor','active'),(10,'rahulmahajan123@gmail.com','rahul@123','Doctor','active'),(11,'ankitamishra123@gmail.com','ankita@123','Doctor','active'),(12,'neerajshinde123@gmail.com','neeraj@123','Doctor','active');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `blood_group` varchar(45) NOT NULL,
  `dob` date DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `mobile_number_UNIQUE` (`mobile_number`),
  KEY `patient_fk_login_id_idx` (`login_id`),
  CONSTRAINT `patient_fk_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Vikas','Dandge','7972898178','Male','B+','1995-01-07',2),(2,'Mrunal','Zanzane','8698867448','Female','O+','1995-03-15',5);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remark`
--

DROP TABLE IF EXISTS `remark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remark` (
  `remark_id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(45) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  PRIMARY KEY (`remark_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remark`
--

LOCK TABLES `remark` WRITE;
/*!40000 ALTER TABLE `remark` DISABLE KEYS */;
/*!40000 ALTER TABLE `remark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(45) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Maharashtra'),(2,'Telangana'),(3,'Gujarat'),(4,'Karnataka');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 13:20:10
