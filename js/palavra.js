var novojogo = document.querySelector('.novo-jogo');
var palavra = document.querySelector('.palavra');
var letraErrada = document.querySelector('.letras-erradas');
var botaosalvar = document.querySelector('.salvar');
var texto = document.querySelector('.txt-palavras');
var linhas = document.querySelector('.linhas');
var final = document.querySelector('.final');
var canvas = document.querySelector('canvas');
var pincel = canvas.getContext("2d");

var palavras = ['alura','desafio','oracle','codigo','forca','dev','css','html','canvas',
                'challenge','desenvolvedor'];
var letrasCorretas = [];
var letrasErradas = [];

var chances = 0;

function aleatorio() {
    var palavraleatoria = palavras[Math.floor(palavras.length * Math.random())];
    palavraSecreta = palavraleatoria.toUpperCase();
    palavra.textContent = palavraSecreta;
}

function tecladoValido(codigo) {
    return codigo >= 65 && codigo <= 90;
}

function mostarLetras() {
    letraErrada.textContent = letrasErradas.join("  ");
    var palavraGerada = palavra.textContent;
    linhas.innerHTML = '';
    palavraGerada.split("").forEach(letra => {
        if (letrasCorretas.includes(letra)) {
            linhas.innerHTML += `<span>${letra}</span>`
        } else {
            linhas.innerHTML += `<span class="none">-</span>`
        }
    });
}

var tecladoDigitar = function (evento) {
    var palavraSecreta = palavra.textContent;
    var codigo = evento.keyCode;
    var letra = evento.key.toUpperCase();
    if (tecladoValido(codigo)) {
        if (letrasErradas.includes(letra)) {
         alert("Você já tentou essa letra")
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorretas.push(letra);
            } else {
                letrasErradas.push(letra);
                chances++;
                desenhaBoneco();
                if (chances >= 6) {
                    final.innerHTML += `<span class="perdeu">Você PERDEU!</span>`
                    final.innerHTML += `<img class="perdeuimg" src="img/morte.png">`
                    removeEventoKeydown();
                }
            }
        }

        mostarLetras();

        if (linhas.textContent == palavraSecreta) {
            final.innerHTML += `<span class="venceu">Você VENCEU!</span>`
            final.innerHTML += `<img class="perdeuimg" src="img/morte2.png">`
            removeEventoKeydown();
        }
    }
}

novojogo.addEventListener('click', iniciarJogo);
botaosalvar.addEventListener('click', function () {
    salvar();
    iniciarJogo();
});
