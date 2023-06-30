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




// DISPLAY 
let nav= document.getElementById("nav");
let nav_public=document.getElementById("nav-public");
let nav_user=document.getElementById("nav-user");
let nav_admin=document.getElementById("nav-admin");
let nav_inicioSesion=document.getElementById("nav-inicioSesion");

let container_main= document.getElementById("container-main");
let container_secondary= document.getElementById("container-secondary")

//BOTONES
let btnIniciarSesion= document.getElementById("btn-sesion");
let btnEndSesion= document.getElementById("btn-cerrarSesion");
let btnMenu= document.getElementById("menu");


//CONTROL DE VISTAS

//- Eventos

btnIniciarSesion.addEventListener('click', function(e){
    hiddenAll();    
    nav_inicioSesion.style.display="initial";   
    container_secondary.classList.add("backgroundEscuelaImg");
    loginUsuario();

})
btnMenu.addEventListener('click', function(e){
  container_main.classList.toggle("desaparecer");

  btnMenu.classList.toggle("menu-oculto")  ;
  btnMenu.classList.toggle("menu-desplegado");
})



// FUNCION DE LOOP QUE CONTROLA SESION DE USUARIO
function controllerUsers(){
  
  if(userActual==users_type[2]){
    console.log("El usuario logueado es un admin");
    hiddenAll();
    nav_admin.style.display="initial";
    btnEndSesion.style.display="initial";
  }
  else if(userActual==users_type[1]){
    console.log("El usuario logueado es un usuario común");
    hiddenAll();
    nav_user.style.display="initial";
    btnEndSesion.style.display="initial";
  }else{
    hiddenAll();
    nav_public.style.display="initial";
    btnIniciarSesion.style.display="initial";
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
    //Si encontró el usuario
    if(usuarioEncontrado!=null){
      
      container_secondary.classList.remove("backgroundEscuelaImg");
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
      controllerUsers();
    }
  }
}

//OCULTA TODOS LOS DISPLAY
function hiddenAll(){
  nav_public.style.display="none";  
  nav_user.style.display="none" ;
  nav_admin.style.display="none";
  nav_inicioSesion.style.display="none";
  container_secondary

  btnEndSesion.style.display="none";
  btnIniciarSesion.style.display="none";
}




