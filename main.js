//Ejercicio 2
let a = 15;
let b = 10;
let c = a + b;
console.log('La suma es:',c);
//Ejercicio 3
let nombre = prompt('Ingresa tu nombre');
console.log("Hola, " + nombre + "!");
//Ejercicio 4
function mayor () {
  let a = 200;
  let b = 100;
  let c = 550;
  return Math.max(a,b,c);
}
mayor();
let resultadomayor = mayor();
console.log("El mayor de los tres números es:", resultadomayor);
//Ejercicio 5
function parimpar () {   
  let numeroIngresado = prompt("Ingresa un número");
  if (numeroIngresado % 2 === 0) {
    console.log('El ' +  numeroIngresado + ' , es par');
  }
  else {
    console.log('El ' + numeroIngresado + ' , es impar');
  }
}
parimpar();
//Ejercicio 6
function variables () {
  console. log("Operadores, Ejercicio 6");
  let variable = 10;
  while(variable > 0) {  
    console.log(variable);
    variable -= 1;    
  } 
  console.log(variable);
}
variables();
//Ejercicio 7
function mayor100 () {
  let numeroIngresado;
  do {
      numeroIngresado = prompt("Ingresa un número mayor a 100:");
  } 
  while (numeroIngresado <= 100);  
  console.log(`Ingresaste un número mayor a 100: ${numeroIngresado}`);
}
mayor100();
//Ejercicio 8
function par (numero) {
  let numeroIngresado = prompt("Ingresa un número y te diré si es par");
  if (numero % 2 === 0){
    return console.log("El numero " + numeroIngresado + " es par:", true);
  }else {
    return console.log("El numero " + numeroIngresado + " es par:", false);
  }
}
par();
//Ejercicio 9
function convertircelsiusfahrenheit () {
  let celsius = prompt("Ingresa grados Celsius y conviertelos a grados Fahrenheit")
  let C = celsius;
  let F = C * 1.8 + 32;
  console.log(C + "°C" + " equivale a "+ F + "°F" );
}
convertircelsiusfahrenheit();
//Ejercicio 10
function persona() {
  let persona = {
    nombre: 'Nicolas',
    edad: 20,
    ciudad: 'Mendoza', 
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
  };
  console.log('Propiedades iniciales:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);  
  persona.cambiarCiudad('Buenos Aires');
  console.log('Propiedades actualizadas:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
}
persona();
//Ejercicio 11
function antiguedad () {
  let libro = {
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J. K. Rowling',
    año: 1997, 
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        return (añoActual - this.año) > 10;
    }
  }; 
    console.log('Propiedades del libro:');
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año: ${libro.año}`);

    if (libro.esAntiguo()) {
      console.log(`El libro "${libro.titulo}" es antiguo:`, true);
  } else {
      console.log(`El libro "${libro.titulo}" es antiguo:`, false);
  }
}
antiguedad();
//Ejercicio 12
function arrays () {
  let NumerosOriginales = [1,2,3,4,5,6,7,8,9,10];
  let factor = 2
  let NumerosMultiplicados = NumerosOriginales.map(function(numero){
    return numero * factor;
  })

  console.log("Numeros Originales: " , NumerosOriginales);
  console.log("Numeros multiplicados por 2: ", NumerosMultiplicados);
}
arrays();
//Ejecicio 13
function arrays10par () {
  let pares = [];
  for(let i = 1; pares.length < 10 ; i++) {
      if (i % 2 === 0) { 
        pares.push(i);
      }
  }
console.log("Primeros 10 números pares: ", pares);
}
arrays10par();
//Ejercicio 14
function botontexto () {
  document.addEventListener('DOMContentLoaded', function() {
    const botonColor = document.getElementById('colorButton');   
    botonColor.addEventListener('click', function() {
        const parrafos = document.querySelectorAll('p');
        parrafos.forEach(parrafo => {    
            if (parrafo.style.color === 'blue') {
                parrafo.style.color = 'black';
            } else {
                parrafo.style.color = 'blue';
            }
        });
    });
  });
}
botontexto();
//Ejercicio 15
function ingresartexto () {
  document.addEventListener('DOMContentLoaded', function() {
    const botonAlerta = document.getElementById('alertButton');
    botonAlerta.addEventListener('click', function() {  
        const textoIngresado = document.getElementById('texto').value;             
        if (textoIngresado) {
            alert('Has ingresado: ' + textoIngresado);
        } else {
            alert('Por favor, ingresa un texto.');
        }
    });
  });
}
ingresartexto();
//Ejercicio 16
function clickelemento(){
  document.addEventListener('DOMContentLoaded', function() {
    var lista = document.getElementById('miLista');
    var itemslista = lista.getElementsByTagName('li');
    for (var i = 0; i < itemslista.length; i++) {
        itemslista[i].addEventListener('click', function() {
            console.log('Contenido del elemento:', this.textContent);
        });
    }
  });
}
clickelemento();
//Ejercicio 17
function campo(){
  document.addEventListener("DOMContentLoaded", () => {
    const campoTexto = document.getElementById('campoTexto');
    const deshabilitar = document.getElementById('deshabilitar');
    const habilitar = document.getElementById('habilitar');  
    deshabilitar.addEventListener('click', () => {
        campoTexto.disabled = true;
    });
    habilitar.addEventListener('click', () => {
        campoTexto.disabled = false;
    });
  });             
}
campo();
//Ejercicio 18
function guardarcorreo(){
  document.addEventListener("DOMContentLoaded", () => {
    const correoGuardadoDiv = document.getElementById('correoGuardado');  
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }  
    const formCorreo = document.getElementById('formCorreo');
    formCorreo.addEventListener('submit', (event) => {
        event.preventDefault();  
        const correo = document.getElementById('correo').value;  
        localStorage.setItem('correo', correo);
        mostrarCorreoGuardado(correo);
    }); 
    function mostrarCorreoGuardado(correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarCorreo">Eliminar Correo Guardado</button>
        `;
        document.getElementById('eliminarCorreo').addEventListener('click', () => {
            localStorage.removeItem('correo');
            correoGuardadoDiv.innerHTML = '';
        });
    }
  });
}
guardarcorreo();
