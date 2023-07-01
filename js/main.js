// DATOS DE USUARIO
let users_type = ["public", "user", "admin"];
let users = [
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "usuario": "JuanPerez",
    "password": "1234",
    "materia": "Historia",
    "tipo": "user"
  },

  {
    "nombre": "Administrador",
    "apellido": "",
    "usuario": "administrador",
    "password": "1234",
    "materia": "",
    "tipo": "admin"
  }
];
let userActual = users_type[0];
let inputUserValue;
let inputPasswordValue;




// DISPLAY 
let nav = document.getElementById("nav");
let nav_public = document.getElementById("nav-public");
let nav_user = document.getElementById("nav-user");
let nav_admin = document.getElementById("nav-admin");
let nav_inicioSesion = document.getElementById("nav-inicioSesion");

let container_main = document.getElementById("container-main");
let container_secondary = document.getElementById("container-secondary");

let detalleLogo= document.getElementById("detalle-logo");
let detalleNombreEscuela=document.getElementById("detalle-nombreEscuela");

let noticia = document.getElementById("noticia")
let noticias_view = document.getElementById("noticias-View");
let historia = document.getElementById("historia");
let orientacion= document.getElementById("orientacion");
let equipo= document.getElementById("equipo");
let contacto= document.getElementById("contacto");

//BOTONES
let btnIniciarSesion = document.getElementById("btn-sesion");
let btnEndSesion = document.getElementById("btn-cerrarSesion");
let btnHome = document.getElementById("btn-home");
let btnMenu = document.getElementById("menu");
let btn_verMas = document.querySelectorAll("btn-verMas");

let btn_noticias = document.getElementById("btn-noticias");
let btn_contacto= document.getElementById("btn-contacto");
let btn_historia= document.getElementById("btn-historia");
let btn_orientacion= document.getElementById("btn-orientacion");
let btn_equipo= document.getElementById("btn-equipo");


//INPUT

let inputPassword= document.getElementById("password");
let inputUsuario= document.getElementById("usuario");

//CONTROL DE VISTAS

//- Eventos
btn_noticias.addEventListener("click", function(e){
  hiddenAll();
  noticias_view.classList.remove("desaparecer");  
  nav_public.classList.remove("desaparecer");   
  btnIniciarSesion.classList.remove("desaparecer");
  
});
btn_contacto.addEventListener("click", function(e){
  hiddenAll();
  contacto.classList.remove("desaparecer");   
  nav_public.classList.remove("desaparecer");   
  btnIniciarSesion.classList.remove("desaparecer");
  
});

btn_historia.addEventListener("click", function(e){
  hiddenAll();
  historia.classList.remove("desaparecer");   
  nav_public.classList.remove("desaparecer");   
  btnIniciarSesion.classList.remove("desaparecer");
  
});

btn_orientacion.addEventListener("click", function(e){
  hiddenAll();
  orientacion.classList.remove("desaparecer");   
  nav_public.classList.remove("desaparecer");   
  btnIniciarSesion.classList.remove("desaparecer");
  
}); 

btn_equipo.addEventListener("click", function(e){
  hiddenAll();
  equipo.classList.remove("desaparecer");   
  nav_public.classList.remove("desaparecer");   
  btnIniciarSesion.classList.remove("desaparecer");
  
});


btnIniciarSesion.addEventListener('click', function (e) {
  hiddenAll();
  nav_inicioSesion.classList.remove("desaparecer");
  btnHome.classList.remove("desaparecer");
  container_secondary.classList.remove("desaparecer");
  container_secondary.classList.add("backgroundEscuelaImg");



})
btnEndSesion.addEventListener('click', function (e) {
  userActual = users_type[0];
  hiddenAll();
  nav_inicioSesion.classList.remove("desaparecer");
  btnHome.classList.remove("desaparecer");
  container_secondary.classList.remove("desaparecer");
  container_secondary.classList.add("backgroundEscuelaImg");


})
btnHome.addEventListener('click', function (e) {
  container_secondary.classList.remove("backgroundEscuelaImg");
  main();
})

btnMenu.addEventListener('click', function (e) {
  container_main.classList.toggle("desaparecer");

  btnMenu.classList.toggle("menu-oculto");
  btnMenu.classList.toggle("menu-desplegado");

  detalleNombreEscuela.classList.toggle("colorAzul");
  
  container_secondary.classList.toggle("width70");
  container_secondary.classList.toggle("width100");
})


// Agrega un event listener para el evento 'keydown'
inputPassword.addEventListener('keydown', function(e) {
  // Verifica si el elemento tiene la clase 'bordeRojo'
  if (inputPassword.classList.contains('bordeRojo')) {
    // Remueve la clase 'bordeRojo' del elemento
    inputPassword.classList.remove('bordeRojo');
  }
});
inputUsuario.addEventListener('keydown', function(e) {
  // Verifica si el elemento tiene la clase 'bordeRojo'
  if (inputUsuario.classList.contains('bordeRojo')) {
    // Remueve la clase 'bordeRojo' del elemento
    inputUsuario.classList.remove('bordeRojo');
  }
});


