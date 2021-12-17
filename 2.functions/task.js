// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    } 

    sum = sum + arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    const result = func(arrOfArr[i]);

    if (result > max) {
      max = result;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    } 
  }

  return max - min;
}

// проверка задания 3
console.log('Проверка задания №3: ' + makeWork([[-10, -20, -40], [10, 20, 30]],worker2));
console.log('Проверка задания №3: ' + makeWork([[0, 0, 0], [-1, -99]],worker2));
