/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

// #region ES6 constructor function
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        return this.budget > 100000000;
    } 
}
const movie = new Movie('Terminator', 'James Cameron', 6_400_000);
console.log(`Is ${movie.title} expensive? ${movie.wasExpensive()}`)

const movie2 = new Movie('Avatar', 'James Cameron', 237_000_000_000)
console.log(`Is ${movie2.title} expensive? ${movie2.wasExpensive()}`)
// #endregion ES6 constructor function