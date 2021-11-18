import express from 'express';

const app = express();

app.listen('8000',function(peticion,respuesta){
    console.log("Servidor iniciado");
})

/*Conexion con el frontend */

const raiz = "/Users/marlo/Desktop/CURSO DE PROGRAMACION UPB/CICLO 4/DESARROLLO DE APPS WEB/Proyect_ApiRest";

app.use(express.static(raiz + "/frontend"));

app.get('/',function(peticion, respuesta){
    respuesta.sendFile(raiz + "/frontend/formulario.html")
}) 

app.get('/agregarUsuario', function(peticion,respuesta){
    console.log("Prueba de URL");
})