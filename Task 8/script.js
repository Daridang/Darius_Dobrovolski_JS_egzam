/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// #region calculator
function Calculator() {
    this.sum = function(a, b) {
        return a + b;
    }
    this.substraction = function(a, b) {
        return a - b;
    }
    this.multiplication = function(a, b) {
        return a * b;
    }
    this.division = function(a, b) {
        return a / b;
    }
}
console.log(new Calculator().sum(5, 5));
console.log(new Calculator().substraction(5, 5));
console.log(new Calculator().multiplication(5, 5));
console.log(new Calculator().division(5, 5));
// #endregion calculator