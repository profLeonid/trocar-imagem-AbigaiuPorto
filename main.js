'use strict'

function trocarImagem(){
    const imagem = document.getElementById('Imagem')

    if(imagem.src.includes('elevador.jpg')){
        imagem.src = 'img/farol.jpg'
    }else{
        imagem.src = 'img/elevador.jpg'
    }
}

const botaoTrocar = document.getElementById('trocar')

botaoTrocar.addEventListener('click', trocarImagem)
