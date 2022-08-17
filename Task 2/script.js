/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// #region target html elements
const btnStateEl = document.getElementById('btn__state');
const btnEl = document.querySelector('.btn');
// #endregion target html elements

// #region init
let counter = 0;
// #endregion init

// #region listeners
btnEl.addEventListener('click', () => {
    counter++;
    btnStateEl.innerText = counter;
})
// #endregion listeners