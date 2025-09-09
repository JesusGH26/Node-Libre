const express = require('express');
const app = express();
const PUERTO = process.env.PORT || 3000;

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Jesus Adrian Gutierrez Herrera/ingenieria informatica/Programacion para internet/Cucei');
});

// Iniciar el servidor
app.listen(PUERTO, () => {
    console.log(`El servidor está ejecutándose en http://localhost:${PUERTO}`);
});