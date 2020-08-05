
/**
 * average: O(n log n)
 * worst case: O(n^2)
 */
export function quickSort(arr: number[], low = 0, high = (arr.length - 1)) {
  if (low >= high) return;

  const pivot = partition(arr, low, high);

  quickSort(arr, low, pivot - 1);  // Before pivot
  quickSort(arr, pivot + 1, high);
}

function partition(arr: number[], low: number, high: number) {
  // pivot (Element to be placed at right position)
  const pivot = arr[high];

  // Index of smaller element
  let i = (low - 1);

  for (let j = low; j < high; j += 1) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i += 1;    // increment index of smaller element
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return (i + 1);
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}