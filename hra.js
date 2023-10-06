let currentPlayer = 'circle';

document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle')

const whenClicked = (event) => {
	if (currentPlayer === 'circle') {
        event.target.classList.add('cell__circle');
        document.querySelector('#menu__hraje-icon').classList.remove('menu-hraje__circle')
        document.querySelector('#menu__hraje-icon').classList.add('menu-hraje__cross')
        currentPlayer = 'cross';
    } else {
        event.target.classList.add('cell__cross');
        document.querySelector('#menu__hraje-icon').classList.remove('menu__hraje-cross')
        document.querySelector('#menu__hraje-icon').classList.add('menu__hraje-circle')
        currentPlayer = 'circle';
    }

    event.target.disabled = true
}


document.querySelector('#cell1').addEventListener('click', whenClicked);

document.querySelector('#cell2').addEventListener('click', whenClicked);

document.querySelector('#cell3').addEventListener('click', whenClicked);

document.querySelector('#cell4').addEventListener('click', whenClicked);

document.querySelector('#cell5').addEventListener('click', whenClicked);

document.querySelector('#cell6').addEventListener('click', whenClicked);

document.querySelector('#cell7').addEventListener('click', whenClicked);

document.querySelector('#cell8').addEventListener('click', whenClicked);

document.querySelector('#cell9').addEventListener('click', whenClicked);

document.querySelector('#cell10').addEventListener('click', whenClicked);


const whenRefreshed = (event) => {
    const result = window.confirm('Hrát znovu?');
    if (result === true) {
        window.open("hra.html", 'Refresh..');
      } else {
        event.preventDefault()
      }
}

document.querySelector('#button-replay').addEventListener('click', whenRefreshed)