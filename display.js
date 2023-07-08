class Display {
    constructor(displayPrevius, displayCurrent) {
        this.displayPrevius = displayPrevius; // elemento donde se visualizaran los datos previos
        this.displayCurrent = displayCurrent; // elemento donde se visualizaran los datos actuales
        this.calculador = new Calculadora ();
        this.previusValue = ''; // valores previus visualizados
        this.currentValue = ''; // valor actual visualizado
    }
    
    numberAdd (numero){
        this.currentValue = numero;
        this.printValue();
    }

    printValue (){
        this.displayCurrent.textContent = this.currentValue;
        this.displayPrevius.textContent = this.previusValue;
    }
}