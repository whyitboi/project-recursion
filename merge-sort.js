//MERGE SORT
function mergeSort(someArray) {
  let result = [];
  if (someArray.length <= 1) return someArray;
  const lefttHalf = Math.floor(someArray.length / 2);
  //const rightHalfStart = someArray.length - lefttHalf;
  const lefttHalfArray = someArray.slice(0, lefttHalf);
  const rightHalfArray = someArray.slice(lefttHalf);

  function merge(arrayOne, arrayTwo) {
    console.log(arrayOne.concat(arrayTwo));
  }

  while (lefttHalfArray.length > 0 && rightHalfArray.length > 0) {
    lefttHalfArray[0] >= rightHalfArray[0]
      ? result.push(rightHalfArray.shift())
      : result.push(lefttHalfArray.shift());
    // if (lefttHalfArray[0] >= rightHalfArray[0]) {
    //   result.push(rightHalfArray.shift());
    // } else {
    //   result.push(lefttHalfArray.shift());
    // }
  }
  if (lefttHalfArray.length === 0 || rightHalfArray.length === 0) {
    //if i check that one is empty how do I know which one to push
    // with .shift() to result below? because right now the 0 is being discarded.
    lefttHalfArray.length > 0
      ? result.push(lefttHalfArray.shift())
      : result.push(rightHalfArray.shift());
  }
  //   console.log("Got here");
  return result;
  //merge(lefttHalfArray, rightHalfArray);

  //   mergeSort(lefttHalfArray);
  //   mergeSort(rightHalfArray);
}
console.log(mergeSort([4, 5, 2, 8, 0]));
