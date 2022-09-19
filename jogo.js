const iniciarJogo = () => {
	let nivel = document.querySelector('#nivel').value

	if(nivel === '') {
		alert('Selecione um nível para iniciar o jogo')
		return false
	}

	window.location.href = 'jogo.html?' + nivel
}

let altura = 0
let largura = 0
let vidas = 1
let tempo = 15
let MoscaTempo = 2000
let nivel = window.location.search

if(nivel === 'fácil') {
	MoscaTempo = 2000
} else if(nivel === 'normal') {
	MoscaTempo = 1500
} else if (nivel === 'dificil') {
	MoscaTempo = 900
}

const ajustaTamanhoPalcoJogo = () => {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.querySelector('#cronometro').innerHTML = tempo
	}
	
}, 1000)

document.querySelector('#cronometro').innerHTML = tempo

			let criaMosca = setInterval(function() { 
				posicaoRandomica()
			}, MoscaTempo)

const posicaoRandomica = () => {
	if(document.querySelector('#mosca')) {
		document.querySelector('#mosca').remove()

	if(vidas > 3) {
		window.location.href = 'fim_de_jogo.html'

	} else {
		document.querySelector('#v' + vidas).src = "imagens/coracao_vazio.png"
		vidas++
		}
	}

	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//elemento html
	let mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' '
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function() {
		this.remove()
	}
	document.body.appendChild(mosca)
}

const tamanhoAleatorio = () => {
	let classe = Math.floor(Math.random() * 3)
	if (classe == 0) {
		return 'mosca1'
	} else if (classe == 1) {
		return 'mosca2'
	} else {
		return 'mosca3'	
	}
}
