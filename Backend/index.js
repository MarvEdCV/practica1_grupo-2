const express =  require('express');
const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.json());
const port = process.env.port || 3000;

/**
 * Peticion 1 - NOMBRES
 */
app.get('/',(req,res)=>{
    const devs = [
        {
        nombre: 'Analisis y Diseño 1',
        dev: 'Marvin Eduardo Catalán Véliz - 201905554 - Práctica 1 - Grupo #2'
        },
        {
        nombre: 'Analisis y Diseño 1',
        dev: 'Diego Fernando Cortez Lopez - 201900955 - Práctica 1 - Grupo #2'
        },
        {
        nombre: 'Analisis y Diseño 1',
        dev: 'Julio José Orellana Ruíz - 201908120 - Práctica 1 - Grupo #2'
        },
        {
        nombre: 'Analisis y Diseño 1',
        dev: 'Sara Paulina Medrano Cojulún - 201908053 - Práctica 1 - Grupo #2'
        }
    ];
    res.send(devs);
});

app.listen(port,()=> console.log(`Escuchando en el puerto: ${port}`));