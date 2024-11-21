function obtenerUsuarioDeLoginForm(){
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        if (username=== 'mel' && password==='123') {
            var url = "admin.html?usuario=" + username;
            window.location.href = url;
        } else {
            alert("Usuario incorrecto");
        }
    });
}

function bienvenidaUsuario(){
    // Obtener el valor del parámetro 'usuario' de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('usuario');

    // Utilizar el valor del parámetro 'usuario' como desees
    document.addEventListener('DOMContentLoaded', function() {
        if (username) {
            document.getElementById('mensaje-bienvenida').textContent = '¡Bienvenido, ' + username + '!';
        } else {
            document.getElementById('mensaje-bienvenida').textContent = 'Usuario no especificado';
        }
    });
}

function enviarDatosFormulario(){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var paisSeleccionado = document.getElementsByClassName("form-select").text;
    var email = document.getElementById("email").value;
    if(nombre === ""){
        alert("Ingrese un nombre por favor.");
    }
    else if(email === ""){
        alert("Ingrese un email por favor");
    }
    else{
        alert("Datos Enviados Correctamente!")
        window.location.href = "index.html";
    }
}