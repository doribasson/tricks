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

const merge = (left, right) => {
  const resArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    left[leftIdx] < right[rightIdx]
      ? resArr.push(left[leftIdx++])
      : resArr.push(right[rightIdx++]);
  }
  return [...resArr, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

const mergeSort = arr => {
  arr.length <= 1
    ? arr
    : merge(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)))
      );
  return arr;
};

let ress = mergeSort([6, 77, 3, 2, 9]);
console.log(ress);
console.log(mergeSort([6, 77, 3, 2, 9]));
