function moverBotao() {
    let top = Math.floor(Math.random() * 400)
    let left = Math.floor(Math.random() * 50)
    let right = Math.floor(Math.random() * 50)
    let parar = Math.floor(Math.random() * 10)
    let parar2 = Math.floor(Math.random() * 10)
    let nao = document.getElementById('nao')
    let idiota = document.getElementById('idiota')
    let pergunta = document.getElementById('pergunta')

    nao.style.marginTop = `${top}px`
    nao.style.marginLeft = `${left}px`
    nao.style.marginRight = `${right}px`


    if(parar == parar2) {
        idiota.innerHTML = 'Você ainda está clicando no "não"? <br> kkkkkk Acho que você é idiota mesmo'
        pergunta.style.display = 'none'
    }
}

nao.onclick = moverBotao

function sim() {
    let sim = document.getElementById('sim')
    let idiota = document.getElementById('idiota')
    let pergunta = document.getElementById('pergunta')
    
    idiota.innerHTML = 'Você é um idiota!!!'
    sim.style.display = 'none'
    pergunta.style.display = 'none'
    nao.style.display = 'none'
}