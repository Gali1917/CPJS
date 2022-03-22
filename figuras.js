console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2.");
console.groupEnd();

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.");

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

console.group("Circulos");
const radioCirculo = 5;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro de circulo es: " + perimetroCirculo + "cm.");

const areaCirculo = radioCirculo * radioCirculo * pi;
console.log("El area del circulo es: " + areaCirculo + " cm^2");
console.groupEnd();