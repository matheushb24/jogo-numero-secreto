let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagenInicial() {
    exibirTextoNaTela('h1','Jogo Do Número Secreto');
    exibirTextoNaTela('p','Escolha um Número de 1 a 10');
}
exibirMensagenInicial()

function verificarChute() {
    let chute=document.querySelector('input').value;
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Booa garotin!! foi com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','o numero é menor tenta novamente!!');
        } else{
            exibirTextoNaTela('p','o numero é maior tenta novamente!!');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite+1);
   let quantidadeDeElementosDaLista = listaDeNumeroSorteados.length
   if (quantidadeDeElementosDaLista == numeroLimite){
    listaDeNumeroSorteados = []
   }
   if (listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial();
    document.getElementById ('reiniciar').setAttribute ('disabled',true);
}