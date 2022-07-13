console.log("lol");

/* defult js sort
he will sort like a-z string
so if its number 30 so is like 3 take the first and the sort will not work good
so we need function inside and return a-b is like (a-b)==1
 arr.sort();
console.log(arr); */

//will fix if its number and not string
function sortJs(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
}

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++)
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  return arr;
}

// --------------------------------------------------

function bubbleSortImprove(arr) {
  let len = arr.length;
  let flag;
  do {
    flag = false;
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
  } while (flag);
  return arr;
}

// --------------------------------------------------

const selectionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    //set min to the current iteration of i
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

// ---------mergeSort-----------------------------------------

function merge(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));
  function mergeSort(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  return mergeSort(left, right);
}
const arr = [6, 9, 2, 30, 5, 11, 7];

console.log(merge(arr));

// console.log(dvide);
// console.log(result);

// const arr = [6, 9, 2, 30, 5, 11, 7];
// console.log("before:", arr);
// sortJs(arr);
//bubbleSort(arr);
//bubbleSortImprove(arr);
// selectionSort(arr);
// mergeSort(arr);
console.log("after:", arr);
