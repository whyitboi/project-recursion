//FIBONACCI
//Non-recursive fibonacci sequence up to specified n
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

    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}
//Non-recursive ingle fibonnaci element at n
function fibsNumber(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (Number.isInteger(n) && n > 2) {
    let a = [0, 1];
    for (let i = 2; i < n; i++) {
      a.push(a[i - 1] + a[i - 2]);
    }
    return a[n - 1];
  }
}
//Single fibonnaci element at n recursively
function fibNumberRec(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (Number.isInteger(n) && n > 2) {
    return fibNumberRec(n - 1) + fibNumberRec(n - 2);
  }
}
//Sequence of fibonacci characters up to specified n
function fibSequenceRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  console.log("This was printed out recursively");
  if (Number.isInteger(n) && n >= 2) {
    const prev = fibSequenceRec(n - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
  }
}

console.log(fibSequenceRec(8));
