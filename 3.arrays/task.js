function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  const arr2 = arr.filter(value => value > 0 && !(value % 3));
  resultArr = arr2.map((value) => value * 10); 

  return resultArr; // array
}
