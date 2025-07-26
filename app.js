function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de >= ate) { 
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    let numerosDisponiveis = ate - de + 1;
    if (quantidade > numerosDisponiveis) {
        alert(`Não é possível sortear ${quantidade} números únicos no intervalo de ${de} a ${ate}. Máximo possível: ${numerosDisponiveis}`);
        return;
    }

    // Limite de segurança para evitar travamento
    if (quantidade > 10000) {
        alert('Limite máximo de 10.000 números para evitar travamento do navegador!');
        return;
}

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) { //loop for vai do 0 até a quantidade digitada
        numero = obterNumeroAleatorio(de, ate); //chamando a função para gerar número aleatório

        while (sorteados.includes(numero)) { //loop while para caso houver a repetição de algum número dentro do array, sortear novamente até que seja diferente
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero); //adicionando os números gerados no array (lista)
    }

    sorteados.sort((a, b) => a - b);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar"); 
    if (botao.classList.contains("container__botao-desabilitado")) { //"se a variável botao conter a propriedade 'desabilitado'"
        botao.classList.remove("container__botao-desabilitado"); //remove a propriedade "desabilitado"
        botao.classList.add("container__botao"); //adiciona a propriedade "habilitado"
    } else {
        botao.classList.remove("container__botao"); //faz o inverso do else
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>'
    alterarStatusBotao();
}