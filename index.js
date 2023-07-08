    const displayPrevius = document.getElementsByClassName('data_previus');
    const displayCurrent = document.getElementsByClassName('data_current');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const allClearButton = document.getElementsByClassName('all_clear');
    const deleteButton = document.getElementsByClassName('delete');
    const equalButton = document.getElementsByClassName('equals');

    const calculadora = new Calculadora();
    const display = Display (displayPrevius, displayCurrent);

    numberButtons.forEach(boton => {
        boton.addEventListener('click', () => display.numberAdd(boton.innerHTML)   );
    });

