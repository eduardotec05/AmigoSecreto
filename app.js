// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  resultado.innerHTML = "";
  document.getElementById("amigo").value = "";
  if (nombre.trim() === "") {
    alert("Debes ingresar un nombre");
  } else {
    amigo.push(nombre);
    document.getElementById("amigo").value = "";
  }
  mostrarAmigos();
}

function mostrarAmigos() {
  document.getElementById("listaAmigos").innerHTML = "";
  for (let i = 0; i < amigo.length; i++) {
    let li = document.createElement("li");
    li.innerText = amigo[i];
    document.getElementById("listaAmigos").appendChild(li);
  }
}

function sortearAmigo() {
  if (amigo.length === 0) {
    alert("Debes ingresar al menos un amigo");
    return;
  }
  indice = Math.floor(Math.random() * amigo.length);
  let amigoSorteado = amigo[indice];
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo secreto es ${amigoSorteado}`;
  listaAmigos.innerHTML = "";
  amigo.length = 0;
}
