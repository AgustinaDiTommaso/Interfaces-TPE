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
let form = document.getElementById("formsesion");

let container_main = document.getElementById("container-main");
let container_secondary = document.getElementById("container-secondary");

let detalleLogo = document.getElementById("detalle-logo");
let detalleNombreEscuela = document.getElementById("detalle-nombreEscuela");

let noticia = document.getElementById("noticia")
let noticias_view = document.getElementById("noticias-View");
let historia = document.getElementById("historia");
let orientacion = document.getElementById("orientacion");
let equipo = document.getElementById("equipo");
let contacto = document.getElementById("contacto");

let noticiaVerMas1 = document.getElementById("noticiaVerMas1");

//BOTONES
let btnIniciarSesion = document.getElementById("btn-sesion");
let btnEndSesion = document.getElementById("btn-cerrarSesion");
let btnHome = document.getElementById("btn-home");
let btnMenu = document.getElementById("menu");
let btn_verMas = document.querySelectorAll("btn-verMas");

let btn_noticias = document.getElementById("btn-noticias");
let btn_contacto = document.getElementById("btn-contacto");
let btn_historia = document.getElementById("btn-historia");
let btn_orientacion = document.getElementById("btn-orientacion");
let btn_equipo = document.getElementById("btn-equipo");

let noticia1 = document.getElementById("noticia1");


//INPUT

let inputPassword = document.getElementById("password");
let inputUsuario = document.getElementById("usuario");

//CONTROL DE VISTAS

//- Eventos

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
  detalleLogo.classList.remove("flexRow");
  container_secondary.classList.remove("desaparecer");
  container_secondary.classList.add("backgroundEscuelaImg");


})
btnHome.addEventListener('click', function (e) {
  container_secondary.classList.remove("backgroundEscuelaImg");
  main();
})


noticia1.addEventListener('click', function (e) {
  hiddenAll();
  noticiaVerMas1.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

})

btnMenu.addEventListener('click', ocultarmenu);

function ocultarmenu() {
  container_main.classList.toggle("desaparecer");

  
  btnMenu.classList.toggle("menu-oculto");
  btnMenu.classList.toggle("menu-desplegado");

  detalleNombreEscuela.classList.toggle("colorAzul");

  container_secondary.classList.toggle("width70");
  container_secondary.classList.toggle("width100");

  if(!container_main.classList.contains("desaparecer")){
    
    nav_public.classList.remove("desaparecer");


  }
}


function main() {
  hiddenAll();
  controllerUsers();
}
// FUNCION QUE CONTROLA SESION DE USUARIO y LA VISTA
function controllerUsers() {

  if (userActual == users_type[2]) {
    
    hiddenAll();
    detalleLogo.classList.remove("desaparecer");
    detalleLogo.classList.add("flexRow");
    nav_admin.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnEndSesion.classList.remove("desaparecer");
  }
  else if (userActual == users_type[1]) {
    
    hiddenAll();
    detalleLogo.classList.remove("desaparecer");
    detalleLogo.classList.add("flexRow");
    nav_user.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnEndSesion.classList.remove("desaparecer");

  } else {
    hiddenAll();
    detalleLogo.classList.remove("flexRow");
    nav_public.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");
    btnIniciarSesion.classList.remove("desaparecer");
  }


}
//OBTIENE DATOS DEL FORM  PARA INICIAR SESION
function obtenerDatosForm() {

  inputUserValue = form.elements["usuario"].value;
  inputPasswordValue = form.elements["password"].value;
  
  loginUsuario();
}

