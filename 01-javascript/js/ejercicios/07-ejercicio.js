let persona = {
    nombre : "Sandalio",
    edad : 33,
    ciudad : "Uviéu"
};
console.log("El nombre de la persona es",persona.nombre)
console.log("Su edad es de "+persona.edad)
console.log("Vive en la ciudad de"+persona.ciudad)

console.log("El nombre de la persona es",persona["nombre"])
console.log("Su edad es de "+persona["edad"])
console.log("Vive en la ciudad de "+persona["ciudad"])