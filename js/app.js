let i = 1;

// FUNÇÃO QUE ALTERA IMAGEM E BOTÃO PARA MOSTRAR QUE OS ITENS FORAM ALUGADOS
function alugarItem(img, btn) {
    if (img.classList.contains('dashboard__item__img--rented')) {

        let confirmacao = prompt("Você deseja DEVOLVER o produto? Responda com 'sim' ou 'não': ");
        confirmacao = confirmacao.toUpperCase();

        // ESTRUTURA DE CONDIÇÃO PARA VERIFICAR SE O USUÁRIO QUER CONFIRMAR A DEVOLUÇÃO DO PRODUTO (desafio)
        if (confirmacao == "SIM") {
            alert("Você CONFIRMOU a devolução do produto.")
            img.classList.remove('dashboard__item__img--rented');
            btn.classList.remove('dashboard__item__button--return'); 
            
            // JEITO ANTIGO
            // btn.innerHTML = "Devolver";
    
            // JEITO NOVO - MAIS RECOMENDADO E MAIS USADO (questões de segurança)
            btn.textContent = 'Alugar';
        }

        else if (confirmacao == "NÃO") {
            alert("Você NEGOU a devolução o produto.");
            return;
        }

        else {
            alert("Houve um erro, tente novamente!");
            return;
        }
    }

    else {
        img.classList.add('dashboard__item__img--rented');
        btn.classList.add('dashboard__item__button--return'); 

        btn.textContent = 'Devolver';
    }

    verificarQuantosAlugados(img);
}

// FUNÇÃO QUE ALTERA O STATUS DO JOGO (alugado ou não) AO CLICAR NO BOTÃO
function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);

    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');    

    alugarItem(imagem, botao);
}

// FUNÇÃO QUE VERIFICA QUANTOS JOGOS ESTÃO ALUGADOS ATUALMENTE (desafio)
function verificarQuantosAlugados(image) {
    if (image.classList.contains('dashboard__item__img--rented')) {
        i++;
    }
    
    else {
        i--;
    }
    console.log(`NÚMERO ATUAL DE JOGOS ALUGADOS: ${i}`);
}