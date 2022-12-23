const pikachu = document.querySelector('.pikachu');
const obstaculo = document.querySelector('.obstaculo');
let estado = 0;

const jump = () => {

    if (estado == 0) {
        pikachu.classList.add('jump');
        setTimeout(() => { pikachu.classList.remove('jump') }, 2000);
        estado = 1;
        setTimeout(() => { estado = 0 }, 2000);
    }
}

document.addEventListener('keydown', jump);
