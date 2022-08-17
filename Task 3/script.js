/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

// #region targeting html elements
const outputEl = document.getElementById('output');
const messageEl = document.getElementById('message');
const btnEl = document.getElementById('btn');
// #endregion targeting html elements

// #region button listener
btnEl.addEventListener('click', async () => {
    await getUsers();
})
// #endregion button listener

// #region api request
async function getUsers() {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
        const result = await response.json();
        displayUsers(result);
    }
}
// getUsers();
// #endregion api request

// #region card
function createCard(userData) {
    return `
    <div class="card">
        <img src="${userData.avatar_url}" alt="user avatar" class="card__avatar" />
        <p class="card__login">${userData.login}</p>
    </div>
    `
}
// #endregion card

// #region helpers
function displayUsers(result) {
    outputEl.innerHTML = ''
    messageEl.style.display = 'none'
    result.forEach(user => outputEl.insertAdjacentHTML('afterbegin', createCard(user)))
}
// #endregion helpers