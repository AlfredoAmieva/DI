# Ejercicios de JavaScript
## Ejercicios de Declaración de Variables
```javascript
// Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
let nombre = "Ana";
console.log(nombre);

// Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
const PI = 3.1416;
// PI = 3.14; // Error: Assignment to constant variable

// Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
let edad;
console.log(edad); // undefined
edad = 25;
console.log(edad); // 25
```
## Ejercicios de Tipos de Datos

```javascript
// Crea variables de tipo string, number, boolean, null y undefined
let texto = "Hola Mundo";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido = undefined;

console.log(typeof texto);      // "string"
console.log(typeof numero);     // "number"
console.log(typeof booleano);   // "boolean"
console.log(typeof nulo);       // "object"
console.log(typeof indefinido); // "undefined"

// Convierte un número a cadena usando String() y una cadena a número usando Number()
let num = 123;
let strNum = String(num);
console.log(strNum, typeof strNum); // "123" string

let cadena = "456";
let numCadena = Number(cadena);
console.log(numCadena, typeof numCadena); // 456 number
```
## Ejercicios de Objetos
```javascript
// Crea un objeto persona con propiedades
let persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid"
};

// Accede a las propiedades usando dot notation y bracket notation
console.log(persona.nombre);    // "Carlos"
console.log(persona["edad"]);   // 30

// Añade una nueva propiedad profesion
persona.profesion = "Desarrollador";
console.log(persona);

// Usa desestructuración para extraer nombre y edad
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona); // "Carlos"
console.log(edadPersona);   // 30
```
## Ejercicios de Funciones

```javascript
// Función saludar
function saludar(nombre) {
  return "Hola, " + nombre;
}
console.log(saludar("María")); // "Hola, María"

// Función sumar
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3)); // 8

// Función flecha que multiplique
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20

// Función esMayorDeEdad
function esMayorDeEdad(edad) {
  return edad >= 18;
}
console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false
```
## Ejercicios de Arrays y Métodos Básicos

```javascript
// Declara un array con nombres
let nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofia"];

// Añade un nombre al final
nombres.push("Carlos");
console.log(nombres); // ["Ana", "Luis", "Marta", "Pedro", "Sofia", "Carlos"]

// Elimina el primero
nombres.shift();
console.log(nombres); // ["Luis", "Marta", "Pedro", "Sofia", "Carlos"]

// Busca si existe un nombre
console.log(nombres.includes("Marta")); // true
console.log(nombres.includes("Juan"));  // false

// Ordena arrays numéricos
let numeros = [4, 1, 9, 3, 7];
numeros.sort((a, b) => a - b); // ascendente
console.log(numeros); // [1, 3, 4, 7, 9]

numeros.sort((a, b) => b - a); // descendente
console.log(numeros); // [9, 7, 4, 3, 1]
```

## Ejercicios de Desestructuración de Arrays

```javascript
// Dado el array de frutas
let frutas = ["manzana", "pera", "plátano", "naranja"];

// Extrae los dos primeros
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2); // "manzana" "pera"

// Usa el operador rest para el resto
let [primera, segunda, ...restoFrutas] = frutas;
console.log(restoFrutas); // ["plátano", "naranja"]

// Intercambia valores
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log(a, b); // 200 100

// Extrae el color azul del array anidado
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [, [ , azul]] = colores;
console.log(azul); // "azul"
```
## Ejercicios de Recorrido de Arrays con For

```javascript
// Array del 1 al 5
let numeros = [1, 2, 3, 4, 5];

// For clásico
console.log("For clásico:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// For...of
console.log("For...of:");
for (let num of numeros) {
  console.log(num);
}

// For...in
console.log("For...in:");
for (let i in numeros) {
  console.log(`Índice ${i}: Valor ${numeros[i]}`);
}

// Recorre array de tecnologías
let tecnologias = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < tecnologias.length; i++) {
  console.log(`Posición ${i}: Valor ${tecnologias[i]}`);
}

// Recorre array al revés
console.log("Array al revés:");
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
```
## Ejercicios de forEach, filter y map

```javascript
// forEach con saludos
let nombresArray = ["Ana", "Luis", "Marta", "Pedro"];
nombresArray.forEach(nombre => {
  console.log(`¡Hola, ${nombre}!`);
});

// forEach con números
let numerosArray = [2, 4, 6, 8];
numerosArray.forEach(num => {
  console.log(num * 2);
});

// filter números mayores que 10
let numerosGrandes = [5, 12, 8, 130, 44];
let mayoresQue10 = numerosGrandes.filter(n => n > 10);
console.log(mayoresQue10); // [12, 130, 44]

// filter nombres que empiezan por A
let nombresConA = ["Ana", "Alberto", "Bea", "Carlos"];
let empiezanConA = nombresConA.filter(nombre => nombre.startsWith("A"));
console.log(empiezanConA); // ["Ana", "Alberto"]

// filter mayores de edad
let edades = [15, 18, 21, 12, 30];
let mayoresEdad = edades.filter(edad => edad >= 18);
console.log(mayoresEdad); // [18, 21, 30]

// map para cuadrados
let numerosCuadrados = [1, 2, 3, 4, 5];
let cuadrados = numerosCuadrados.map(n => n * n);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// map para precios con IVA
let precios = [10, 20, 30];
let preciosConIVA = precios.map(precio => precio * 1.21);
console.log(preciosConIVA); // [12.1, 24.2, 36.3]

// map para mayúsculas
let palabras = ["html", "css", "javascript"];
let mayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log(mayusculas); // ["HTML", "CSS", "JAVASCRIPT"]

// filter + map combinados
let numerosCombinados = [3, 8, 12, 5, 7, 20];
let paresPor10 = numerosCombinados
  .filter(n => n % 2 === 0)
  .map(n => n * 10);
console.log(paresPor10); // [80, 120, 200]

// Array de objetos con filter y map
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
let nombresAprobados = aprobados.map(alumno => alumno.nombre);

nombresAprobados.forEach(nombre => {
  console.log(`Alumno aprobado: ${nombre}`);
});
```
## Ejercicios de Módulos
    1. Exportar e importar constantes
