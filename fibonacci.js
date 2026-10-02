//FIBONACCI
function fibsSequence(n) {
  let result = [];

  function nIsOne() {
    result.push(0);
  }
  function nIsTwo() {
    nIsOne();
    result.push(1);
  }

  if (n === 1) nIsOne();
  if (n === 2) nIsTwo();

  if (Number.isInteger(n) && n > 2) {
    nIsTwo();

    for (let i = 2; i <= n - 1; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}
function fibsNumber(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (Number.isInteger(n) && n > 2) {
    return n - 1 + (n - 2);
  }
}

function fibNumberRec(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (Number.isInteger(n) && n > 2) {
    return fibNumberRec(n - 1) + fibNumberRec(n - 2);
  }
}
function fibSequenceRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  if (Number.isInteger(n) && n >= 2) {
    const prev = fibSequenceRec(n - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
  }
}

console.log(fibSequenceRec(6));
