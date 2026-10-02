//MERGE SORT
function mergeSort(someArray) {
  if (someArray.length <= 1) return someArray;
  const lefttHalf = Math.floor(someArray.length / 2);
  //const rightHalfStart = someArray.length - lefttHalf;
  const lefttHalfArray = someArray.slice(0, lefttHalf);
  const rightHalfArray = someArray.slice(lefttHalf);

  function merge(arrayOne, arrayTwo) {
    console.log(arrayOne.concat(arrayTwo));
  }
  merge(lefttHalfArray, rightHalfArray);
  //   console.log(lefttHalfArray);
  //   console.log(rightHalfArray);
  //   mergeSort(lefttHalfArray);
  //   mergeSort(rightHalfArray);
}
mergeSort([4, 5, 2, 8, 0]);
