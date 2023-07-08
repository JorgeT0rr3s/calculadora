class Calculadora {
    sumar(num1, num2){
        return parseFloat((num1 + num2).toFixed(5));
    }
    restar(num1, num2){
        return parseFloat((num1 - num2).toFixed(5));
    }
    multiplicar(num1, num2){
        return (num1 * num2).toExponential(2);
    }
    dividir(num1, num2){
        let a = num1 / num2;
        let numFormateado
        if (Math.abs(a) >= 1e6 || Math.abs(a) <= -1e5){
            numFormateado = a.toExponential(2);
            return numFormateado
        }
        else {
            return a.toFixed(5);
        }

    }

}