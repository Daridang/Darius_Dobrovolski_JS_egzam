/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// #region show object keys
function showObjectKeys(obj) {
  const arr = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(showObjectKeys(audi))
// #endregion show object keys