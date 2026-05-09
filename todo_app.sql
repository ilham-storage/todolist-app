-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20260421.e3a1824fe4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 09, 2026 at 11:25 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_done` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `user_id`, `title`, `is_done`, `created_at`) VALUES
(1, 1, 'Belajar Backend', 0, '2026-04-23 07:33:10'),
(19, 4, 'test', 0, '2026-04-23 10:32:04'),
(32, 6, 'Mempelajari syntax Java lagi', 0, '2026-04-24 08:19:49'),
(33, 6, 'Review Code sama Claude/GPT', 0, '2026-04-24 08:20:00'),
(34, 7, 'Push project ke github', 1, '2026-05-08 13:43:02'),
(35, 7, 'download docker', 1, '2026-05-08 13:43:12'),
(36, 7, 'setup docker', 1, '2026-05-08 13:43:22'),
(37, 7, 'beli vps', 1, '2026-05-08 13:43:27'),
(38, 7, 'setup vps', 1, '2026-05-08 13:43:31'),
(39, 7, 'deploy', 0, '2026-05-08 13:43:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `password`) VALUES
(2, 'Safira', '$2b$10$8QbHASQc3XxPN9ih5OQrc.nWGoeTuJTSOzZS6oD37p6GLdGypPlze'),
(3, 'Giselle', '$2b$10$wK/0zxLw2.khTQvKlHlrXuvcRtL.oyTck/LvLwoZAboPO1bORlixq'),
(4, 'Enami', '$2b$10$gAL7wJ8k16A87kDjbwTtDeDJGT5zoe8aswTX23L5No5SH/GznZowm'),
(5, 'aceraspire', '$2b$10$i7D6LvB7jJkod/Lu4QAFo.8IChVzI1Iy3TjxscyDGiN/0qM4mNV/i'),
(6, 'ilham', '$2b$10$9ab4vwVtKUOvZ/OmXRKgsel4LLeApQnXVpfKcu0jQcjJN/1yA5bvu'),
(7, 'ryujin', '$2b$10$N3wtl5DcZj9VnWXdv.st0ujY3lJfrleo67UlTSNPlZObWUzD.i2sy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
