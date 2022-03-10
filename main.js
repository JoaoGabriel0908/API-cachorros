'use strict'

const pesquisarDog = async (raca) =>{
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch (url)

    const data = await response.json()

    return data
}

const criarImg = (imagem) =>{
    const img = document.createElement('div')
    img.classList.add('card')
    img.innerHTML = `<img src="${imagem}" alt="">`
    return img
}
 
// Carregando as imagens que foi pesquisada pelo pesquisarDog
const carregarImagens = async() => {

    const container = document.getElementById('imagem-container')
    const raca = document.getElementById('raca').value
    const imagens = await pesquisarDog(raca)

    console.log(imagens.message)
    const tagImagens = imagens.message.map(criarImg)

    container.replaceChildren(...tagImagens)
}

document.getElementById('pesquisar').addEventListener('click', carregarImagens)