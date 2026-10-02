//MERGE SORT
function mergeSort(someArray) {
  if (someArray.length <= 1) return someArray;
  const lefttHalf = Math.floor(someArray.length / 2);
  const lefttHalfArray = someArray.slice(0, lefttHalf);
  const rightHalfArray = someArray.slice(lefttHalf);

  function merge(lefttHalfArray, rightHalfArray) {
    let result = [];
    //use while loop to check while both arrays are not empty
    while (lefttHalfArray.length > 0 && rightHalfArray.length > 0) {
      lefttHalfArray[0] >= rightHalfArray[0]
        ? result.push(rightHalfArray.shift())
        : result.push(lefttHalfArray.shift());
    }
    //use destructing to return
    return [...result, ...lefttHalfArray, ...rightHalfArray];
  }

  return merge(mergeSort(lefttHalfArray), mergeSort(rightHalfArray));
}
console.log(mergeSort([4, 5, 2, 8, 0]));
