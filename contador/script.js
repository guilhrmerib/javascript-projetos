let contador = 0;

function atualizarDisplay() {
  document.getElementById("valor").innerText = contador;
}

function incrementar() {
  contador++;
  atualizarDisplay();
}

function decrementar() {
  contador--;
  atualizarDisplay();
}

function resetar() {
  contador = 0;
  atualizarDisplay();
}
