const txtEmail = document.getElementById("txtEmail")
function aoClicar() {
  txtEmail.disabled = false
  txtEmail.focus()
}
function aoSair() {
  txtEmail.disabled = true
}

const contra = document.querySelector('#contra')
const botao = document.querySelector('#botao')
function contratoo() {
  contra.checked = true
  botao.disabled = false
}
function sair() {
  contra.checked = false
  botao.disabled = true
}
console.log(contratoo)