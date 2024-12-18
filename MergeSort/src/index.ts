import { MergeSort } from "./MergeSort";

const numberArray = [38, 27, 43, 3, 9, 82, 10];
const mergeSort = new MergeSort<number>();
console.log("Array original:", numberArray);
console.log("Array ordenado:", mergeSort.sort(numberArray));


const stringArray = ["banana", "apple", "cherry", "date"];
const mergeSortString = new MergeSort<string>();
console.log("Array original:", stringArray);
console.log("Array ordenado:", mergeSortString.sort(stringArray));
