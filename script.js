function comprado() {
    var contador1 = document.getElementById("carro")
    var suma1 = parseInt(contador1.innerHTML)
    contador1.innerHTML = suma1+1
    alert("Haz adquirido el videojuego")
}
function alertwin(){
    alert("este juego es compatible con windows")
}
function alertaple(){
    alert("este juego es compatible con apple")
}
function alertlin(){
    alert("este juego es compatible con linux")
}

//para cambiar el euro a dolar//
document.getElementById("plata").addEventListener("change", function() {
    var select = document.getElementById("plata");
    var option = select.options[select.selectedIndex].value;

    if (option === "USD") {
        dolaar();
    } else {
        euuro();
    }
});
function dolaar() {
    var valor1 = document.getElementById("valor1"); 
    var valor2 = document.getElementById("valor2");
    var valor3 = document.getElementById("valor3");

    valor1.innerText = "$11,17";
    valor2.innerText = "$7,87";
    valor3.innerText = "$21,28";
}
function euuro() {
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var valor3 = document.getElementById("valor3");

    valor1.innerText = "€10.49";
    valor2.innerText = "€7.39";
    valor3.innerText = "€19.99";
}