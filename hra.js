import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let playingPlayer = 'circle';

const cells = document.querySelectorAll('.cell');

document
	.querySelector('#menu__hraje--icon')
	.classList.add('menu__hraje--circle');

const computerPlayer = async () => {
	const cellsArray = Array.from(cells);
	const board = cellsArray.map((cell) => {
		if (cell.classList.contains('cell__circle')) {
			return 'o';
		} else if (cell.classList.contains('cell__cross')) {
			return 'x';
		} else {
			return '_';
		}
	});
	const response = await fetch(
		'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				board: board,
			}),
		}
	);
	const data = await response.json();
	const x = data.position.x;
	const y = data.position.y;
	const index = x + y * 10;
	const button = cellsArray[index];
	button.click();
};

const cellClick = (event) => {
	if (playingPlayer === 'circle') {
		event.target.classList.add('cell__circle');
		document
			.querySelector('#menu__hraje--icon')
			.classList.remove('menu__hraje--circle');
		document
			.querySelector('#menu__hraje--icon')
			.classList.add('menu__hraje--cross');
		playingPlayer = 'cross';
	} else {
		event.target.classList.add('cell__cross');
		document
			.querySelector('#menu__hraje--icon')
			.classList.remove('menu__hraje--cross');
		document
			.querySelector('#menu__hraje--icon')
			.classList.add('menu__hraje--circle');
		playingPlayer = 'circle';
	}

	event.target.disabled = true;

	const gameField = Array.from(cells).map((cell) => {
		if (cell.classList.contains('cell__circle')) {
			return 'o';
		} else if (cell.classList.contains('cell__cross')) {
			return 'x';
		} else {
			return '_';
		}
	});

	const winner = findWinner(gameField);
	if (winner === 'o' || winner === 'x') {
		const winnerIs = () => {
			alert(`Vyhrál hráč se symbolem: ${winner.toUpperCase()}!`);
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
	if (playingPlayer === 'cross') {
		computerPlayer();
	}
};

cells.forEach((cell) => {
	cell.addEventListener('click', cellClick);
});

const pressReplay = (event) => {
	const result = window.confirm('Hrát znovu?');
	if (result === true) {
		window.location.reload();
	} else {
		event.preventDefault();
	}
};

document.querySelector('#button-replay').addEventListener('click', pressReplay);
