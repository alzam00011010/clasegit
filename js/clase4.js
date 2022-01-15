var nombre = 'Alfonso', edad = 28

function imprimirEdad() {
    console.log (nombre+' tiene '+edad+' anios')
}
imprimirEdad()

function imprimirEdadNew() {
    console.log (`${nombre} tien ${edad} anios` )
}
imprimirEdadNew()

function imprimirEdadNewPara(n,e) {
    console.log (`${n} tien ${e} anios` )
}
imprimirEdadNewPara(nombre,edad)