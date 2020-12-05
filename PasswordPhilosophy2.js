function countValid(input) {
  let counter = 0;

  for (let el of input) {
    let occurence = 0;
    let [min, max] = el.split('-');
    min = parseInt(min);
    max = parseInt(max);
    const toFind = el.split(' ')[1].slice(0, 1);
    const password = el.split(' ')[2];

    for (let char of password) {
      if (char === toFind) occurence++;
    }

    if (occurence >= min && occurence <= max) {
      counter++
    }
  }
  return counter;
}

function countValid2(input) {
  let counter = 0;

  for (let el of input) {
    let [min, max] = el.split('-');
    min = parseInt(min) - 1;
    max = parseInt(max) - 1;
    const toFind = el.split(' ')[1].slice(0, 1);
    const password = el.split(' ')[2];

    if (password[min] === toFind ^ password[max] === toFind) {
      counter++
    }

  }
  return counter;
}