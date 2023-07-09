class Display {
    constructor(displayPrevius, displayCurrent) {
        this.displayPrevius = displayPrevius; // elemento donde se visualizaran los datos previos
        this.displayCurrent = displayCurrent; // elemento donde se visualizaran los datos actuales
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined
        this.previusValue = ''; // valores previus visualizados
        this.currentValue = ''; // valor actual visualizado
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x'
        }
        this.maxCaracteres = 10;
    }
    // metodo para borrar el ultimo valor digitado
    borrar() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValue();
    }
    //metodo para borrar todos los valores del display, y reestablecer la operacion que se estaba realizando
    allclear() {
        this.currentValue = '';
        this.previusValue = '';
        this.tipoOperacion = undefined;
        this.printValue();
    }

    // metodo para poder agregar un numero al display actual
    numberAdd(numero) {
        // este condicional permite solo inclur in punto (.) adicional convierte los valores a string  con el metodo 'toString'
        if (numero === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + numero.toString();
        this.printValue();
    }
    // metodo para imprimir los valores en el display
    printValue() {
        this.displayCurrent.textContent = this.currentValue;
        this.displayPrevius.textContent = `${this.previusValue} ${this.signos[this.tipoOperacion] || ''}`
    }

    calcular() {
        // aca se cambian los valores de tipo string a tipo float para poder realizar las operaciones
        const previusValue = parseFloat(this.previusValue);
        const currentValue = parseFloat(this.currentValue);

        if (isNaN(previusValue) || isNaN(currentValue)) return;
        this.currentValue = this.calculador[this.tipoOperacion](previusValue, currentValue);
    }

    computar(tipo) {
        if (this.tipoOperacion !== 'igual') {
            this.calcular();
        }
        this.tipoOperacion = tipo;
        this.previusValue = this.currentValue || this.previusValue;
        this.currentValue = '';
        this.printValue();

    }
    // metodo para limitar la cantidad de texto ingresado en el display (no funciona :( ... ))
    limitarTexto() {
        const texto = this.displayCurrent.innerText;

        if (texto.length > this.maxCaracteres) {
            this.displayCurrent.innerText = texto.slice(0, this.maxCaracteres);
        }
    }
}