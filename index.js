    const displayPrevius = document.getElementsByClassName('data_previus')[0];
    const displayCurrent = document.getElementsByClassName('data_current')[0];
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const allClearButton = document.getElementsByClassName('all_clear')[0];
    const deleteButton = document.getElementsByClassName('delete')[0];
    const darkMode = document.getElementById('switch-label');
    const body = document.body
    const display =new  Display (displayPrevius, displayCurrent);

    numberButtons.forEach(boton => {
        boton.addEventListener('click', () => display.numberAdd(boton.innerHTML)   );
    });

    operationButtons.forEach (boton => {
        boton.addEventListener('click',() => display.computar(boton.value) )
    })

    deleteButton.addEventListener('click', () => display.borrar());

    allClearButton.addEventListener('click', () => display.allclear());
    
    //Evento ingreso de datos en el display
    displayCurrent.addEventListener ('input', () => display.limitarTexto())

// asignacion del evento modo oscuro.
darkMode.addEventListener('change', () => body.classList.toggle('dark-mode'))

