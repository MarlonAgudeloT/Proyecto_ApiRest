document.getElementById("registrar").addEventListener('click',registrar_documento)
document.getElementById("consultar").addEventListener('click',consultar_documentos)


function registrar_documento()
{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    window.location.href = `agregarUsuario/${nombre}/${apellido}/${telefono}/${correo}/${contrasena}`
}

function consultar_documentos(){
    window.location.href = "consultarDocumentos/"
}