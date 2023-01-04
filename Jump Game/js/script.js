const gameboard = document.querySelector('.game-board');
const pikachu = document.querySelector('.pikachu');
const obstaculo = document.querySelector('.obstaculo');
let estadoPulo = 0;

function jump(e) {
    if (estadoPulo == 0 && e.key == " ") {
        pikachu.classList.add('jump');
        setTimeout(() => { pikachu.classList.remove('jump') }, 2000);
        estadoPulo = 1;
        setTimeout(() => { estadoPulo = 0 }, 2000);
    }
}

document.addEventListener('keydown', jump);

const endGameCheck = setInterval(() => {

    const posiçaoObstaculo = obstaculo.offsetLeft;
    const posiçaoPikachu = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if (posiçaoObstaculo < 130 && posiçaoPikachu < '100') {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${posiçaoObstaculo}px`
        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${posiçaoPikachu}px`
        clearInterval(pontosContador);
    }

}, 10);

const pontos = document.querySelector('.pontos');

let contadorPontuaçao = 0;

const pontosContador = setInterval(() => {
    contadorPontuaçao++;
    pontos.innerHTML = contadorPontuaçao;
}, 4000)



