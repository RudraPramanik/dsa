function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - i]) {
        // let temp = arr[j];
        // arr[j] = arr[j - 1];
        // arr[j - 1] = temp;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([1, -1, 33, -12, 44, 66]));
