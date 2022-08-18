'use strict'
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// #region target html elements
const formEl = document.querySelector('form');
const searchEl = document.getElementById('search');
const outputEl = document.getElementById('output');
// #endregion target html elements

// #region init
const kgToLb = (kg) => `${kg}kg = ${kg * 2.2046}lb`;
const kgToG = (kg) => `${kg}kg = ${kg / 0.001}g`;
const kgToOz = (kg) => `${kg}kg = ${kg * 35.274}oz`;
const formules = [kgToLb, kgToG, kgToOz]
// #endregion init

// #region event listeners
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = +searchEl.value;

    if (isNaN(input) || input < 0) {
        searchEl.value = '';
        return;
    }
    outputEl.innerHTML = '';
    formules.forEach(formulaFunc => {
        addAnswerToHtml(outputEl, formulaFunc(input))
    })
})
// #endregion event listeners

// #region helpers
function addAnswerToHtml(parentBody, answer) {
    const pEl = document.createElement('p');
    pEl.append(answer);
    parentBody.append(pEl);
}
// #endregion helpers