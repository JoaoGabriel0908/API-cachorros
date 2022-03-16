'use strict'


const pesquisarRacas = async () => {
    const url = `https://dog.ceo/api/breeds/list/all`
    const response = await fetch(url)
    const data = await response.json()
    // Retorna as chaves dos arrays de um objeto
    return Object.keys(data.message)
}

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

    const tagImagens = imagens.message.map(criarImg)

    container.replaceChildren(...tagImagens)
}

const carregarRacas = async () =>{
    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML = `
        <option>
            ${racas.join("</option><option>")}
        </option>
        `
}


document.getElementById('pesquisar').addEventListener('click', carregarImagens)

carregarRacas()

const abrirModal = () =>{
    document
        .getElementById('modal-container')
        .classList.add('active')
} 

const fecharModal = () =>{
    document
        .getElementById('modal-container')
        .classList.remove('active')
}

// Modal
document
    .getElementById('abrir-modal')
    .addEventListener('click', abrirModal)

document
    .getElementById('fechar')
    .addEventListener('click', fecharModal)

document
    .getElementById('modal-container')
    .addEventListener('click', fecharModal)