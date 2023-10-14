import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let playingPlayer = 'circle';

const cells = document.querySelectorAll('.cell');

document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle');

const cellClick = (event) => {
	if (playingPlayer === 'circle') {
		event.target.classList.add('cell__circle');
		document
			.querySelector('#menu__hraje-icon')
			.classList.remove('menu__hraje-circle');
		document
			.querySelector('#menu__hraje-icon')
			.classList.add('menu__hraje-cross');
		playingPlayer = 'cross';
	} else {
		event.target.classList.add('cell__cross');
		document
			.querySelector('#menu__hraje-icon')
			.classList.remove('menu__hraje-cross');
		document
			.querySelector('#menu__hraje-icon')
			.classList.add('menu__hraje-circle');
		playingPlayer = 'circle';
	}

	event.target.disabled = true;
};

const gameField = Array.from(cells).map((cell) => {
	if (cell.classList.contains('cell_circle')) {
		return 'o';
	} else if (cell.classList.contains('cell_cross')) {
		return 'x';
	} else {
		return '_';
	}
});

const winner = findWinner(gameField);
if (winner === 'o' || winner === 'x') {
	const winnerIs = () => {
		alert(`Vyhrál hráč se symbolem: ${winnerIs}!`);
		window.location.reload();
	};
	setTimeout(winnerIs, 500);
} else if (winner === 'tie') {
	const tieIs = () => {
		alert('Hra skončila remízou.');
		window.location.reload();
	};
	setTimeout(tieIs, 500);
}

cells.forEach((cell) => {
	cell.addEventListener('click', cellClick);
});

const pressReplay = (event) => {
	const result = window.confirm('Hrát znovu?');
	if (result === true) {
		window.open('hra.html', 'Refresh..');
	} else {
		event.preventDefault();
	}
};

document.querySelector('#button-replay').addEventListener('click', pressReplay);
