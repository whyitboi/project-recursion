//MERGE SORT
function merge(leftHalfArray, rightHalfArray) {
  let result = [];
  //use while loop to check while both arrays are not empty
  while (leftHalfArray.length > 0 && rightHalfArray.length > 0) {
    leftHalfArray[0] <= rightHalfArray[0]
      ? result.push(leftHalfArray.shift())
      : result.push(rightHalfArray.shift());
  }
  //use destructing to return
  return [...result, ...leftHalfArray, ...rightHalfArray];
}

function mergeSort(someArray) {
  if (someArray.length <= 1) return someArray;
  const leftHalf = Math.floor(someArray.length / 2);
  const leftHalfArray = someArray.slice(0, leftHalf);
  const rightHalfArray = someArray.slice(leftHalf);

  return merge(mergeSort(leftHalfArray), mergeSort(rightHalfArray));
}
console.log(mergeSort([4, 5, 2, 8, 0]));
