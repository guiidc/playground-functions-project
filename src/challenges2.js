// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  for (let i = 0; i < array.length; i += 1) {
    let obj = {
      tech: array[i],
      name: nome,
    };
    list.push(obj);
  }
  list = list.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });
  return list;
}

// Desafio 11
// aux
function validateNumbers(array) {
  let c = [];
  for (let v of array) {
    c = array.filter((e) => e === v);
    if (v < 0 || v > 9 || c.length >= 3) return false;
  }
  return true;
}

// aux 2
function formatNumbers(array) {
  let formatedArray = array;
  formatedArray.splice(0, 0, '(');
  formatedArray.splice(3, 0, ')');
  formatedArray.splice(4, 0, ' ');
  formatedArray.splice(10, 0, '-');
  return formatedArray.join('');
}

function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if (!validateNumbers(arrayNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatNumbers(arrayNumbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let angles = [Math.abs(lineA), Math.abs(lineB), Math.abs(lineC)];
  let results = [];
  results.push(angles[0] < (angles[1] + angles[2]));
  results.push(angles[1] < (angles[0] + angles[2]));
  results.push(angles[2] < (angles[0] + angles[1]));
  for (let v of results) {
    if (!v) return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let numbersIntoString = str.match(/\d/g);
  let drinksNumbersArray = numbersIntoString.map((v) => Number(v));
  let reducedDrinksNumber = drinksNumbersArray.reduce((c, v) => c + v);
  if (reducedDrinksNumber > 1) return `${reducedDrinksNumber} copos de água`;
  return `${reducedDrinksNumber} copo de água`;
}

module.exports = {
  techList,
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
