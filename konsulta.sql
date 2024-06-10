-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 01:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `konsulta`
--

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_abdomen`
--

CREATE TABLE `konsulta_lib_abdomen` (
  `abdomen_id` int(11) NOT NULL,
  `abdomen_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_chest`
--

CREATE TABLE `konsulta_lib_chest` (
  `chest_id` int(11) NOT NULL,
  `chest_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_chestxray_findings`
--

CREATE TABLE `konsulta_lib_chestxray_findings` (
  `finding_id` int(11) NOT NULL,
  `finding_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_chestxray_observation`
--

CREATE TABLE `konsulta_lib_chestxray_observation` (
  `observation_id` int(11) NOT NULL,
  `observation_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_diagnostic`
--

CREATE TABLE `konsulta_lib_diagnostic` (
  `diagnostic_id` int(11) NOT NULL,
  `diagnostic_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_digital_rectal`
--

CREATE TABLE `konsulta_lib_digital_rectal` (
  `rectal_id` int(11) NOT NULL,
  `rectal_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_genitourinary`
--

CREATE TABLE `konsulta_lib_genitourinary` (
  `gu_id` int(11) NOT NULL,
  `gu_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_heart`
--

CREATE TABLE `konsulta_lib_heart` (
  `heart_id` int(11) NOT NULL,
  `heart_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_heent`
--

CREATE TABLE `konsulta_lib_heent` (
  `heent_id` int(11) NOT NULL,
  `heent_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_icd`
--

CREATE TABLE `konsulta_lib_icd` (
  `icd_id` int(11) NOT NULL,
  `icd_codes` varchar(20) NOT NULL,
  `icd_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_immchild`
--

CREATE TABLE `konsulta_lib_immchild` (
  `imm_code` varchar(20) NOT NULL,
  `imm_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_immelderly`
--

CREATE TABLE `konsulta_lib_immelderly` (
  `imm_id` int(11) NOT NULL,
  `imm_code` varchar(20) NOT NULL,
  `imm_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_immpregw`
--

CREATE TABLE `konsulta_lib_immpregw` (
  `imm_code` varchar(20) NOT NULL,
  `imm_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_immyoungw`
--

CREATE TABLE `konsulta_lib_immyoungw` (
  `imm_code` varchar(20) NOT NULL,
  `imm_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_management`
--

CREATE TABLE `konsulta_lib_management` (
  `management_id` varchar(20) NOT NULL,
  `management_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_mdiseases`
--

CREATE TABLE `konsulta_lib_mdiseases` (
  `mdisease_id` int(11) NOT NULL,
  `mdisease_code` int(20) NOT NULL,
  `mdisease_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine`
--

CREATE TABLE `konsulta_lib_medicine` (
  `drug_id` int(11) NOT NULL,
  `drug_code` varchar(100) NOT NULL,
  `drug_desc` longtext NOT NULL,
  `gen_code` varchar(20) NOT NULL,
  `salt_code` varchar(20) NOT NULL,
  `form_code` varchar(20) NOT NULL,
  `strength_code` varchar(20) NOT NULL,
  `unit_code` varchar(20) NOT NULL,
  `package_code` varchar(20) NOT NULL,
  `category` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_form`
--

