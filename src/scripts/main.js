document.addEventListener('DOMContentLoaded', () => {
    const age = new Date().getFullYear();
    const birthday = new Date(`Sep 30, ${age} 16:45:00`);
    const birthdayTimeStamp = birthday.getTime();

    const counter = setInterval(() => {
        const now = new Date();
        const nowTimeStamp = now.getTime();

        const counterToBirthday = birthdayTimeStamp - nowTimeStamp;

        const dayConverter = 1000 * 60 * 60 * 24;
        const hoursConverter = 1000 * 60 * 60;
        const minConverter = 1000 * 60;


        const daysToEvent = Math.floor(counterToBirthday / dayConverter);
        const hoursToEvent = Math.floor((counterToBirthday % dayConverter) / hoursConverter);
        const minutesToEvent = Math.floor((counterToBirthday % hoursConverter) / minConverter);
        const secondsToEvent = Math.floor((counterToBirthday % minConverter) / 1000);

        document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
    }, 1000)

    const iGo = document.getElementsByClassName('btn')[0];
    iGo.addEventListener('click', () => {
        clearInterval(counter);

        document.getElementsByClassName('box')[0].remove();
        document.getElementsByClassName('gift')[0].remove();
        document.getElementsByTagName('img')[0].setAttribute('src', './assets/joia.png');
        document.getElementsByClassName('title')[0].innerText = 'Valeu, tmj!';
    })

    const inHold = document.getElementsByClassName('btn')[1];
    inHold.addEventListener('click', () => {
        clearInterval(counter);

        document.getElementsByClassName('birthday')[0].appendChild(document.getElementsByClassName('text')[0]);

        document.getElementsByClassName('box')[0].remove();
        document.getElementsByClassName('gift')[0].remove();
        document.getElementsByTagName('img')[0].setAttribute('src', './assets/obras.jpeg');
        document.getElementsByClassName('title')[0].innerText = 'Página em Construção...';
        document.getElementsByClassName('text')[0].innerText = '...Por favor aguarde';
    })

    const yesBtn = document.getElementsByClassName('yes')[0];
    yesBtn.addEventListener('click', () => {
        clearInterval(counter);

        document.getElementsByClassName('box')[0].remove();
        document.getElementsByClassName('gift')[0].remove();
        document.getElementsByTagName('img')[0].setAttribute('src', './assets/joia.png');
        document.getElementsByClassName('title')[0].innerText = 'Valeu, tmj!';
    })

    const noBtn = document.getElementsByClassName('no')[0];
    noBtn.addEventListener('click', () => {

        document.getElementsByClassName('birthday')[0].appendChild(document.getElementsByClassName('text')[0]);
        document.getElementsByClassName('birthday')[0].appendChild(document.getElementById('counter'));
        document.getElementsByClassName('birthday')[0].setAttribute('class', 'birthday alert');

        document.getElementsByClassName('gift')[0].remove();
        document.getElementsByClassName('box')[0].remove();
        document.getElementsByTagName('img')[0].setAttribute('src', './assets/gatinho-brabo.avif');
        document.getElementsByClassName('title')[0].innerText = 'E ta esperando o que?';
        document.getElementsByClassName('text')[0].innerText = 'SEU PRAZO ESTA ACABANDO!';
    })
})