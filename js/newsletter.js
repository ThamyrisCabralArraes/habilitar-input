const txtEmail = document.getElementById("txtEmail")
function aoClicar() {
  txtEmail.disabled = false
  txtEmail.focus()
}
function aoSair() {
  txtEmail.disabled = true
}
// DESAFIO 
const contra = document.querySelector('#contra')
const botao = document.querySelector('#botao')
botao.disabled = true

function contratoo() {
  botao.disabled = !contra.checked
}
// function sair() {
//   contra.checked = false
//   botao.disabled = true
// }
