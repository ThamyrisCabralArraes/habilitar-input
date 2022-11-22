const txtEmail = document.getElementById('txtEmail');
function aoClicar() {
  txtEmail.disabled = false;
  txtEmail.focus();
}
function aoSair() {
  txtEmail.disabled = true;
}
// DESAFIO
const contra = document.querySelector('#contra');
const botao = document.querySelector('#botao');
botao.disabled = true;

function contratoo() {
  botao.disabled = !contra.checked;
}

// function sair() {
//   contra.checked = false
//   botao.disabled = true
// }

let tela = document.querySelector('main');

let btdark = document.querySelector('#btdark');
let btligth = document.querySelector('#btligth');

btdark.addEventListener('click', modoDark);
btligth.addEventListener('click', modoLigth);

function modoDark() {
  tela.classList.add('btdark');
  tela.classList.remove('btligth');
}

function modoLigth() {
  tela.classList.add('btligth');
  tela.classList.remove('btdark');
}
