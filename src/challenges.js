// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points += 3 * wins;
  points += ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let c = [];
  let major = Math.max(...array);
  for (let v of array) {
    if (v === major) {
      c.push(v);
    }
  }
  return c.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let bugArray = array.map((v) => {
    if (v % 3 === 0 && v % 5 === 0) return 'fizzBuzz';
    if (v % 3 === 0) return 'fizz';
    if (v % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return bugArray;
}

// Desafio 9
function encode(str) {
  let encodedStr = str;
  encodedStr = encodedStr.replace(/a/g, '1');
  encodedStr = encodedStr.replace(/e/g, '2');
  encodedStr = encodedStr.replace(/i/g, '3');
  encodedStr = encodedStr.replace(/o/g, '4');
  encodedStr = encodedStr.replace(/u/g, '5');
  return encodedStr;
}
function decode(str) {
  let decodedStr = str;
  decodedStr = decodedStr.replace(/1/g, 'a');
  decodedStr = decodedStr.replace(/2/g, 'e');
  decodedStr = decodedStr.replace(/3/g, 'i');
  decodedStr = decodedStr.replace(/4/g, 'o');
  decodedStr = decodedStr.replace(/5/g, 'u');
  return decodedStr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
