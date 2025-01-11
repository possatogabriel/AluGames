// FUNÇÃO QUE ALTERA IMAGEM E BOTÃO PARA MOSTRAR QUE OS ITENS FORAM ALUGADOS
function alugarItem(img, btn) {
    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
        btn.classList.remove('dashboard__item__button--return'); 
        
        // JEITO ANTIGO
        // btn.innerHTML = "Devolver";

        // JEITO NOVO - MAIS RECOMENDADO E MAIS USADO (questões de segurança)
        btn.textContent = 'Alugar';
    }

    else {
        img.classList.add('dashboard__item__img--rented');
        btn.classList.add('dashboard__item__button--return'); 

        btn.textContent = 'Devolver';
    }
}

// FUNÇÃO QUE ALTERA O STATUS DO JOGO (alugado ou não) AO CLICAR NO BOTÃO
function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);

    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');    

    alugarItem(imagem, botao);
}


