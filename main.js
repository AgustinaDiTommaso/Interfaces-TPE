// DATOS DE USUARIO
let users_type=["public", "user", "admin"];
let users = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "usuario" : "JuanPerez",
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


//CONTROL DE VISTAS

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
    console.log("El usuario logueado es un admin");
    hiddenAll();
    nav_admin.style.display="initial";
  }
  else if(userActual==users_type[1]){
    console.log("El usuario logueado es un usuario común");
    hiddenAll();
    nav_user.style.display="initial";
  }
  
  
}
//OBTIENE DATOS DEL FORM  PARA INICIAR SESION
function obtenerDatosForm(){
  let form= document.getElementById("formsesion");
  inputUser=form.elements["usuario"].value;
  inputPassword= form.elements["password"].value;
  console.log(inputUser +" : "+inputPassword);
  loginUsuario();
}

//VERIFICA QUE EXISTA UN USUARIO CON ESE NOMBRE Y CONTRASEÑA, Y GUARDA EL TIPO DE USUARIO. (NO MUESTRA MSJ ERROR POR AHORA)
function loginUsuario(){
  let usuarioEncontrado= null;
  //Si los datos del form no estan vacíos
  if(inputUser!=null && inputPassword!=null){
    console.log("estoy buscando el usuario en el arreglo json")
    //Busca si existe un usuario con ese nombre y contraseña, si lo encuentra retorna el tipo sino null
    usuarioEncontrado= users.find(function(user){
      if(user.usuario==inputUser && user.password== inputPassword){
        return user;
      }else{
        return null;
      }
    });
    //Si encontró el usuario y guardó el tipo
    if(usuarioEncontrado!=null){
      console.log("encontre el usuario en el arreglo json"+ usuarioEncontrado.tipo)
      //Almacena el tipo de usuario en la variable global userActual
      switch(usuarioEncontrado.tipo){
        case "user":
          
          userActual=users_type[1];
          break;
        case "admin":
          console.log(userActual)
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




