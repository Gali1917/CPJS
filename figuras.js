console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
} 
console.log(perimetroCuadrado());    

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
areaCuadrado();
console.log(console.groupEnd());

console.group("Triangulos");


function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

console.log(perimetroTriangulo());

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return baseTriangulo * alturaTriangulo;
}

console.log(areaTriangulo());
console.groupEnd();

console.group("Circulos");


const pi = Math.PI;

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radio){
    diametro = diametroCirculo(radio)
    return diametro * pi;
}
console.log(perimetroCirculo());

function areaCirculo(radioCirculo){
    return radioCirculo * radioCirculo * pi;
}
console.log(areaCirculo());
console.groupEnd();