// Obtém o modal
var modal = document.getElementById('myModal');
// Obter o botão que abre o modal
var btn = document.getElementById("myBtn");
// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];
// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
  modal.style.display = "block";
}
// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
  modal.style.display = "none";
}
// Quando o usuário clica em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}