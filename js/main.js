// DATOS DE USUARIO
let users_type=["public", "user", "admin"];
let users = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "password" : "1234",
      "materia": "Historia",
      "tipo": "user"
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
let inputUser;
let inputPassword;

// LOOP PARA CONTROL DE USUARIO
let loopUser= setInterval(controllerUsers, 3000);

let btnEndSesion= document.getElementById("btn-cerrarSesion");

// DISPLAY 
let nav_public=document.getElementById("nav-public");
let nav_user=document.getElementById("nav-user");
let nav_admin=document.getElementById("nav-admin");
let nav_inicioSesion=document.getElementById("nav-inicioSesion");


//CONTROL DE SESION

let btnIniciarSesion= document.getElementById("btn-sesion");
btnIniciarSesion.addEventListener('click', function(e){
    hiddenAll();    
    nav_inicioSesion.style.display="initial";
    btnIniciarSesion.style.visibility="hidden";
    
    loginUsuario();

})


// FUNCION DE LOOP QUE CONTROLA SESION DE USUARIO
function controllerUsers(){
  if(userActual==users_type[2]){
    hiddenAll();
    nav_admin.style.display="initial";
  }
  else if(userActual==users_type[1]){
    hiddenAll();
    nav_user.style.display="initial";
  }
  
  
}
//OBTIENE DATOS DEL FORM  PARA INICIAR SESION
function obtenerDatosForm(){
  let form= document.getElementById("formsesion");
  inputUser=form.elements["usuario"];
  inputPassword= form.elements["password"];
}

//VERIFICA QUE EXISTA UN USUARIO CON ESE NOMBRE Y CONTRASEÑA, Y GUARDA EL TIPO DE USUARIO. (NO MUESTRA MSJ ERROR POR AHORA)
function loginUsuario(){
  if(inputUser!==null && inputPassword!==null){
    let usuarioEncontrado= users.find(function(user){
      if(user.usuario===inputUser && user.password=== inputPassword){
        return user.tipo;
      }else{
        return null;
      }
    });
    if(usuarioEncontrado!==null){
      switch(usuarioEncontrado){
        case "user":
          userActual=users_type[1];
          break;
        case "admin":
          userActual= users_type[2];
          break;
      }
    }
  }
}

//OCULTA TODOS LOS DISPLAY
function hiddenAll(){
  nav_public.style.display="none";  
  nav_user.style.display="none" ;
  nav_admin.style.display="none";
  nav_inicioSesion.style.display="none";
}




