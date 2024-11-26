-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla proyecto_juego.sessions: ~5 rows (aproximadamente)
INSERT INTO `sessions` (`session_id`, `score`, `user_id`, `length`, `level`, `device_type`, `screen_size`, `closed_browser`, `date`) VALUES
	(3, 1347, 1, 0, 0, '', '', '', NULL),
	(4, 150, 4, 0, 0, '', '', '', NULL),
	(5, 409, 5, 0, 0, '', '', '', NULL),
	(6, 20, 2, 0, 0, '', '', '', NULL),
	(9, 10, 7, 364369, 1, 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36', '360x740', 'No', '2024-11-26 13:37:52');

-- Volcando datos para la tabla proyecto_juego.users: ~2 rows (aproximadamente)
INSERT INTO `users` (`user_id`, `user_name`, `email`, `password`) VALUES
	(1, 'Gremory27', 'gregorioruiz217@gmail.com', '$2y$10$w0VOUJZyHV2sDZZePLDi/eerdWri9jAM2brYvJZt4L/atpqo6OdCK'),
	(2, 'Canelita24', 'moscarda_mollete_0k@icloud.com', '$2y$10$EEt9GKfntwJoh93OXJY.N.J8RxJvjyjnFKHihEiMHDzdQ6vk35MyS'),
	(3, 'JoshHR', 'thejoshua845@gmail.com', '$2y$10$RX0DzQ2KKvvgltG7LI0Lr.nkOh4R4EaB1pNA8kQsZMS9mO.4ogmkC'),
	(4, 'lakshmi', 'ruizquirosr6@gmail.com', '$2y$10$c48SJMkgA8lEj4LsfZdqku18HDfkPNCVqv7/GEkoRO6eRGboq17c.'),
	(5, 'prueba', 'prueba@xd.com', '$2y$10$VunogWzbP/PIjkhMuftPpurrHRzmu3DjytF0HsL8zwsq7n9swus5W'),
	(6, 'PruebaTL', 'telefono@xd.com', '$2y$10$5v4Csah2R4nTShivKybE9eYO35NlQiJ/w0GgshGE.N1jmvf1Bm14.'),
	(7, 'xd', 'xd@xd.com', '$2y$10$00uq639Z7jJKtGvJsT5.DOsQ6n/NOH1NIP/VxKKvooewoxub.WK06');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
