const gameboard = document.querySelector('.game-board');
const pikachu = document.querySelector('.pikachu');
const obstaculo = document.querySelector('.obstaculo');
let estadoPulo = 0;

function jump(e) {
    if (estadoPulo == 0 && e.key == " ") {
        pikachu.classList.add('jump');
        setTimeout(() => { pikachu.classList.remove('jump') }, 2000);
        estadoPulo = 1;
        setTimeout(() => { estadoPulo = 0 }, 2100);
    }
}

document.addEventListener('keydown', jump);

const endGameCheck = setInterval(() => {
    const posiçaoObstaculo = obstaculo.offsetLeft;
    const posiçaoPikachu = +window.getComputedStyle(pikachu).bottom.replace('px', ''); //Pegando css

    if (posiçaoObstaculo < 130 && posiçaoPikachu < '100') {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `50px`;
        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${posiçaoPikachu}px`;
        pikachu.src = 'assets/pikachu-end.png';
        clearInterval(pontosContador);
        clearInterval(endGameCheck);
        gameboard.innerHTML += `
        <form class="endGameBoard">
        <p>Score</p>
        <p class="scoreEnd">${contadorPontuaçao}</p>
        <button class="reload">Reiniciar</button>
        </form>`;
    }

    if (contadorPontuaçao > 1006) {
        obstaculo.style.animation = 'obstaculo-animação 3s infinite linear';
    }

    if (contadorPontuaçao > 3006) {
        obstaculo.style.animation = 'obstaculo-animação 2.5s infinite linear';
    }

    if (contadorPontuaçao > 6000) {
        obstaculo.style.animation = 'obstaculo-animação 2s infinite linear';
    }

    if (contadorPontuaçao > 7000) {
        obstaculo.style.animation = 'obstaculo-animação 1s infinite linear';
    }

}, 10);

const pontos = document.querySelector('.pontos');

let contadorPontuaçao = 0;


const pontosContador = setInterval(() => {
    contadorPontuaçao = contadorPontuaçao + 3;
    pontos.innerHTML = contadorPontuaçao;
}, 100);
