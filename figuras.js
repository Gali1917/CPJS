
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
} 

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return baseTriangulo * alturaTriangulo / 2;
}

const pi = Math.PI;

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radio){
    diametro = diametroCirculo(radio)
    return diametro * pi;
}

function areaCirculo(radioCirculo){
    return radioCirculo * radioCirculo * pi;
}

//conexion HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const resultCuadrado = document.getElementById("ResultCuadrado");
    resultCuadrado.innerText = "El Perimetro del cuadrado es: " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const resultCuadrado = document.getElementById("ResultCuadrado");
    resultCuadrado.innerText = "El Area del cuadrado es: " + area;

}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLadoTriangulo1");
    const inputLado2 = document.getElementById("InputLadoTriangulo2");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueLado1 = parseFloat(inputLado1.value);
    const valueLado2 = parseFloat(inputLado2.value);
    const valueBase = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    const resultTriangulo = document.getElementById("ResultTriangulo");
    resultTriangulo.innerText = "El Perimetro del Triangulo es: " + perimetro;
}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueAltura = parseFloat(inputAltura.value);
    const valueBase = parseFloat(inputBase.value);
    const area = areaTriangulo(valueAltura, valueBase);

    const resultTriangulo = document.getElementById("ResultTriangulo");
    resultTriangulo.innerText = "El Area del Triangulo es: " + area;
}

function calcularCircunferenciaCirculo(){
    const radio = document.getElementById("InputRadioCirculo");
    const valueRadio = parseFloat(radio.value);
    const circunferencia = perimetroCirculo(valueRadio);

    const resultCirculo = document.getElementById("ResultCirculo");
    resultCirculo.innerText = "La Circunferencia del Circulo es: " + circunferencia;

}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputRadioCirculo");
    const valueRadio = parseFloat(radio.value);
    const area = areaCirculo(valueRadio);

    const resultCirculo = document.getElementById("ResultCirculo");
    resultCirculo.innerText = "El Area del Circulo es: " + area;
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