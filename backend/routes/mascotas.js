const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM mascotas");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

router.post("/", async (req, res) => {
  const { nombre, tipo, edad, descripcion, imagen } = req.body;
  try {
    await pool.query(
      "INSERT INTO mascotas (nombre, tipo, edad, descripcion, imagen) VALUES (?, ?, ?, ?, ?)",
      [nombre, tipo, edad, descripcion, imagen]
    );
    res.status(201).json({ msg: "Mascota agregada correctamente" });
  } catch (err) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
});

module.exports = router;