function main() {
  hiddenAll();
  controllerUsers();
}
// FUNCION QUE CONTROLA SESION DE USUARIO y LA VISTA
function controllerUsers() {

  if (userActual == users_type[2]) {
    console.log("El usuario logueado es un admin");
    hiddenAll();
    detalleLogo.classList.remove("desaparecer");
    detalleLogo.classList.add("flexRow");
    nav_admin.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnEndSesion.classList.remove("desaparecer");
  }
  else if (userActual == users_type[1]) {
    console.log("El usuario logueado es un usuario común");
    hiddenAll();
    detalleLogo.classList.remove("desaparecer");
    detalleLogo.classList.add("flexRow");
    nav_user.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnEndSesion.classList.remove("desaparecer");

  } else {
    hiddenAll();
    nav_public.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnIniciarSesion.classList.remove("desaparecer");
  }


}
//OBTIENE DATOS DEL FORM  PARA INICIAR SESION
function obtenerDatosForm() {
  let form = document.getElementById("formsesion");
  inputUserValue = form.elements["usuario"].value;
  inputPasswordValue = form.elements["password"].value;
  console.log(inputUserValue + " : " + inputPasswordValue);
  loginUsuario();
}

//VERIFICA QUE EXISTA UN USUARIO CON ESE NOMBRE Y CONTRASEÑA, Y GUARDA EL TIPO DE USUARIO. (NO MUESTRA MSJ ERROR POR AHORA)
function loginUsuario() {
  let usuarioEncontrado = null;
  let error=null;
  //Si los datos del form no estan vacíos
  if (inputUserValue != null && inputPasswordValue != null) {
    console.log("estoy buscando el usuario en el arreglo json")
    //Busca si existe un usuario con ese nombre y contraseña, si lo encuentra retorna el tipo sino null
    usuarioEncontrado = users.find(function (user) {
      if (user.usuario == inputUserValue) {
        if (user.password == inputPasswordValue) {
          error=null;
          return user;
        }
        else {
          
          error = inputPasswordValue;
          return null;
        }
      } else {
        error = inputUserValue;
        return null;

      }
    });
    console.log(error);
    if (error == inputUserValue) {

      //me traigo el input y le agrego borde rojo  y contenido incorrecto
      console.log("Error de usuario");
      
      inputUsuario.classList.add("bordeRojo");
      inputUsuario.value="";
      inputUsuario.placeholder= "incorrecto";

    } else if (error == inputPasswordValue) {

      console.log("Error de contraseña");
      
      inputPassword.classList.add("bordeRojo");
      inputPassword.value="";
      inputPassword.placeholder= "incorrecto";

    } else if (usuarioEncontrado != null && error==null) {//Si encontró el usuario
      inputUsuario.value="";
      inputPassword.value="";
      inputUsuario.classList.remove("bordeRojo");
      inputPassword.classList.remove("bordeRojo");
      inputPassword.placeholder= "";
      inputUsuario.placeholder= "";


      console.log("encontre el usuario en el arreglo json" + usuarioEncontrado.tipo)
      //Almacena el tipo de usuario en la variable global userActual
      switch (usuarioEncontrado.tipo) {
        case "user":

          userActual = users_type[1];

          break;
        case "admin":
          console.log(userActual)
          userActual = users_type[2];
          break;
      }
      container_secondary.classList.remove("backgroundEscuelaImg");
      controllerUsers();
    }


  }
}



//OCULTA TODOS LOS DISPLAY
function hiddenAll() {
  nav_public.classList.add("desaparecer");
  nav_user.classList.add("desaparecer");
  nav_admin.classList.add("desaparecer");
  nav_inicioSesion.classList.add("desaparecer");
  noticias_view.classList.add("desaparecer");
  detalleLogo.classList.add("desaparecer");

  
  historia.classList.add("desaparecer");
  orientacion.classList.add("desaparecer");
  equipo.classList.add("desaparecer");
  contacto.classList.add("desaparecer");

  btnEndSesion.classList.add("desaparecer");
  btnIniciarSesion.classList.add("desaparecer");
  btnHome.classList.add("desaparecer");
}




//manejo del search
document.addEventListener('keyup', e => {
  if (e.target.matches('#buscador')) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.noticia').forEach(noticia => {
      if (noticia.querySelector('.titulo-noticia').textContent.toLowerCase().includes(searchTerm)) {
        console.log("Encontre alguna noticia" + noticia);
        noticia.classList.remove("desaparecer");
        noticia.classList.add("flexRow");
      } else {
        noticia.classList.add("desaparecer");
        noticia.classList.remove("flexRow");
      }
    });
  }
});

