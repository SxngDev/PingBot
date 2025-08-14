import fetch from "node-fetch";

const url = "https://36c62932-7121-471a-880c-9b46680dedb2-00-73tftai7epls.riker.replit.dev/";

console.log("Iniciando PingBot...");

setInterval(() => {
    fetch(url)
        .then(res => console.log(`[${new Date().toLocaleTimeString()}] Ping enviado. Status:`, res.status))
        .catch(err => console.error("Error al hacer ping:", err));
}, 4 * 60 * 1000); // cada 4 minutos
