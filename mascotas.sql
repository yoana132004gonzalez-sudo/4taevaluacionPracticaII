-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2025 a las 22:57:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adopciones`
--

CREATE TABLE `adopciones` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `mascota_id` int(10) UNSIGNED DEFAULT NULL,
  `motivo` text DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` enum('perro','gato') NOT NULL,
  `edad` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `created_at`) VALUES
(1, 'Yoana', 'yoana@gmail.com', '1234', '2025-11-16 16:53:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adopciones`
--
ALTER TABLE `adopciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `mascota_id` (`mascota_id`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_usuarios_email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adopciones`
--
ALTER TABLE `adopciones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adopciones`
--
ALTER TABLE `adopciones`
  ADD CONSTRAINT `adopciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `adopciones_ibfk_2` FOREIGN KEY (`mascota_id`) REFERENCES `mascotas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
