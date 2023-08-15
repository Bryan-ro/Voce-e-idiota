let nao = document.getElementById('nao')
let idiota = document.getElementById('idiota')
let pergunta = document.getElementById('pergunta')

let contador = 0

function moverBotao() {
    nao.style.margin = `calc(${randomPositions(100)}vh - 262px) ${randomPositions(50)}px ${randomPositions(50)}px ${randomPositions(50)}px`


    if(contador === 10) {
        idiota.innerHTML = 'Você ainda está clicando no "não"? <br> kkkkkk Acho que você é idiota mesmo'
        pergunta.style.display = 'none'
    }

    contador++
}


const randomPositions = (random) => {
    return Math.floor(Math.random() * random)
}

nao.addEventListener("mouseenter", moverBotao)

function sim() {
    let sim = document.getElementById('sim')
    
    idiota.innerHTML = 'Você é um idiota!!!'
    sim.style.display = 'none'
    pergunta.style.display = 'none'
    nao.style.display = 'none'
}