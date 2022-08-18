/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

// #region target html elements
const outputEl = document.getElementById('output');
// #region target html elements

// #region init
getCars();
// #endregion init

// #region fetching data from file
async function getCars() {
    const response = await fetch('cars.json');
    const result = await response.json();
    displayData(result)
}
// #endregion fetching data from file

// #region helpers
function displayData(dataArr) {
    outputEl.innerHTML = '';
    dataArr.forEach(element => {
        outputEl.insertAdjacentHTML('afterbegin', createCard(element))
    });
}
// #endregion helpers

// #region card
function createCard(data) {
    return `
    <div class="card">
        <h2 class="card__title">${data.brand}</h2>
        <p class="card__body">${data.models.join(', ')}</p>
    </div>
    `
}
// #endregion card
