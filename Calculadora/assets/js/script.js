const resultado = document.querySelector("#resultado");

let operador = "";
let aux = 0;
let valor = "";

function handleClickNum(e) {
  const nuevoNum = document.querySelector(`#${e.id}`).innerHTML;
  valor = valor + nuevoNum;
  resultado.innerHTML = valor;
};

function handleClickOperador(e) {
  operador = document.querySelector(`#${e.id}`).innerHTML;
  aux = valor;
  valor = "";
  resultado.innerHTML = operador;
}

function handleClickIgual(e) {
  resultado.innerHTML = eval(`${aux} ${operador} ${valor}`);
  operador = "";
  valor = "";
}

function handleClear() {
  resultado.innerHTML = 0;
}