```javascript
// constantes.js
export const APP_NAME = "Mi Aplicación";
export const VERSION = "1.0.0";
export const AUTHOR = "Juan Pérez";

// app.js
import { APP_NAME, VERSION, AUTHOR } from './constantes.js';
console.log(`${APP_NAME} v${VERSION} by ${AUTHOR}`);
```
    2. Funciones matemáticas
```javascript
// operaciones.js
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  return a / b;
}

// main.js
import { sumar, restar, multiplicar, dividir } from './operaciones.js';
console.log(sumar(5, 3));       // 8
console.log(restar(10, 4));     // 6
console.log(multiplicar(2, 6)); // 12
console.log(dividir(15, 3));    // 5
```
    3. Exportación por defecto
```javascript
// saludos.js
export default function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

// index.js
import saludar from './saludos.js';
console.log(saludar("María")); // "¡Hola, María!"
```
    4. Combinar exportaciones
```javascript
// utils.js
export const APP_NAME = "MiApp";

export function mayusculas(texto) {
  return texto.toUpperCase();
}

export default function primero(array) {
  return array[0];
}

// app.js
import primero, { APP_NAME, mayusculas } from './utils.js';
console.log(APP_NAME);                     // "MiApp"
console.log(mayusculas("hola"));          // "HOLA"
console.log(primero(["a", "b", "c"]));    // "a"
```
    5. Importar con alias
```javascript
// matematicas.js
export function areaCirculo(radio) {
  return Math.PI * radio * radio;
}

export function areaCuadrado(lado) {
  return lado * lado;
}

// main.js
import { areaCirculo as circulo, areaCuadrado as cuadrado } from './matematicas.js';
console.log(circulo(5));   // 78.53981633974483
console.log(cuadrado(4));  // 16
```
    6. Importar todo con * as
```javascript
// personas.js
export const persona1 = "Ana";
export const persona2 = "Luis";
export const persona3 = "Marta";

// main.js
import * as nombres from './personas.js';
console.log(nombres.persona1); // "Ana"
console.log(nombres.persona2); // "Luis"
console.log(nombres.persona3); // "Marta"
```
## Ejercicios de Fetch, Promesas y Async/Await
    1. Filtra y transforma posts
```javascript
async function getUppercaseTitlesByUser(userId = 1) {
  try {
    // 1) fetch posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // 2) filter por userId
    const userPosts = posts.filter(post => post.userId === userId);
    
    // 3) map a títulos en mayúsculas
    const uppercaseTitles = userPosts.map(post => post.title.toUpperCase());
    
    return uppercaseTitles;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Uso
getUppercaseTitlesByUser(1).then(titles => {
  console.log(titles);
});
```
    2. Suma de precios (reduce)
```javascript
async function totalElectronics() {
  try {
    // GET productos
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    
    // filter por category === 'electronics'
    const electronics = products.filter(product => 
      product.category === 'electronics'
    );
    
    // reduce sumando price
    const total = electronics.reduce((sum, product) => 
      sum + product.price, 0
    );
    
    return total;
  } catch (error) {
    console.error('Error:', error);
    return 0;
  }
}

// Uso
totalElectronics().then(total => {
  console.log(`Total electrónicos: $${total.toFixed(2)}`);
});
```
    3. Combinación con Promise.all
```javascript
async function usersWithPostCount() {
  try {
    // Promise.all para usuarios y posts
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);
    
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    
    // Para cada usuario, cuenta cuántos posts tiene
    const usersWithCounts = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id);
      return {
        userName: user.name,
        postsCount: userPosts.length
      };
    });
    
    // Ordena por postsCount descendente
    return usersWithCounts.sort((a, b) => b.postsCount - a.postsCount);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Uso
usersWithPostCount().then(result => {
  console.log(result);
});
```
    4. Pipeline: buscar, filtrar, normalizar, ordenar
```javascript
async function cleanComments() {
  try {
    // GET /comments
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    
    // filter body includes 'qui' (case-insensitive)
    const filteredComments = comments.filter(comment => 
      comment.body.toLowerCase().includes('qui')
    );
    
    // map: email a minúsculas y crear nuevo objeto
    const normalizedComments = filteredComments.map(comment => ({
      ...comment,
      email: comment.email.toLowerCase()
    }));
    
    // sort por postId, luego email
    const sortedComments = normalizedComments.sort((a, b) => {
      if (a.postId === b.postId) {
        return a.email.localeCompare(b.email);
      }
      return a.postId - b.postId;
    });
    
    return sortedComments;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Uso
cleanComments().then(comments => {
  console.log(comments);
});
```