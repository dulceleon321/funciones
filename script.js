function calcularPromedio() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const num3 = parseFloat(document.getElementById('numero3').value);
    const num4 = parseFloat(document.getElementById('numero4').value);
    const num5 = parseFloat(document.getElementById('numero5').value);

    const promedio = calcularMedia(num1, num2, num3, num4, num5);

    document.getElementById('resultado').innerText = 'El promedio es: ' + promedio.toFixed(2);
}

function calcularMedia(...numeros) {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}