CREATE TABLE `konsulta_lib_medicine_form` (
  `form_id` int(11) NOT NULL,
  `form_code` varchar(20) NOT NULL,
  `form_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_generic`
--

CREATE TABLE `konsulta_lib_medicine_generic` (
  `generic_code` varchar(20) NOT NULL,
  `generic_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_package`
--

CREATE TABLE `konsulta_lib_medicine_package` (
  `package_code` varchar(20) NOT NULL,
  `package_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_salt`
--

CREATE TABLE `konsulta_lib_medicine_salt` (
  `salt_id` int(11) NOT NULL,
  `salt_code` varchar(20) NOT NULL,
  `salt_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_strength`
--

CREATE TABLE `konsulta_lib_medicine_strength` (
  `strength_code` varchar(20) NOT NULL,
  `strength_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_medicine_unit`
--

CREATE TABLE `konsulta_lib_medicine_unit` (
  `unit_id` int(11) NOT NULL,
  `unit_code` varchar(20) NOT NULL,
  `unit_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_ncdq`
--

CREATE TABLE `konsulta_lib_ncdq` (
  `question_id` int(11) NOT NULL,
  `header_id` int(11) NOT NULL,
  `question_desc` longtext NOT NULL,
  `parent_qid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_neuro`
--

CREATE TABLE `konsulta_lib_neuro` (
  `neuro_id` int(11) NOT NULL,
  `neuro_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_signs_symptoms`
--

CREATE TABLE `konsulta_lib_signs_symptoms` (
  `symptom_id` varchar(20) NOT NULL,
  `symptom_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_skin`
--

CREATE TABLE `konsulta_lib_skin` (
  `skin_id` int(11) NOT NULL,
  `skin_desc` longtext NOT NULL,
  `lib_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsulta_lib_zscore`
--

CREATE TABLE `konsulta_lib_zscore` (
  `lib_code` varchar(20) NOT NULL,
  `length` decimal(10,0) NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `result_code` varchar(20) NOT NULL,
  `result_desc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `konsulta_lib_diagnostic`
--
ALTER TABLE `konsulta_lib_diagnostic`
  ADD PRIMARY KEY (`diagnostic_id`);

--
-- Indexes for table `konsulta_lib_heart`
--
ALTER TABLE `konsulta_lib_heart`
  ADD PRIMARY KEY (`heart_id`);

--
-- Indexes for table `konsulta_lib_icd`
--
ALTER TABLE `konsulta_lib_icd`
  ADD PRIMARY KEY (`icd_id`);

--
-- Indexes for table `konsulta_lib_immelderly`
--
ALTER TABLE `konsulta_lib_immelderly`
  ADD PRIMARY KEY (`imm_id`);

--
-- Indexes for table `konsulta_lib_mdiseases`
--
ALTER TABLE `konsulta_lib_mdiseases`
  ADD PRIMARY KEY (`mdisease_id`);

--
-- Indexes for table `konsulta_lib_medicine`
--
ALTER TABLE `konsulta_lib_medicine`
  ADD PRIMARY KEY (`drug_id`);

--
-- Indexes for table `konsulta_lib_medicine_form`
--
ALTER TABLE `konsulta_lib_medicine_form`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `konsulta_lib_medicine_salt`
--
ALTER TABLE `konsulta_lib_medicine_salt`
  ADD PRIMARY KEY (`salt_id`);

--
-- Indexes for table `konsulta_lib_medicine_unit`
--
ALTER TABLE `konsulta_lib_medicine_unit`
  ADD PRIMARY KEY (`unit_id`);

--
-- Indexes for table `konsulta_lib_ncdq`
--
ALTER TABLE `konsulta_lib_ncdq`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `konsulta_lib_skin`
--
ALTER TABLE `konsulta_lib_skin`
  ADD PRIMARY KEY (`skin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `konsulta_lib_diagnostic`
--
ALTER TABLE `konsulta_lib_diagnostic`
  MODIFY `diagnostic_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_heart`
--
ALTER TABLE `konsulta_lib_heart`
  MODIFY `heart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_icd`
--
ALTER TABLE `konsulta_lib_icd`
  MODIFY `icd_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_immelderly`
--
ALTER TABLE `konsulta_lib_immelderly`
  MODIFY `imm_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_mdiseases`
--
ALTER TABLE `konsulta_lib_mdiseases`
  MODIFY `mdisease_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_medicine`
--
ALTER TABLE `konsulta_lib_medicine`
  MODIFY `drug_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_medicine_form`
--
ALTER TABLE `konsulta_lib_medicine_form`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_medicine_salt`
--
ALTER TABLE `konsulta_lib_medicine_salt`
  MODIFY `salt_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_medicine_unit`
--
ALTER TABLE `konsulta_lib_medicine_unit`
  MODIFY `unit_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_ncdq`
--
ALTER TABLE `konsulta_lib_ncdq`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konsulta_lib_skin`
--
ALTER TABLE `konsulta_lib_skin`
  MODIFY `skin_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
