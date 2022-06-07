// Object literal enhancement

const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandian']

//forma anterior
//const metalica ={
//    banda : banda,
//    genero: genero,
//    canciones: canciones
// }

// forma nueva
const metallica = { banda, genero, canciones }

console.log(metallica)
