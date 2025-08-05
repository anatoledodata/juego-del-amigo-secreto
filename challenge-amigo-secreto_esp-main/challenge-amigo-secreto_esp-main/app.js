let listaDeAmigos = [];

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value.trim().toLowerCase();
    console.log("Nombre ingresado:", amigos);

    if (amigos === ""){
        alert ('Por favor, inserte un nombre');
    } else {
        if (listaDeAmigos.includes(amigos)){
            console.log("Ya existe:", amigos);
            alert('Este nombre ya ha sido ingresado');
        } else {
            listaDeAmigos.push(amigos);
            console.log("Lista actualizada:", listaDeAmigos);
        }
        limpiarCaja();
    }
}


function limpiarCaja () {
    document.getElementById('amigo').value = ""; 
}