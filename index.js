import fetch from "node-fetch";
import express from "express";

const app = express();

// URL de tu bot en Replit con la ruta /renderping
const url = "https://36c62932-7121-471a-880c-9b46680dedb2-00-73tftai7epls.riker.replit.dev/renderping";

// Ruta simple para confirmar que el bot está activo
app.get("/", (req, res) => {
    res.send("PingBot funcionando ✅");
});

// Iniciar servidor en el puerto que Render indique
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

// Lógica de ping con tiempo de respuesta
console.log("Iniciando PingBot...");
setInterval(async () => {
    const inicio = Date.now();
    try {
        const res = await fetch(url);
        const tiempo = Date.now() - inicio;
        console.log(`[${new Date().toLocaleTimeString()}] Ping enviado. Status: ${res.status} | Tiempo: ${tiempo}ms`);
    } catch (err) {
        console.error("Error al hacer ping:", err);
    }
}, 4 * 60 * 1000); // cada 4 minutos
