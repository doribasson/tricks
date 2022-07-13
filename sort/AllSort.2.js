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

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort1(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort1(left), mergeSort1(array));

  //   the same like
  //   const left = array.slice(0, half);
  //   const right = array.slice(half);
  //   return merge(mergeSort(left), mergeSort(right));
}

const array = [4, 8, 7, 2, 11, 155, 3];
//console.log(mergeSort1(array));

const merge2 = (left, right) => {
  const resArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    left[leftIdx] < right[rightIdx]
      ? resArr.push(left[leftIdx++])
      : resArr.push(right[rightIdx++]);
  }
  let ress = [...resArr, ...left.slice(leftIdx), ...right.slice(rightIdx)];
  return [...resArr, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

const mergeSort2 = arr2 => {
  console.log(arr2.length);
  arr2.length <= 1
    ? arr2
    : merge2(
        mergeSort2(arr2.slice(0, Math.floor(arr2.length / 2))),
        mergeSort2(arr2.slice(Math.floor(arr2.length / 2)))
      );
  return arr2;
};

const arr2 = [9, 55, 3, 78, 1];
console.log("before:", arr2);
// const result = mergeSort2(arr2);
console.log(mergeSort2(arr2));

// console.log("after:", result);
// console.log(mergeSort2(arr2));

// console.log(dvide);
// console.log(result);

// const arr = [6, 9, 2, 30, 5, 11, 7];
// console.log("before:", arr);
// sortJs(arr);
//bubbleSort(arr);
//bubbleSortImprove(arr);
// selectionSort(arr);
// mergeSort(arr);
// console.log("after:", arr);
