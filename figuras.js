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
    return baseTriangulo * alturaTriangulo / 2;
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

//conexion HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLadoTriangulo1");
    const inputLado2 = document.getElementById("InputLadoTriangulo2");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLado1 = parseFloat(inputLado1.value);
    const valueLado2 = parseFloat(inputLado2.value);
    const valueBase = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    alert(perimetro);
    
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueAltura = parseFloat(inputAltura.value);
    const valueBase = parseFloat(inputBase.value);
    const area = areaTriangulo(valueAltura, valueBase);

    alert(area);
}

function calcularCircunferenciaCirculo(){
    const radio = document.getElementById("InputRadioCirculo");
    const valueRadio = parseFloat(radio.value);
    const circunferencia = perimetroCirculo(valueRadio);

    alert(circunferencia);

}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputRadioCirculo");
    const valueRadio = parseFloat(radio.value);
    const area = areaCirculo(valueRadio);

    alert(area);
}

function calcularAlturaTrianguloIsosceles(a, b, c){
    var base = 0;
    var lado = 0;
    if(a == b){
        base = c;
        lado = a
    }
    else if(a == c){
        base = b;
        lado = c;
    }
    else if(b == c){
        base = a;
        lado = b;
    }
    else{
        alert("No es un triangulo Isosceles");
    }
    var h = Math.sqrt((lado * lado) - ((base * base) / 4));

    alert(h);
}