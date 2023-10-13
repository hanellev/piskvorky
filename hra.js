import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let playingPlayer = 'circle';

document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle');

const cells = document.querySelectorAll('.cell');

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

cells.forEach((cell) => {
	cell.addEventListener('click', cellClick);
});

const hry = document.querySelectorAll('.hra'); //'.hra' bude ta řada po 1Oti prvcích//

hry.forEach((hra) => {
	const policka = hra.querySelectorAll('.policko'); //policka budou cells a .policko bude .cell//
	const vysledek = hra.querySelector('.vysledek');
	const polePolicek = Array.from(policka).map((item) => {
		if (item.classList.contains('kolecko')) {
			return 'o';
		} else if (item.classList.contains('krizek')) {
			return 'x';
		} else {
			return '_';
		}
	});
	//zjednodušená políčka pojmenuju cellArray = Array.from(cells).map(cell)

	const winnerIs = findWinner(polePolicek);
	if (winnerIs === 'o') {
		vysledek.textContent = 'Vyhrálo kolečko!';
	} else if (winnerIs === 'x') {
		vysledek.textContent = 'Vyhrál křížek!';
	} else if (winnerIs === 'tie') {
		vysledek.textContent = 'Remíza!';
	} else {
		vysledek.textContent = 'Hra ještě probíhá';
	}
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
