//let nombre = prompt('Buenas, buenas. Ingresa tu nombre, porfavor');

let nomberHeader = document.getElementById('headerDer');
//nomberHeader.innerHTML = '<h4>Hola '+nombre+'</h4>';
let btnSubmit=document.getElementById('sub'),
    btnRules=document.getElementById('rule');
const usuarios ='[{ "user": "alfredo2106","pass": "contrasena21","nombre": "Alfredo","apellido": "Cordova"},'+
                '{"user": "coderhouse","pass": "contrasena01","nombre": "Alejandro","apellido": "Masias"},'+
                '{"user": "invitado21","pass": "contrasena06","nombre": "Erik","apellido": "Mendoza"}]';

const obj = JSON.parse(usuarios);
let usuario = document.getElementById('username').value;



function Show(id)
{
    if(document.getElementById(id).style.display =='none')
    {
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    };

}

function Verify(){
    let usuario = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let aux=0;
    for (let i = 0; i < obj.length; i++) {
        if(obj[i].user==usuario){
            console.log('Lo encontre en'+ i);
            aux=1;
            if(obj[i].pass==password){
                console.log(obj[i].pass);
                alert('Bienvenido '+ obj[i].nombre+' '+obj[i].apellido);
                document.getElementById('authentication').action = "/main.html"
            }else{
                alert('Contrasena incorrecta');
            }
            
            break;
        }else{
            console.log('Este usuario no es');
        }
    }

    if(aux==0){
        alert("Usuario no encontrado");
    }
}


btnRules.onclick= () => {
    Show('rules');
}

btnSubmit.onclick=() => {
    Verify();
    
}