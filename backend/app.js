const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const authRouter = require("./routes/auth");
const mascotasRouter = require("./routes/mascotas");
const adopcionesRouter = require("./routes/adopciones");

app.use("/api/auth", authRouter);
app.use("/api/mascotas", mascotasRouter);
app.use("/api/adopciones", adopcionesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Backend de Adopción de Mascotas funcionando 🚀" });
});

app.get("/login", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e7e42ff 0%, #75e67eff 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .login-box {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            width: 300px;
            text-align: center;
          }
          h2 {
            margin-bottom: 20px;
            color: #333;
          }
          input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            width: 100%;
            padding: 10px;
            background: #006917ff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }
          button:hover {
            background: #189729ff;
          }
        </style>
      </head>
      <body>
        <div class="login-box">
          <h2>Login</h2>
          <form method="POST" action="/api/auth/login">
            <input type="email" name="email" placeholder="Correo electrónico" required />
            <input type="password" name="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;
