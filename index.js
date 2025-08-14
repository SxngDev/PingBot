import fetch from "node-fetch";
import express from "express";

const app = express();
const url = "https://36c62932-7121-471a-880c-9b46688dedb2-08-73tfai7pe1s.riker.replit.dev/";

// Ruta simple para confirmar que el bot está activo
app.get("/", (req, res) => {
  res.send("PingBot funcionando ✅");
});

// Iniciar servidor en el puerto que Render indique
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

// Lógica de ping
console.log("Iniciando PingBot...");
setInterval(() => {
  fetch(url)
    .then(res => console.log(`[${new Date().toLocaleTimeString()}] Ping enviado. Status:`, res.status))
    .catch(err => console.error("Error al hacer ping:", err));
}, 4 * 60 * 1000); // cada 4 minutos
