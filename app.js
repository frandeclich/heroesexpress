// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

//rutas
const rutaMain = require('./routes/main');
const rutaHeroe = require('./routes/heroes')
// Ruta Raíz / ➝ Home
app.use('/', rutaMain);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes', rutaHeroe);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado


// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
 

// Ruta Créditos

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});