//VERIFICA QUE EXISTA UN USUARIO CON ESE NOMBRE Y CONTRASEÑA, Y GUARDA EL TIPO DE USUARIO. (NO MUESTRA MSJ ERROR POR AHORA)
function loginUsuario() {
  let usuarioEncontrado = null;

  //Si los datos del form no estan vacíos
  if (inputUserValue != null && inputPasswordValue != null) {
    //Busca si existe un usuario con ese nombre y contraseña, si lo encuentra retorna el tipo sino null
    usuarioEncontrado = users.find(function (user) {
      if (user.usuario == inputUserValue && user.password == inputPasswordValue) {

        return user;

      } else {

        return null;

      }
    });

    if (usuarioEncontrado == null) {

      //me traigo el input y le agrego borde rojo  y contenido incorrecto
      let divAviso = document.createElement("div")
      divAviso.id = "avisoError";
      divAviso.innerHTML = "Acceso inválido. Por favor, inténtelo otra vez.";


      // Insertar el nuevo div antes del formulario
      form.insertAdjacentElement("beforebegin", divAviso);

      inputUsuario.value = "";
      inputPassword.value = "";



    } else if (usuarioEncontrado != null) {//Si encontró el usuario
      inputUsuario.value = "";
      inputPassword.value = "";
      inputPassword.placeholder = "";
      inputUsuario.placeholder = "";
      if (document.getElementById("avisoError")) {
        document.getElementById("avisoError").remove();
      }


      
      //Almacena el tipo de usuario en la variable global userActual
      switch (usuarioEncontrado.tipo) {
        case "user":

          userActual = users_type[1];

          break;
        case "admin":
          
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

  noticiaVerMas1.classList.add("desaparecer");

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
        
        noticia.classList.remove("desaparecer");
        noticia.classList.add("flexRow");
      } else {
        noticia.classList.add("desaparecer");
        noticia.classList.remove("flexRow");
      }
    });
  }
});

let mediaQuery = window.matchMedia("(max-width: 650px)");
mediaQuery.addEventListener('change', cambiodemediaquery);
if (mediaQuery.matches) {


  addeventosMediaQuery();
}else{
  
  addeventosMediaQueryMAX();
}


function cambiodemediaquery() {
  if (mediaQuery.matches) {

    addeventosMediaQuery();

    
  } else {
    removeEventosMediaQuery();
    addeventosMediaQueryMAX();

    

  }
}
function removeEventosMediaQuery(){
  btn_noticias.removeEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();     
    
    container_secondary.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");

  });
  btn_contacto.removeEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    
    container_secondary.classList.remove("desaparecer");
    contacto.classList.remove("desaparecer");

  });

  btn_historia.removeEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    historia.classList.remove("desaparecer");

  });

  btn_orientacion.removeEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    orientacion.classList.remove("desaparecer");

  });

  btn_equipo.removeEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    equipo.classList.remove("desaparecer");

  });

}
function addeventosMediaQueryMAX(){
  
btn_noticias.addEventListener("click", function (e) {
  hiddenAll();
  noticias_view.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

});
btn_contacto.addEventListener("click", function (e) {
  hiddenAll();
  contacto.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

});

btn_historia.addEventListener("click", function (e) {
  hiddenAll();
  historia.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

});

btn_orientacion.addEventListener("click", function (e) {
  hiddenAll();
  orientacion.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

});

btn_equipo.addEventListener("click", function (e) {
  hiddenAll();
  equipo.classList.remove("desaparecer");
  nav_public.classList.remove("desaparecer");
  btnIniciarSesion.classList.remove("desaparecer");

});

}
function addeventosMediaQuery(){
  btn_noticias.addEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();     
    
    container_secondary.classList.remove("desaparecer");
    noticias_view.classList.remove("desaparecer");

  });
  btn_contacto.addEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    
    container_secondary.classList.remove("desaparecer");
    contacto.classList.remove("desaparecer");

  });

  btn_historia.addEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    historia.classList.remove("desaparecer");

  });

  btn_orientacion.addEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    orientacion.classList.remove("desaparecer");

  });

  btn_equipo.addEventListener("click", function (e) {
    hiddenAll();
    ocultarmenu();
    container_secondary.classList.remove("desaparecer");
    equipo.classList.remove("desaparecer");

  });




}