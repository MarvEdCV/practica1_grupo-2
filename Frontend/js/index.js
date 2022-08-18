

$(document).ready(function(){
    
    //Creamos el objeto del boton
    let btnDevs = $('#btn-devs');
    const $cuerpoTabla = document.querySelector("#cuerpoTabla");
    let btnPar = $('#btn-par');
    let btnFibonacci = $('#btn-fibonacci');
    
    let btnAlrevez = $('#btn-alrevez');
    
    let btnPotencia = $('#btn-potencia');
    
    let btnRaiz = $('#btn-raiz');
    
    let btnMultiplicacion = $('#btn-multiplicacion');
    
    let btnDivision = $('#btn-division');
    //PETICION 1 
    btnDevs.click(function (){
        getData('http://localhost:3000/',null,null).then(res => {
            for(var i =0;i<res.length;i++){
                let desarrollador = res[i];
                const $tr = document.createElement("tr");
                let $tdNombre = document.createElement("td");
                $tdNombre.textContent = `${desarrollador.nombre} edad: ${desarrollador.edad}`; 
                $tr.appendChild($tdNombre);
                let $tdCarne = document.createElement("td");
                $tdCarne.textContent = desarrollador.dev;
                $tr.appendChild($tdCarne);
                $cuerpoTabla.appendChild($tr);
            }
        })
    });
    
    //PETICION 2
    btnPar.click(function (){
        const numero1 = document.form1.numero1.value;

        getData('http://localhost:3000/PAROIMPAR/',numero1,null).then(res => {
            console.log(res.par);
            let retorno = '';
            if(res.par){
                retorno = 'Numero par'
            }else{
                retorno = 'Numero impar'
            }
            document.form1.res1.value=retorno;
        })
    });
        
    //PETICION 3
    btnFibonacci.click(function (){
        let numero1 = document.form1.numero2.value;

        getData('http://localhost:3000/fibo/',numero1,null).then(res => {
            document.form1.res2.value=res.Fibonnaci;
        })
    });
    
    //PETICION 4 

    btnAlrevez.click(function (){
        let palabra = document.form1.Palabra.value;

        getData('http://localhost:3000/alrevez/',palabra,null).then(res => {
            document.form1.res3.value=res.alrevez;
        })
    });

    //PETICION 5

    btnPotencia.click(function (){
        let numero1 = document.form1.numero3.value;

        getData('http://localhost:3000/potencia/',numero1,null).then(res => {
            document.form1.res4.value=res.potencia;
        })
    });

    //PETICION 6

    btnRaiz.click(function (){
        let numero1 = document.form1.numero3.value;
        getData('http://localhost:3000/raiz/',numero1,null).then(res => {
            document.form1.res4.value=res.raiz;
        })
    });

    //PETICION 7
    btnMultiplicacion.click(function (){
        let numero1 = document.form1.num41.value;
        let numero2 = document.form1.num42.value;

        getData('http://localhost:3000/multiplicacion/',numero1,numero2).then(res => {
            document.form1.res5.value=res.multiplicacion;
        })
    });

    //PETICION 8

    btnDivision.click(function (){
        let numero1 = document.form1.num51.value;
        let numero2 = document.form1.num52.value;

        getData('http://localhost:3000/division/',numero1,numero2).then(res => {
            document.form1.res6.value=res.multiplicacion;
        })
    });
    

/**
 * Funcion que hace la peticion de tipo GET que retorna la respuesta de la API
 * @param {} url Url de el endopoint consumido
 * @param {*} param1 Parametro 1 para endpoints que lo necesiten
 * @param {*} param2 Parametro 2 para endpoints que lo necesiten
 * @returns  retorna un json con el la respuesta de la API
 */
 function getData(url,param1,param2){
    if(param1 == null && param2 == null){

        return fetch(url)
        .then((response) =>{
        return response.json();
        });

    }else if(param1!= null && param2 == null){
        return fetch(`${url}${param1}`)
        .then((response) =>{
        return response.json();
        });
    }else {
        return fetch(`${url}${param1}/${param2}`)
        .then((response) =>{
        return response.json();
        });
    }
 }
});