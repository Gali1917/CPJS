
function buttonCalcular(){
    const precio = parseFloat(document.getElementById("input-precio").value);
    const descuento = parseFloat(document.getElementById("input-descuento").value);
    const totalPagar = precioFinal(precio, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio final es: $" + totalPagar;
}

function precioFinal(precioNormal, descuento){
    var valorDescuento = descuento * precioNormal / 100;
    var valorFinal = precioNormal - valorDescuento;
    return valorFinal.toFixed(2);
}





