var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexcelular= /^\d{10}$/;


var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByClassName("MensajeNombre")[0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre=document.getElementsByClassName("circleChekNombre")[0];

var celular=document.getElementById("celular");
var mensajeCelular=document.getElementsByClassName("MensajeCelular")[0];
var circleCrossCelular=document.getElementsByClassName("circleCrossCelular")[0];
var circleCheckCeluar=document.getElementsByClassName("circleChekCelular")[0];


var correo=document.getElementById("correo");
var mensajeCorreo=document.getElementsByClassName("MensajeCorreo")[0];
var circleCrossCorreo=document.getElementsByClassName("circleCrossCorreo")[0];
var circleCheckCorreo=document.getElementsByClassName("circleChekCorreo")[0];


nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        enviarDatos++;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        nombre.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
       
  } 
  else{
    console.log("else");
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("correcto");
    nombre.classList.remove("error");
    circleCrossNombre.classList.add("ocultar");
    circleCheckNombre.classList.remove("ocultar");
  }

});

celular.addEventListener("blur", ()=>{
    if (!regexcelular.test(celular.value)) {
         enviarDatos++;
        mensajeCelular.classList.remove("ocultar");
        celular.classList.add("error");
        celular.classList.remove("correcto");
        circleCrossCelular.classList.remove("ocultar");
        circleCheckCeluar.classList.add("ocultar");
       
  } 
  else{
    console.log("else");
    mensajeCelular.classList.add("ocultar");
    celular.classList.add("correcto");
    celular.classList.remove("error");
    circleCrossCelular.classList.add("ocultar");
    circleCheckCeluar.classList.remove("ocultar");
  }

});

celular.addEventListener("blur", ()=>{
    if (!regexcelular.test(celular.value)) {
        enviarDatos++;
        mensajeCelular.classList.remove("ocultar");
        celular.classList.add("error");
        celular.classList.remove("correcto");
        circleCrossCelular.classList.remove("ocultar");
        circleCheckCeluar.classList.add("ocultar");
       
  } 
  else{
    console.log("else");
    mensajeCorreo.classList.add("ocultar");
    correo.classList.add("correcto");
    correo.classList.remove("error");
    circleCrossCorreo.classList.add("ocultar");
    circleCheckCorreo.classList.remove("ocultar");
  }

});

var formulario=document.getElementById("formulario");
formulario.addEventListener("submit",()=>

)