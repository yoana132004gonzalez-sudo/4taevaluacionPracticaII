const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Guardar solicitud de adopción
router.post("/", async (req, res) => {
  const { usuario_id, mascota_id, motivo } = req.body;
  try {
    await pool.query(
      "INSERT INTO adopciones (usuario_id, mascota_id, motivo) VALUES (?, ?, ?)",
      [usuario_id, mascota_id, motivo]
    );
    res.status(201).json({ msg: "Solicitud de adopción registrada" });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

// Listar solicitudes
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT a.id, u.nombre AS usuario, m.nombre AS mascota, a.motivo, a.fecha " +
      "FROM adopciones a " +
      "JOIN usuarios u ON a.usuario_id = u.id " +
      "JOIN mascotas m ON a.mascota_id = m.id"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

module.exports = router;
