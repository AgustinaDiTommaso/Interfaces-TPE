let users_type=["public", "user", "admin"];
let users = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "password" : "1234",
      "materia": "Historia",
      "tipo": "usuario"
    },
    
    {
        "nombre": "Administrador",
        "apellido": "",
        "usuario" : "administrador",
        "password" :"1234",
        "materia": "",
        "tipo": "admin"
      }
  ];
let userActual= users_type[0];

let btnEndSesion= document.getElementById("btn-cerrarSesion");


let nav_public=document.getElementById("nav-public");
let nav_user=document.getElementById("nav-user");
let nav_admin=document.getElementById("nav-admin");
let nav_inicioSesion=document.getElementById("nav-inicioSesion");

let btnIniciarSesion= document.getElementById("btn-sesion");
btnIniciarSesion.addEventListener('click', function(e){
    nav_public.style.display="none";
    
   
    nav_inicioSesion.style.display="initial";
    btnIniciarSesion.style.visibility="hidden";

})





