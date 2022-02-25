let mostrador = document.querySelector('.contador')
let contador = 0;

function diminui() {
  contador -= 1;
  mostrador.innerHTML = contador;
};

function aumenta() {
  contador += 1;
  mostrador.innerHTML = contador;
};

const btnComprar = document.querySelector('.quantidade--btn-comprar');

function comprar() {
  
    btnComprar.innerText = "COMPROU"

}


let listaPrecos = ["16,80", "25,00", "40,00", "80,00"]
const listaTitulos = ["200 ml", "400 ml", "1 L", "2 L"];

const areaDoPreco = document.getElementById('preco');
const areaParcelas = document.getElementById('parcelas');
const areaTitulo = document.getElementById('tamanho')

const botoes = document.querySelectorAll('.opcoes--btn');

for (indice = 0; indice < botoes.length; indice++){
  const opcao = botoes[indice] 
  const precoUni = listaPrecos[indice]
  const calculoDeParcelas = parseFloat(precoUni) / 3;
  const descricao = listaTitulos[indice];
  selecao(opcao, precoUni, calculoDeParcelas, descricao)
};

function selecao(botao, valor, calculo, descricao) {
  botao.addEventListener("click", (e) => {
      areaDoPreco.innerText = valor;
      areaParcelas.innerText = `3x R$ ${Math.floor(calculo)}`;
      areaTitulo.innerText = descricao; 
      let selecionado = document.querySelectorAll('.produto__opcoes--botoes .btn--selecionado');
      selecionado.length != 0 ? selecionado[0].classList.remove("btn--selecionado") : selecionado.length;
      botao.classList.add('btn--selecionado')    
  })
}






