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
            actualizarLista()
            console.log("Lista actualizada:", listaDeAmigos);
        }
        limpiarCaja();
    }
}


function limpiarCaja () {
    document.getElementById('amigo').value = ""; 
}

function actualizarLista() {
    let listaEnPantalla = document.getElementById('listaAmigos');
    listaEnPantalla.innerHTML = ''; 

    for(let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaDeAmigos[i]; 
        listaEnPantalla.appendChild(li);
    }
}