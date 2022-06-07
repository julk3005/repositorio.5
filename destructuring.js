//Destructuring de objetos
const aprendiendoJS = {
 version: {
  nueva: 'Es6+',
  anterior: 'ES5',
 },
 frameworks: ['React', 'VueJs', 'AngularJs'],
}

// Destructuring es extraer valores de un objeto

//console.log(aprendiendoJS);

//version anterior
//let version = aprendiendoJS.version.nueva;
//let framework = aprendiendoJS.frameworks[1];

// Destructuring forma nueva
let { anterior } = aprendiendoJS.version
console.log(anterior)
