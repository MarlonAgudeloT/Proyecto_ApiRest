import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/data_base',{})
.then(()=> console.log("conexion exitosa MongoDB"))
.catch((err)=> console.log(err));

const usuarios_esquema = mongoose.Schema({
    Nombre:String,
    Apellido:String,
    Telefono:Number,
    Correo:String,
    Contrasena:String
},{versionKey:false})

const usuarios_modelo = mongoose.model('users', usuarios_esquema);

// Funcion asincrona para guardar los datos en la base de datos
const crear_documentos = async (nombre, apellido, telefono, correo, contrasena) => {
    const documento = new usuarios_modelo ({
        Nombre:nombre,
        Apellido:apellido,
        Telefono:telefono,
        Correo:correo,
        Contrasena:contrasena
    })
    await documento.save();
}

let consultar_documentos = async () =>{
    let documentos = await usuarios_modelo.find();
    return documentos;
   // console.log(documentos);
}

export {crear_documentos,consultar_documentos}