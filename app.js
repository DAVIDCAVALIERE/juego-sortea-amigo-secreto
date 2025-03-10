let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco al inicio y al final
    
    // Verificar que el campo no esté vacío y que no contenga números
    if(nombre === '' || /\d/.test(nombre)) {
        alert('Debe ingresar un nombre válido (solo letras)');
        return;
    }
    
    amigos.push(nombre);
    // console.log(amigos);
    limpiarCampo();
    mostrarAmigos();
};


function limpiarCampo() {
  document.getElementById('amigo').value = "";
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista
    amigos.forEach((amigo) => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`; // Agregar un elemento a la lista
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Debe agregar amigos para sortear');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}