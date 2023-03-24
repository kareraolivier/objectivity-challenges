const ArrayElementSwapper = (array, indexOne, indexTwo) => {
  //swapping array elements using their indexs
  [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  //return new array
  return array;
};
//printing result
console.log("Answer", ArrayElementSwapper([43, 45, 1, 5, 9, 0, 12], 2, 4));
