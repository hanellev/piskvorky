let playingPlayer = 'circle';

document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle')

const cellClick = (event) => {
	if (playingPlayer === 'circle') {
        event.target.classList.add('cell__circle');
        document.querySelector('#menu__hraje-icon').classList.remove('menu__hraje-circle')
        document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-cross')
        playingPlayer = 'cross';
    } else {
        event.target.classList.add('cell__cross');
        document.querySelector('#menu__hraje-icon').classList.remove('menu__hraje-cross')
        document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle')
        playingPlayer = 'circle';
    }

    event.target.disabled = true;
}

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
  cell.addEventListener('click', cellClick);
});

const pressReplay = (event) => {
    const result = window.confirm('Hrát znovu?');
    if (result === true) {
        window.open("hra.html", 'Refresh..');
      } else {
        event.preventDefault()
      }
}

document.querySelector('#button-replay').addEventListener('click', pressReplay)