let listaDeAmigos = [];

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value.trim().toLowerCase();

    if (amigos === ""){
        alert ('Por favor, inserte un nombre');
    } else {
        if (listaDeAmigos.includes(amigos)){
            alert('Este nombre ya ha sido ingresado');
        } else {
            listaDeAmigos.push(amigos);
            actualizarLista()
        }
        limpiarSorteo(); 
        limpiarCaja();
    }
}

function limpiarCaja () {
    document.getElementById('amigo').value = ""; 
}

function actualizarLista() {
    let listaEnPantalla = document.getElementById('listaAmigos');
    limpiarLista(); 

    for(let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaDeAmigos[i]; 
        listaEnPantalla.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()* listaDeAmigos.length); 
    const nombreSorteado = listaDeAmigos[indiceAleatorio]; 

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` El nombre sorteado es: ${nombreSorteado}`; 

    condicionesIniciales();
}

function limpiarLista() {
    let listaEnPantalla = document.getElementById('listaAmigos');
    listaEnPantalla.innerHTML = ''; 
}

function limpiarSorteo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
}

function condicionesIniciales() {
    limpiarCaja(); 
    limpiarLista(); 
    listaDeAmigos.length = 0; 
}

condicionesIniciales(); 