let currentPlayer = 'circle';

document.querySelector('#menu-hraje__icon').classList.add('menu-hraje__circle')

const whenClicked = (event) => {
	if (currentPlayer === 'circle') {
        event.target.classList.add('cell--circle');
        document.querySelector('#menu-hraje__icon').classList.remove('menu-hraje__circle')
        document.querySelector('#menu-hraje__icon').classList.add('menu-hraje__cross')
        currentPlayer = 'cross';
    } else {
        event.target.classList.add('cell-cross');
        document.querySelector('#menu-hraje__icon').classList.remove('menu-hraje__cross')
        document.querySelector('#menu-hraje__icon').classList.add('menu-hraje__circle')
        currentPlayer = 'circle';
    }

    event.target.disabled = true
}


document.querySelector('button:nth-child(1)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(2)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(3)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(4)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(5)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(6)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(7)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(8)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(9)').addEventListener('click', whenClicked);

document.querySelector('button:nth-child(10)').addEventListener('click', whenClicked);


const whenRefreshed = (event) => {
    const result = window.confirm('Hrát znovu?');
    if (result === true) {
        window.open("hra.html", 'Refresh..');
      } else {
        event.preventDefault()
      }
}

document.querySelector('#button_replay').addEventListener('click', whenRefreshed)