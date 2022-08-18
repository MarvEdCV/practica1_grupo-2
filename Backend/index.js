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
/**
 * Petición 2 - NUMERO PAR O IMPAR
 */
 app.get('/PAROIMPAR/:numero',(req,res)=>{
    const num = req.params.numero;
    let isPar;
    if(num%2 == 0){
        isPar = true;
    }
    else{
        isPar = false;
    }
    res.send({
        par : isPar
    });
});

/**
 * Petición 3 - FIBONACCI
 */

 app.get('/fibo/:numero', (req, res) => {
    const number = req.params.numero
   
    function GenerateFibonacci(n){
        var fibonacci = 0;
        switch(n) {
            case 0:
                fibonacci = 1
                break
            case 1:
                fibonacci = 1
                break
            default:
                fibonacci = GenerateFibonacci(n - 1) + GenerateFibonacci(n - 2)
                break
        }
        return fibonacci
    }
 
    var result = GenerateFibonacci(number)
   
    res.send({Fibonnaci: result})    
});

app.listen(port,()=> console.log(`Escuchando en el puerto: ${port}`));