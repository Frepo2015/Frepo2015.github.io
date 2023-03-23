//let nombre = prompt('Buenas, buenas. Ingresa tu nombre, porfavor');
let indice;
let nomberHeader = document.getElementById('headerDer');
//nomberHeader.innerHTML = '<h4>Hola '+nombre+'</h4>';
let btnSubmit = document.getElementById('sub'),
    btnRules = document.getElementById('rule');
const usuarios = '[{ "user": "alfredo2106","pass": "contrasena21","nombre": "Alfredo","apellido": "Cordova"},' +
    '{"user": "coderhouse","pass": "contrasena01","nombre": "Alejandro","apellido": "Masias"},' +
    '{"user": "invitado21","pass": "contrasena06","nombre": "Erik","apellido": "Mendoza"}]';
    
const obj = JSON.parse(usuarios);
let sesion;
document.getElementById("sesion").hidden = true;
document.getElementById("formulario").hidden = false;
function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    };

}


function Verify() {
    let usuario = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let aux = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].user == usuario) {
            console.log('Lo encontre en' + i);
            aux = 1;
            if (obj[i].pass == password) {
                console.log(obj[i].pass);
                alert('Bienvenido ' + obj[i].nombre + ' ' + obj[i].apellido);
                let aux2 = i;
                document.getElementById("formulario").hidden = true;
                document.getElementById("sesion").hidden = false;
                return aux2;
            } else {
                alert('Contrasena incorrecta');
            }

            break;
        } else {
            console.log('Este usuario no es');
        }
    }

    if (aux == 0) {
        alert("Usuario no encontrado");
    }
}
    document.querySelector('form').addEventListener('submit', e=>{
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target));
        sesion = data;
        //console.log(data);
        console.log(sesion.username);
        Verify();

        let info = document.getElementById('navbar');
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].user == sesion.username) {
              info.innerHTML = "<h3>"+ obj[i].nombre+" "+obj[i].apellido+"<br>Usuario: "+obj[i].user+"</h3>";
            } else {
              
            }
        }
    });





