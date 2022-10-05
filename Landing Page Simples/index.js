function imcCalculadora (){
    const form = document.querySelector('.formImc');

    function calcularIMC(enviar){
        enviar.preventDefault();

        const Altura = document.querySelector('#Altura');
        const Peso = document.querySelector('#Peso');
        const imc = Peso.value / Altura.value ** 2;
        let resultado = document.querySelector('.resultado');
        
        if (imc < 18.5) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Abaixo do Peso).`;
        else if (imc >= 18.5 && imc <= 24.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Peso Normal).`;
        else if (imc >= 25 && imc <= 29.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Sobrepeso).`;
        else if (imc >= 30 && imc <= 34.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 1).`;
        else if (imc >= 35 && imc <= 39.9) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 2).`;
        else if (imc > 40) resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 3).`;
        else resultado.innerHTML = `Peso ou Altura Invalidos.`;

    }
    form.addEventListener('submit', calcularIMC);
}

function fullDateWindow() {

    const fullDate = new Date();
    const year = fullDate.getFullYear();
    let month = fullDate.getMonth();
    const date = fullDate.getDate();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    let day = fullDate.getDay();
    let dateHTML = document.querySelector('.dateContainer');

    function monthTranslate() {

        switch (month) {
            case 0:
                month = 'Janeiro';
                return
            case 1:
                month = 'Fevereiro';
                return
            case 2:
                month = 'Março';
                return
            case 3:
                month = 'Abril';
                return
            case 4:
                month = 'Maio';
                return
            case 5:
                month = 'Junho';
                return
            case 6:
                month = 'Julho';
                return
            case 7:
                month = 'Agosto';
                return
            case 8:
                month = 'Setembro';
                return
            case 9:
                month = 'Outubro';
                return
            case 10:
                month = 'Novembro';
                return
            case 11:
                month = 'Dezembro';
                return
        }
    }

    function weekTranslate() {
        switch (day) {
            case 0:
                day = 'Domingo'
                break
            case 1:
                day = 'Segunda-Feira'
                break
            case 2:
                day = 'Terça-Feira'
                break
            case 3:
                day = 'Quarta-Feira'
                break
            case 4:
                day = 'Quinta-Feira'
                break
            case 5:
                day = 'Sexta-Feira'
                break
            case 6:
                day = 'Sábado'
                break
        }
    }

    monthTranslate();
    weekTranslate();
    dateHTML.innerHTML = `${day}, ${date} de ${month} de ${year} ${hours}:${minutes}`;
}

fullDateWindow();
imcCalculadora();
