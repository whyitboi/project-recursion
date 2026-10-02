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
  while (lefttHalfArray.length >= 0 || rightHalfArray.length >= 0) {
    if (lefttHalfArray.length === 0) {
      result.push(rightHalfArray[0]);
      rightHalfArray.shift();
    } else if (rightHalfArray.length === 0) {
      result.push(lefttHalfArray[0]);
      lefttHalfArray.shift();
    }
    if (lefttHalfArray[0] >= rightHalfArray[0]) {
      result.push(rightHalfArray[0]);
      rightHalfArray.shift();
    } else {
      result.push(lefttHalfArray[0]);
      lefttHalfArray.shift();
    }
  }
  //   console.log("Got here");
  return result;
  //merge(lefttHalfArray, rightHalfArray);

  //   mergeSort(lefttHalfArray);
  //   mergeSort(rightHalfArray);
}
mergeSort([4, 5, 2, 8, 0]);
