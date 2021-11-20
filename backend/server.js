import express from 'express';
//Se importa la funcion de db.js que nos permite crear documentos
//Con esta linea de codigo tambien se importa el archivo db.js
//Que hace la conexion
import {crear_documentos} from "./db.js";
//Esto se hace para evitar poner la ruta raiz
//El la trae con path y luego se usa como variable
import path from 'path'
const app = express();
const dir_backend = path.resolve();
const dir_frontend = path.join(dir_backend, "../frontend");
console.log(dir_frontend);

app.listen('8000',function(peticion,respuesta){
    console.log("Servidor iniciado");
})

/*Conexion con el frontend */

//const raiz = "/Users/marlo/Desktop/CURSO DE PROGRAMACION UPB/CICLO 4/DESARROLLO DE APPS WEB/Proyecto_ApiRest";

app.use(express.static(dir_frontend));

app.get('/',function(peticion, respuesta){
    respuesta.sendFile(dir_frontend+"/formulario.html")
}) 
//Se hace la peticion al servidor y crea el registro en la base de datos
// con la funcion crear_documento() importada de db.js
app.get('/agregarUsuario/:nombre/:apellido/:telefono/:correo/:contrasena', function(peticion,respuesta)
{
    let nombre= peticion.params.nombre;
    let apellido= peticion.params.apellido;
    let telefono= peticion.params.telefono;
    let correo= peticion.params.correo;
    let contrasena= peticion.params.contrasena;

    console.log(nombre +" "+ apellido +" "+telefono+" "+correo+" "+contrasena);
    crear_documentos(nombre,apellido,telefono,correo,contrasena);
})


